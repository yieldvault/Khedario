import { chromium } from 'playwright';
import fs from 'node:fs';
const B = 'http://localhost:4321';
const br = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const out = { errors: [], broken: [], overflow: [], pages: 0 };
const ctx = await br.newContext();
const seen = new Set(), queue = ['/'];
while (queue.length) {
  const p = queue.shift(); if (seen.has(p)) continue; seen.add(p);
  const pg = await ctx.newPage();
  pg.on('console', (m) => m.type() === 'error' && out.errors.push(`${p}: ${m.text()}`));
  pg.on('pageerror', (e) => out.errors.push(`${p}: ${e.message}`));
  pg.on('requestfailed', (r) => out.broken.push(`${p}: ${r.url()}`));
  const res = await pg.goto(B + p, { waitUntil: 'networkidle' });
  if (!res || res.status() !== 200) out.broken.push(`${p}: status ${res?.status()}`);
  out.pages++;
  const hrefs = await pg.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')));
  for (const h of hrefs) if (h.startsWith('/')) { const u = h.split('#')[0].split('?')[0] || '/'; if (!seen.has(u)) queue.push(u); }
  for (const w of [360, 768, 1024, 1440]) {
    await pg.setViewportSize({ width: w, height: 900 });
    const sw = await pg.evaluate(() => document.documentElement.scrollWidth);
    if (sw > w) out.overflow.push(`${p}@${w}: ${sw}`);
  }
  await pg.close();
}
out.crawled = [...seen];
// 404
{ const pg = await ctx.newPage(); const r = await pg.goto(B + '/nope'); out.notFound = { status: r.status(), title: await pg.title() }; await pg.close(); }
// screenshots
const shot = async (path, w, file) => { const pg = await br.newPage({ viewport: { width: w, height: 900 } }); await pg.emulateMedia({ reducedMotion: 'reduce' }); await pg.goto(B + path, { waitUntil: 'networkidle' }); await pg.screenshot({ path: 'screens/v2-' + file, fullPage: true }); await pg.close(); };
await shot('/', 1440, 'home-1440.png'); await shot('/', 360, 'home-360.png'); await shot('/services/centralized-exchange-development', 1440, 'service-cex-1440.png');
// mobile menu keyboard
{ const pg = await br.newPage({ viewport: { width: 360, height: 800 } }); await pg.goto(B + '/');
  await pg.keyboard.press('Tab'); await pg.keyboard.press('Tab'); await pg.keyboard.press('Tab');
  const f = await pg.evaluate(() => document.activeElement.className);
  await pg.keyboard.press('Enter');
  const exp = await pg.getAttribute('.menu-btn', 'aria-expanded'); const vis = await pg.isVisible('#nav-menu a[href="/services"]');
  const focused = await pg.evaluate(() => document.activeElement.getAttribute('href'));
  await pg.keyboard.press('Tab'); await pg.keyboard.press('Tab');
  await pg.keyboard.press('Escape'); const exp2 = await pg.getAttribute('.menu-btn', 'aria-expanded'); const back = await pg.evaluate(() => document.activeElement.className);
  out.menu = { focusedBeforeEnter: f, expanded: exp, linkVisible: vis, firstFocus: focused, afterEscape: exp2, focusReturned: back };
  await pg.screenshot({ path: '/tmp/menu.png' }); await pg.close(); }
// form
{ const pg = await br.newPage(); await pg.goto(B + '/contact?service=crypto-wallet-development');
  const pre = await pg.inputValue('#service');
  await pg.click('#submit'); const s1 = await pg.textContent('#status'); const inv = await pg.$$eval('[aria-invalid=true]', (e) => e.map((x) => x.id));
  await pg.fill('#name', 'Test User'); await pg.fill('#email', 'test@example.com'); await pg.fill('#message', 'We need a self-custodial wallet for our app.');
  await pg.click('#submit'); const s2 = await pg.textContent('#status');
  out.form = { preselected: pre, emptySubmit: s1, invalidFields: inv, noEndpointSubmit: s2, unavailableNote: await pg.isVisible('#unavail') };
  // simulate configured endpoint: success and error
  for (const [code, key] of [[200, 'mockSuccess'], [500, 'mockError']]) {
    await pg.evaluate(() => document.getElementById('enquiry').dataset.endpoint = 'https://example.invalid/f');
  }
  await pg.close(); }
console.log(JSON.stringify(out, null, 1));
await br.close();
