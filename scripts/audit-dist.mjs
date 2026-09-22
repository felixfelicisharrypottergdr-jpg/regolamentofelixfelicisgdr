import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function rel(file) {
  return path.relative(DIST, file).replaceAll(path.sep, '/');
}

const repoName = (process.env.GITHUB_REPOSITORY || '/').split('/')[1] || '';
const configuredBase = process.env.BASE_PATH || (repoName ? `/${repoName}/` : '/');
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`;

function browserPathForHtml(file) {
  const p = rel(file);
  if (p === 'index.html') return base;
  if (p.endsWith('/index.html')) return `${base}${p.slice(0, -'index.html'.length)}`;
  return `${base}${p}`;
}

function stripBase(pathname) {
  if (base === '/') return pathname.replace(/^\/+/, '');
  if (!pathname.startsWith(base)) return null;
  return pathname.slice(base.length);
}

function targetFileForPath(pathname, allFiles) {
  let clean = stripBase(pathname);
  if (clean === null) return { outsideBase: true };
  try { clean = decodeURI(clean); } catch {}
  clean = clean.replace(/^\/+/, '');
  const candidates = [];
  if (!clean) candidates.push('index.html');
  else if (clean.endsWith('/')) candidates.push(`${clean}index.html`);
  else {
    candidates.push(clean);
    if (!path.extname(clean)) {
      candidates.push(`${clean}/index.html`);
      candidates.push(`${clean}.html`);
    }
  }
  const hit = candidates.find((candidate) => allFiles.has(candidate));
  return { file: hit, candidates };
}

function attrs(html, tag, attr) {
  const out = [];
  const tagRe = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
  for (const match of html.matchAll(tagRe)) {
    const raw = match[0];
    const attrRe = new RegExp(`\\b${attr}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
    const value = raw.match(attrRe);
    if (value) out.push(value[1] ?? value[2] ?? value[3] ?? '');
  }
  return out;
}

function fragmentTargets(html) {
  const values = new Set();
  for (const value of attrs(html, '[A-Za-z][A-Za-z0-9:-]*', 'id')) values.add(value);
  for (const match of html.matchAll(/<a\b[^>]*\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>/gi)) {
    values.add(match[1] ?? match[2] ?? match[3] ?? '');
  }
  return values;
}

const files = await walk(DIST);
const fileSet = new Set(files.map(rel));
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const htmlCache = new Map();
for (const file of htmlFiles) htmlCache.set(rel(file), await fs.readFile(file, 'utf8'));

const errors = [];
const warnings = [];
let anchorsChecked = 0;
let fragmentsChecked = 0;

for (const file of htmlFiles) {
  const sourceRel = rel(file);
  const html = htmlCache.get(sourceRel);
  const pagePath = browserPathForHtml(file);
  const ids = fragmentTargets(html);
  const rawIds = attrs(html, '[A-Za-z][A-Za-z0-9:-]*', 'id');
  const duplicateIds = [...new Set(rawIds.filter((value, index) => value && rawIds.indexOf(value) !== index))];
  for (const id of duplicateIds) errors.push(`${sourceRel}: id HTML duplicato #${id}.`);

  if (!/<html\b[^>]*\blang\s*=\s*["']it(?:-|["'])/i.test(html)) warnings.push(`${sourceRel}: lang italiano mancante.`);
  if (!/<title>[^<]+<\/title>/i.test(html)) warnings.push(`${sourceRel}: title HTML mancante o vuoto.`);
  if (!/<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(html)) warnings.push(`${sourceRel}: H1 renderizzato mancante.`);

  for (const button of html.matchAll(/<button\b[^>]*>[\s\S]*?<\/button>/gi)) {
    const raw = button[0];
    const hasAria = /\baria-label\s*=\s*(?:"[^"]+"|'[^']+')/i.test(raw) || /\baria-labelledby\s*=\s*(?:"[^"]+"|'[^']+')/i.test(raw);
    const hasTitle = /\btitle\s*=\s*(?:"[^"]+"|'[^']+')/i.test(raw);
    const text = raw.replace(/<[^>]+>/g, ' ').replace(/&[A-Za-z0-9#]+;/g, ' ').replace(/\s+/g, ' ').trim();
    if (!hasAria && !hasTitle && !text) warnings.push(`${sourceRel}: pulsante senza nome accessibile.`);
  }

  for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=\s*(?:"[^"]*"|'[^']*')/i.test(img[0])) warnings.push(`${sourceRel}: immagine senza attributo alt.`);
  }

  for (const href of attrs(html, 'a', 'href')) {
    if (!href || href === '#' || /^(?:https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(href)) continue;
    anchorsChecked += 1;

    let targetUrl;
    try { targetUrl = new URL(href, `https://felix.invalid${pagePath}`); }
    catch { errors.push(`${sourceRel}: href non interpretabile ${href}`); continue; }

    const target = targetFileForPath(targetUrl.pathname, fileSet);
    if (target.outsideBase) {
      errors.push(`${sourceRel}: link interno bypassa il base GitHub Pages: ${href}`);
      continue;
    }
    if (!target.file) {
      errors.push(`${sourceRel}: destinazione locale inesistente: ${href}`);
      continue;
    }

    if (targetUrl.hash) {
      fragmentsChecked += 1;
      let fragment = targetUrl.hash.slice(1);
      try { fragment = decodeURIComponent(fragment); } catch {}
      const targetHtml = htmlCache.get(target.file);
      if (!targetHtml) continue;
      const targetIds = target.file === sourceRel ? ids : fragmentTargets(targetHtml);
      if (!targetIds.has(fragment)) {
        errors.push(`${sourceRel}: frammento inesistente ${href} (target: ${target.file}#${fragment})`);
      }
    }
  }
}

console.log(`FELIX rendered audit: ${htmlFiles.length} pagine HTML, ${anchorsChecked} link locali, ${fragmentsChecked} frammenti controllati.`);
if (warnings.length) {
  console.warn('\nAvvisi render:');
  warnings.forEach((item) => console.warn(`- ${item}`));
}
if (errors.length) {
  console.error(`\nErrori nel sito renderizzato: ${errors.length}`);
  errors.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}
console.log('Audit del sito renderizzato superato.');
