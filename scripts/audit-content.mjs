import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'src', 'content', 'docs');

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

function split(text) {
  if (!text.startsWith('---')) return { fm: '', body: text };
  const end = text.indexOf('\n---', 3);
  return end === -1 ? { fm: '', body: text } : { fm: text.slice(3, end), body: text.slice(end + 4) };
}

function rel(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, '/');
}

const files = await walk(DOCS_ROOT);
const report = {
  migrationStatus: {},
  toMigrate: [],
  prototypeExcerpt: [],
  staleMigrationLanguage: [],
  legacyMarkup: [],
  monoliths: [],
  multipleBodyH1: [],
  suspiciousDescriptions: [],
};

const staleRe = /\b(ospiterà integralmente|raccoglierà integralmente|contenuto completo verrà|versione integrale manterrà|migrazione comprenderà|durante la migrazione|questa pagina è inclusa soprattutto|struttura prevista|nel sito definitivo)\b/i;
const legacyRe = /(\[\/?(?:color|quote|url|font|size|center|left|right)(?:=[^\]]*)?\]|\*\*\*\*)/i;

for (const file of files) {
  const text = await fs.readFile(file, 'utf8');
  const { fm, body } = split(text);
  const filePath = rel(file);
  const status = fm.match(/^\s*status:\s*([^\n#]+)/m)?.[1]?.trim().replace(/["']/g, '') ?? '(none)';
  report.migrationStatus[status] = (report.migrationStatus[status] ?? 0) + 1;

  if (status === 'to_migrate') report.toMigrate.push(filePath);
  if (/prototypeExcerpt:\s*true/i.test(fm)) report.prototypeExcerpt.push(filePath);
  if (staleRe.test(body)) report.staleMigrationLanguage.push(filePath);
  if (legacyRe.test(body)) report.legacyMarkup.push(filePath);

  const bodyH1 = body.match(/^#\s+.+$/gm) ?? [];
  if (bodyH1.length > 1) report.multipleBodyH1.push({ file: filePath, count: bodyH1.length });

  if (body.length >= 30000) report.monoliths.push({ file: filePath, chars: body.length });

  const description = fm.match(/^\s*description:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? '';
  if (/voce di prova|prototipo|migrazione/i.test(description)) report.suspiciousDescriptions.push({ file: filePath, description });
}

const byFile = (a, b) => (typeof a === 'string' ? a : a.file).localeCompare(typeof b === 'string' ? b : b.file, 'it');
for (const key of ['toMigrate','prototypeExcerpt','staleMigrationLanguage','legacyMarkup','monoliths','multipleBodyH1','suspiciousDescriptions']) {
  report[key].sort(byFile);
}

console.log('FELIX editorial audit');
console.log(JSON.stringify(report, null, 2));
console.log('\nNota: questo audit segnala debito editoriale; non modifica né riconcilia automaticamente le regole.');
