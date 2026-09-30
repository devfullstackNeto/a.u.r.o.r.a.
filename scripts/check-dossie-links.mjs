import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dossier = join(root, 'docs', 'dossie-final');
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (path.endsWith('.md')) files.push(path);
  }
}
walk(dossier);
walk(join(root, 'docs', 'sprint-05'));
const failures = [];
let links = 0;
for (const file of files) {
  const source = readFileSync(file, 'utf8');
  if (!source.trim()) failures.push(`${file}: documento vazio`);
  const linkPattern = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of source.matchAll(linkPattern)) {
    const target = match[1].split('#')[0].split('?')[0];
    if (!target || /^(https?:|mailto:)/i.test(target)) continue;
    links++;
    const path = resolve(dirname(file), decodeURIComponent(target.replace(/^<|>$/g, '')));
    if (!path.startsWith(root) || !existsSync(path) || !statSync(path).isFile()) {
      failures.push(`${file}: link ausente ${match[1]}`);
    }
  }
}
console.log(`${files.length} documentos Markdown; ${links} links locais verificados.`);
if (failures.length) {
  failures.forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
