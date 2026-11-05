import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import assert from 'node:assert/strict';

const base = '';
const origin = 'https://bigsky2027.carterheslam.com';
const root = resolve('dist');
const html = await readFile(join(root, 'index.html'), 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
let checked = 0;
async function checkUrl(raw) {
  const value = raw.replaceAll('&amp;', '&');
  if (/^(?:https?:|data:|mailto:|\/\/)/.test(value)) return;
  if (value.startsWith('#')) {
    assert(ids.has(value.slice(1)), `Missing anchor: ${value}`);
    return;
  }
  const url = new URL(value, `${origin}${base}/`);
  assert(!url.pathname.startsWith('/bigsky2027/'), `Obsolete repository prefix: ${value}`);
  assert(url.pathname.startsWith(`${base}/`), `URL escapes Pages base: ${value}`);
  const local = resolve(root, '.' + decodeURIComponent(url.pathname.slice(base.length)));
  assert(local.startsWith(root), `Unsafe path: ${value}`);
  assert((await stat(local)).isFile(), `Missing asset: ${value}`);
  checked++;
}
for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) await checkUrl(match[1]);
for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
  for (const candidate of match[1].split(',')) await checkUrl(candidate.trim().split(/\s+/)[0]);
}
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    assert(!/^(?:\.env(?:\..*)?|\.git|\.aws|\.codex|\.agents|node_modules|scripts|docs)$/i.test(entry.name), `Unexpected published file: ${path}`);
    assert(!/\.(?:pem|key|pfx|map)$/i.test(entry.name), `Sensitive/debug artifact: ${path}`);
    if (entry.isDirectory()) await walk(path);
    else if (extname(path) === '.css') {
      const css = await readFile(path, 'utf8');
      for (const m of css.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) await checkUrl(m[1]);
    }
  }
}
await walk(root);
assert(html.includes('noindex, nofollow'), 'Missing robots metadata');
assert(html.includes(`href="${origin}${base}/"`), 'Incorrect canonical URL');
assert(html.includes(`property="og:url" content="${origin}/"`), 'Incorrect Open Graph URL');
assert.equal((await readFile(join(root, 'CNAME'), 'utf8')).trim(), 'bigsky2027.carterheslam.com', 'Incorrect custom domain');
assert(!html.includes('cheslam.github.io') && !html.includes('/bigsky2027/'), 'Obsolete deployment URL in HTML');
console.log(`Pages verification passed: ${checked} asset references, anchors, canonical URL, and artifact boundaries (${base || '/'}).`);
