import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src', 'content');
const UUID_RE = /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/gi;
const DEF_RE = /^\s*(id|felixId)\s*:\s*["']?([0-9a-f-]{36})["']?\s*$/im;
const SLUG_RE = /^\s*slug\s*:\s*["']?([a-z0-9-]+)["']?\s*$/im;

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

function rel(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

const files = await walk(CONTENT_ROOT);
const definitions = new Map();
const fileInfo = [];
const errors = [];
const warnings = [];

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

  // Considera riferimenti soltanto gli UUID che costituiscono l'intero
  // valore YAML di un campo o di una voce di lista. UUID presenti dentro URL
  // (per esempio nei nomi file delle immagini) non sono relazioni FELIX.
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
  const slug = fm.match(SLUG_RE)?.[1];
  fileInfo.push({ file: rel(file), id, refs, slug, collection: path.relative(CONTENT_ROOT, path.dirname(file)).split(path.sep)[0] });
}

for (const info of fileInfo) {
  for (const ref of info.refs) {
    if (!definitions.has(ref)) {
      errors.push(`${info.file}: riferimento UUID inesistente ${ref}.`);
    }
  }
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

const obsoleteNeedles = ['Duelli Cerimoniali'];
for (const needle of obsoleteNeedles) {
  const hits = [];
  for (const file of files) {
    const text = await fs.readFile(file, 'utf8');
    if (text.includes(needle)) hits.push(rel(file));
  }
  if (hits.length) warnings.push(`Riferimento obsoleto “${needle}” trovato in: ${hits.join(', ')}`);
}

console.log(`FELIX preflight: ${files.length} file di contenuto, ${definitions.size} UUID univoci.`);
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
