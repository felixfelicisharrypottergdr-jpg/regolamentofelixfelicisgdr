import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src', 'content');
const DEF_RE = /^\s*(id|felixId)\s*:\s*["']?([0-9a-f-]{36})["']?\s*$/im;
const SLUG_RE = /^\s*slug\s*:\s*["']?([a-z0-9-]+)["']?\s*$/im;

const structuredRoutes = {
  creatures: '/manuali/magizoologia/bestiario/',
  diseases: '/manuali/medimagia/malattie/',
  ingredients: '/manuali/ingredienti/',
  potions: '/manuali/pozionistica/pozionario/',
  spells: '/manuali/incantesimi/',
  plants: '/manuali/erbologia/erbario/',
  races: '/il-personaggio/razze/',
  objects: '/mondo-magico/commercio/oggetti/',
  missions: '/il-personaggio/pg-studente/modalita-di-gioco/fantahogwarts/missioni/',
  'adult-missions': '/il-personaggio/pg-adulto/modalita-di-gioco/fantawiz/missioni/',
  masteries: '/conoscenze-e-sapienze/maestrie/catalogo/',
  'divination-techniques': '/manuali/divinazione/tecniche/',
  'school-knowledges': '/manuali/conoscenze-scolastiche/conoscenze/',
  'legal-documents': '/mondo-magico/leggi/documenti/',
  'legal-articles': '/mondo-magico/leggi/articoli/',
};

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(md|mdx)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function frontmatterOf(text) {
  if (!text.startsWith('---')) return '';
  const end = text.indexOf('\n---', 3);
  return end === -1 ? '' : text.slice(3, end);
}

function bodyOf(text) {
  if (!text.startsWith('---')) return text;
  const end = text.indexOf('\n---', 3);
  return end === -1 ? text : text.slice(end + 4);
}

function rel(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

function normalizeRoute(route) {
  const clean = route.replace(/\/index\.html$/i, '/').replace(/\/+/g, '/');
  return clean === '/' ? '/' : `${clean.replace(/\/$/, '')}/`;
}

function docRoute(file) {
  let id = path.relative(path.join(CONTENT_ROOT, 'docs'), file).replaceAll(path.sep, '/').replace(/\.mdx?$/i, '');
  if (id === 'index') return '/';
  id = id.replace(/\/index$/i, '');
  return normalizeRoute(`/${id}/`);
}

function routeTarget(href, currentRoute) {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(trimmed)) return null;
  const noFragment = trimmed.split('#')[0].split('?')[0];
  if (!noFragment) return null;
  if (/\.(png|jpe?g|gif|webp|svg|pdf|zip|css|js|json)$/i.test(noFragment)) return null;
  try {
    return normalizeRoute(new URL(noFragment, `https://felix.local${currentRoute}`).pathname);
  } catch {
    return null;
  }
}

const files = await walk(CONTENT_ROOT);
const definitions = new Map();
const fileInfo = [];
const errors = [];
const warnings = [];
const validRoutes = new Set(['/']);
const docsRoutes = new Map();

for (const file of files) {
  const text = await fs.readFile(file, 'utf8');
  const fm = frontmatterOf(text);
  if (!fm) {
    errors.push(`${rel(file)}: frontmatter YAML mancante.`);
    continue;
  }

  const def = fm.match(DEF_RE);
  if (!def) {
    errors.push(`${rel(file)}: manca id/felixId UUID nel frontmatter.`);
    continue;
  }

  const id = def[2].toLowerCase();
  if (definitions.has(id)) {
    errors.push(`UUID duplicato ${id}: ${definitions.get(id)} e ${rel(file)}.`);
  } else {
    definitions.set(id, rel(file));
  }

  const refs = [];
  for (const line of fm.split(/\r?\n/)) {
    const scalar = line.match(/^\s*([A-Za-z0-9_]+)\s*:\s*["']?([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})["']?\s*$/i);
    if (scalar && !['id', 'felixId'].includes(scalar[1])) {
      refs.push(scalar[2].toLowerCase());
      continue;
    }
    const listItem = line.match(/^\s*-\s*["']?([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})["']?\s*$/i);
    if (listItem) refs.push(listItem[1].toLowerCase());
  }

  const relativeToContent = path.relative(CONTENT_ROOT, file).replaceAll(path.sep, '/');
  const collection = relativeToContent.split('/')[0];
  const slug = fm.match(SLUG_RE)?.[1];
  fileInfo.push({ file: rel(file), id, refs, slug, collection, text });

  if (collection === 'docs') {
    const route = docRoute(file);
    const previous = docsRoutes.get(route);
    if (previous) errors.push(`Route docs duplicata ${route}: ${previous} e ${rel(file)}.`);
    else docsRoutes.set(route, rel(file));
    validRoutes.add(route);
  } else if (slug && structuredRoutes[collection]) {
    const base = structuredRoutes[collection];
    validRoutes.add(normalizeRoute(base));
    validRoutes.add(normalizeRoute(`${base}${slug}/`));
  }
}

for (const info of fileInfo) {
  for (const ref of info.refs) {
    if (!definitions.has(ref)) errors.push(`${info.file}: riferimento UUID inesistente ${ref}.`);
}

const slugsByCollection = new Map();
for (const info of fileInfo) {
  if (!info.slug) continue;
  const key = `${info.collection}::${info.slug}`;
  if (slugsByCollection.has(key)) {
    errors.push(`Slug duplicato nella collection ${info.collection}: ${info.slug} (${slugsByCollection.get(key)} e ${info.file}).`);
  } else {
    slugsByCollection.set(key, info.file);
  }
}

for (const info of fileInfo.filter((item) => item.collection === 'docs')) {
  const sourceFile = path.join(ROOT, info.file);
  const currentRoute = docRoute(sourceFile);
  const body = bodyOf(info.text);
  for (const match of body.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)) {
    const href = match[1].trim();
    const target = routeTarget(href, currentRoute);
    if (target && !validRoutes.has(target)) errors.push(`${info.file}: link interno verso route inesistente ${href} → ${target}.`);
  }
}

const obsoleteNeedles = ['Duelli Cerimoniali'];
for (const needle of obsoleteNeedles) {
  const hits = [];
  for (const file of files) {
    const text = await fs.readFile(file, 'utf8');
    if (text.includes(needle)) hits.push(rel(file));
  }
  if (hits.length) warnings.push(`Riferimento obsoleto “${needle}” trovato in: ${hits.join(', ')}`);
}

console.log(`FELIX preflight: ${files.length} file di contenuto, ${definitions.size} UUID univoci, ${validRoutes.size} route note.`);
if (warnings.length) {
  console.warn('\nAvvisi:');
  warnings.forEach((item) => console.warn(`- ${item}`));
}
if (errors.length) {
  console.error('\nErrori di integrità:');
  errors.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}
console.log('Controlli di integrità superati.');
