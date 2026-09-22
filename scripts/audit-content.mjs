import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src', 'content');
const DOCS_ROOT = path.join(CONTENT_ROOT, 'docs');
const PAGES_ROOT = path.join(ROOT, 'src', 'pages');

async function walk(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) files.push(...await walk(full));
      else files.push(full);
    }
    return files;
  } catch {
    return [];
  }
}

function split(text) {
  if (!text.startsWith('---')) return { fm: '', body: text };
  const end = text.indexOf('\n---', 3);
  return end === -1 ? { fm: '', body: text } : { fm: text.slice(3, end), body: text.slice(end + 4) };
}

function rel(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

function normalizedRoute(value) {
  if (!value) return '/';
  const clean = value.split('#')[0].split('?')[0] || '/';
  const prefixed = clean.startsWith('/') ? clean : `/${clean}`;
  return prefixed === '/' ? '/' : `${prefixed.replace(/\/+$/, '')}/`;
}

function docRoute(file) {
  let id = path.relative(DOCS_ROOT, file).replaceAll(path.sep, '/').replace(/\.mdx?$/i, '');
  if (id === 'index') return '/';
  id = id.replace(/\/index$/, '');
  return normalizedRoute(id);
}

function pageRoute(file) {
  let id = path.relative(PAGES_ROOT, file).replaceAll(path.sep, '/').replace(/\.astro$/i, '');
  if (id.includes('[')) return null;
  if (id === 'index') return '/';
  id = id.replace(/\/index$/, '');
  return normalizedRoute(id);
}

function resolveInternalHref(href, currentRoute) {
  const raw = href.trim();
  if (!raw || /^(?:https?:|mailto:|tel:|javascript:|#|\/\/)/i.test(raw)) return null;
  try {
    return normalizedRoute(new URL(raw, `https://felix.invalid${currentRoute}`).pathname);
  } catch {
    return null;
  }
}

function frontmatterValue(fm, key) {
  return fm.match(new RegExp(`^\\s*${key}:\\s*["']?([^\\n"']+)["']?\\s*$`, 'm'))?.[1]?.trim();
}

const docFiles = (await walk(DOCS_ROOT)).filter((file) => /\.(md|mdx)$/i.test(file));
const pageFiles = (await walk(PAGES_ROOT)).filter((file) => /\.astro$/i.test(file));
const allContentFiles = (await walk(CONTENT_ROOT)).filter((file) => /\.(md|mdx)$/i.test(file));

const structuredBases = {
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
  masteries: '/conoscenze-e-sapienze/maestrie/',
  'divination-techniques': '/manuali/divinazione/tecniche/',
  'school-knowledges': '/manuali/conoscenze-scolastiche/conoscenze/',
  'legal-documents': '/mondo-magico/leggi/documenti/',
  'legal-articles': '/mondo-magico/leggi/articoli/',
};

const validRoutes = new Set(['/']);
const routesToFiles = new Map();

for (const file of docFiles) {
  const route = docRoute(file);
  validRoutes.add(route);
  const files = routesToFiles.get(route) ?? [];
  files.push(rel(file));
  routesToFiles.set(route, files);
}

for (const file of pageFiles) {
  const route = pageRoute(file);
  if (route) validRoutes.add(route);
}

for (const [collection, base] of Object.entries(structuredBases)) {
  validRoutes.add(normalizedRoute(base));
  const dir = path.join(CONTENT_ROOT, collection);
  for (const file of (await walk(dir)).filter((item) => /\.(md|mdx)$/i.test(item))) {
    const text = await fs.readFile(file, 'utf8');
    const { fm } = split(text);
    const slug = frontmatterValue(fm, 'slug') || path.basename(file).replace(/\.mdx?$/i, '');
    validRoutes.add(normalizedRoute(`${base}${slug}/`));
  }
}

// Legal hub is a hand-authored page backed by two structured collections.
validRoutes.add('/mondo-magico/leggi/');

const report = {
  summary: {
    docs: docFiles.length,
    contentFiles: allContentFiles.length,
    knownRoutes: validRoutes.size,
  },
  structuralErrors: [],
  duplicateRoutes: [],
  brokenInternalLinks: [],
  rootRelativeInternalLinks: [],
  externalForumLinks: [],
  migrationStatus: {},
  toMigrate: [],
  prototypeExcerpt: [],
  staleMigrationLanguage: [],
  legacyMarkup: [],
  monoliths: [],
  multipleBodyH1: [],
  suspiciousDescriptions: [],
  headingJumps: [],
  duplicateTitles: [],
  joinedWordCandidates: [],
  duplicateParagraphCandidates: [],
  numericConflictCandidates: [],
};

for (const [route, files] of routesToFiles.entries()) {
  if (files.length > 1) {
    report.duplicateRoutes.push({ route, files });
    report.structuralErrors.push(`Route documentale duplicata ${route}: ${files.join(', ')}`);
  }
}

const titles = new Map();
const paragraphIndex = new Map();
const numericSkeletonIndex = new Map();

function normalizeAuditProse(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/!?!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function addIndexed(map, key, item) {
  const rows = map.get(key) ?? [];
  rows.push(item);
  map.set(key, rows);
}
const staleRe = /\b(ospiterà integralmente|raccoglierà integralmente|contenuto completo verrà|versione integrale manterrà|migrazione comprenderà|durante la migrazione|questa pagina è inclusa soprattutto|struttura prevista|nel sito definitivo|in questo prototipo)\b/i;
const legacyRe = /(\[\/?(?:color|quote|url|font|size|center|left|right)(?:=[^\]]*)?\]|\*\*\*\*)/i;
const markdownLinkRe = /!?\[[^\]]*\]\(([^)]+)\)/g;

for (const file of docFiles) {
  const text = await fs.readFile(file, 'utf8');
  const { fm, body } = split(text);
  const filePath = rel(file);
  const currentRoute = docRoute(file);
  const status = fm.match(/^\s*status:\s*([^\n#]+)/m)?.[1]?.trim().replace(/["']/g, '') ?? '(none)';
  report.migrationStatus[status] = (report.migrationStatus[status] ?? 0) + 1;

  if (status === 'to_migrate') report.toMigrate.push(filePath);
  if (/prototypeExcerpt:\s*true/i.test(fm)) report.prototypeExcerpt.push(filePath);
  if (staleRe.test(body)) report.staleMigrationLanguage.push(filePath);
  if (legacyRe.test(body)) report.legacyMarkup.push(filePath);

  for (const match of body.matchAll(markdownLinkRe)) {
    let href = match[1].trim();
    // Strip optional Markdown title: (url "title")
    href = href.replace(/\s+["'][^"']*["']\s*$/, '');
    if (/^https?:\/\//i.test(href)) {
      if (/forumfree\.it/i.test(href)) report.externalForumLinks.push({ file: filePath, href });
      continue;
    }
    const target = resolveInternalHref(href, currentRoute);
    if (!target) continue;
    if (href.startsWith('/')) report.rootRelativeInternalLinks.push({ file: filePath, href, target });
    if (!validRoutes.has(target)) {
      const item = { file: filePath, href, target };
      report.brokenInternalLinks.push(item);
      report.structuralErrors.push(`Link interno inesistente in ${filePath}: ${href} -> ${target}`);
    }
  }

  const bodyH1 = body.match(/^#\s+.+$/gm) ?? [];
  if (bodyH1.length > 1) report.multipleBodyH1.push({ file: filePath, count: bodyH1.length, headings: bodyH1.slice(0, 8) });

  if (body.length >= 30000) report.monoliths.push({ file: filePath, chars: body.length });

  const description = fm.match(/^\s*description:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? '';
  if (/voce di prova|prototipo|migrazione/i.test(description)) report.suspiciousDescriptions.push({ file: filePath, description });

  const title = fm.match(/^\s*title:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim() ?? '';
  if (title) {
    const key = title.toLocaleLowerCase('it');
    const list = titles.get(key) ?? [];
    list.push({ file: filePath, title });
    titles.set(key, list);
  }

  const headingRows = [...body.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((match) => ({
    depth: match[1].length,
    text: match[2].trim(),
  }));
  for (let i = 1; i < headingRows.length; i += 1) {
    const previous = headingRows[i - 1];
    const current = headingRows[i];
    if (current.depth - previous.depth > 1) {
      report.headingJumps.push({
        file: filePath,
        from: `H${previous.depth} ${previous.text}`,
        to: `H${current.depth} ${current.text}`,
      });
    }
  }

  // Cross-document duplication and numeric-conflict candidates.
  // These are editorial warnings only: the audit never chooses which rule is canonical.
  const proseRows = body
    .split(/\n{2,}/)
    .map((value) => normalizeAuditProse(value))
    .filter((value) => value.length >= 120 && !/^#{1,6}\s/.test(value));

  for (const paragraph of proseRows) {
    const duplicateKey = paragraph.toLocaleLowerCase('it');
    addIndexed(paragraphIndex, duplicateKey, { file: filePath, text: paragraph });

    if (/\d/.test(paragraph)) {
      const skeleton = duplicateKey
        .replace(/[+-]?\d+(?:[.,]\d+)?/g, '<n>')
        .replace(/\s+/g, ' ');
      if (skeleton.length >= 100) addIndexed(numericSkeletonIndex, skeleton, { file: filePath, text: paragraph });
    }
  }

  const knownJoined = new Set(['FantaHogwarts', 'FantaWiz', 'ForumFree', 'Pagefind', 'GitHub', 'ONGame', 'OFFGame']);
  const candidates = [...body.matchAll(/\b[A-Za-zÀ-ÖØ-öø-ÿ]*[a-zà-öø-ÿ][A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿ]+\b/g)]
    .map((match) => match[0])
    .filter((word) => !knownJoined.has(word));
  const uniqueCandidates = [...new Set(candidates)].slice(0, 30);
  if (uniqueCandidates.length) report.joinedWordCandidates.push({ file: filePath, words: uniqueCandidates });
}

for (const entries of titles.values()) {
  if (entries.length > 1) report.duplicateTitles.push({ title: entries[0].title, files: entries.map((item) => item.file) });
}

for (const entries of paragraphIndex.values()) {
  const files = [...new Set(entries.map((item) => item.file))];
  if (files.length < 2) continue;
  report.duplicateParagraphCandidates.push({
    files: files.slice(0, 12),
    chars: entries[0].text.length,
    text: entries[0].text.slice(0, 260),
  });
}

for (const entries of numericSkeletonIndex.values()) {
  const files = [...new Set(entries.map((item) => item.file))];
  const variants = [...new Set(entries.map((item) => item.text))];
  if (files.length < 2 || variants.length < 2) continue;
  report.numericConflictCandidates.push({
    files: files.slice(0, 12),
    variants: variants.slice(0, 6).map((value) => value.slice(0, 360)),
  });
}

// Keep CI output useful rather than flooding logs on deliberately duplicated legacy material.
report.duplicateParagraphCandidates = report.duplicateParagraphCandidates
  .sort((a, b) => b.chars - a.chars || a.files[0].localeCompare(b.files[0], 'it'))
  .slice(0, 200);
report.numericConflictCandidates = report.numericConflictCandidates
  .sort((a, b) => a.files[0].localeCompare(b.files[0], 'it'))
  .slice(0, 200);

const byFile = (a, b) => {
  const left = typeof a === 'string' ? a : (a.file ?? a.route ?? '');
  const right = typeof b === 'string' ? b : (b.file ?? b.route ?? '');
  return left.localeCompare(right, 'it');
};
for (const key of [
  'duplicateRoutes','brokenInternalLinks','rootRelativeInternalLinks','externalForumLinks',
  'toMigrate','prototypeExcerpt','staleMigrationLanguage','legacyMarkup','monoliths',
  'multipleBodyH1','suspiciousDescriptions','headingJumps','duplicateTitles','joinedWordCandidates',
  'duplicateParagraphCandidates','numericConflictCandidates',
]) {
  report[key].sort(byFile);
}

console.log('FELIX functional + editorial audit');
console.log(JSON.stringify(report, null, 2));
console.log('\nNota: le anomalie editoriali vengono segnalate ma non riconciliate automaticamente.');

if (report.structuralErrors.length) {
  console.error(`\nAudit funzionale fallito: ${report.structuralErrors.length} errore/i strutturale/i.`);
  report.structuralErrors.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log('\nAudit funzionale: nessun errore strutturale rilevato.');
