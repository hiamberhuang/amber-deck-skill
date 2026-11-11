#!/usr/bin/env node
/* Render every slide of an HTML deck and fail on the defects Amber rejects most.
   Usage: node qa_deck.cjs path/to/index.html [--out qa] [--w 1440 --h 810] [--slide .slide]
   Needs: npm i playwright (uses installed Chrome if present, else bundled Chromium). */
const path = require('path'), fs = require('fs'), { pathToFileURL } = require('url');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf('--' + k); return i > -1 ? args[i + 1] : d; };
const entry = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true) || args[0];
if (!entry) { console.error('usage: node qa_deck.cjs deck.html [--out qa]'); process.exit(2); }
const W = +opt('w', 1440), H = +opt('h', 810), SEL = opt('slide', '.slide'), OUT = path.resolve(opt('out', 'qa'));

(async () => {
  let chromium; try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('playwright-core')); }
  let browser;
  try { browser = await chromium.launch({ channel: 'chrome' }); } catch { browser = await chromium.launch(); }
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, offline: true, reducedMotion: 'reduce' });
  const page = await ctx.newPage(), errors = [], missing = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('requestfailed', r => missing.push(r.url()));
  await page.goto(pathToFileURL(path.resolve(entry)).href + '?static');
  await page.waitForTimeout(600);
  fs.mkdirSync(OUT, { recursive: true });
  const n = await page.locator(SEL).count();
  if (!n) { console.error(`no slides match "${SEL}"`); process.exit(2); }
  const report = [];
  for (let i = 0; i < n; i++) {
    for (const h of ['#/' + (i + 1), '#' + (i + 1)]) {
      await page.evaluate(h => { location.hash = h; }, h); await page.waitForTimeout(350);
      if (await page.evaluate(([sel, k]) => { const s = document.querySelectorAll(sel)[k]; return s.classList.contains('active') || s.classList.contains('is-active'); }, [SEL, i])) break;
    }
    // reveal stepwise content so the final state is what gets judged
    for (let s = 0; s < 12; s++) {
      const more = await page.evaluate(sel => {
        const a = document.querySelector(sel + '.active') || document.querySelector(sel + '.is-active');
        return !!a && !!a.querySelector('[data-step]:not(.shown):not(.is-shown)');
      }, SEL);
      if (!more) break;
      const before = await page.evaluate(() => location.hash);
      await page.keyboard.press('ArrowRight'); await page.waitForTimeout(120);
      if (await page.evaluate(() => location.hash) !== before) { await page.evaluate(h => { location.hash = h; }, before); await page.waitForTimeout(200); break; }
    }
    const m = await page.evaluate(([sel, i]) => {
      const slide = document.querySelectorAll(sel)[i], sr = slide.getBoundingClientRect(), issues = [];
      const vis = e => { const c = getComputedStyle(e); return c.visibility !== 'hidden' && c.display !== 'none' && +c.opacity > .05; };
      const chrome = e => e.closest('nav,footer,[data-chrome],.deck-chrome,.controls,.progress');
      let bottom = sr.top, right = sr.left, inkArea = 0; const texts = [];
      for (const e of slide.querySelectorAll('*')) {
        if (!vis(e) || chrome(e)) continue;
        const r = e.getBoundingClientRect(); if (r.width < 2 || r.height < 2) continue;
        const leafText = [...e.childNodes].some(x => x.nodeType === 3 && x.textContent.trim());
        const media = /^(IMG|SVG|VIDEO|CANVAS)$/i.test(e.tagName);
        if (!leafText && !media) continue;
        bottom = Math.max(bottom, r.bottom); right = Math.max(right, r.right); inkArea += r.width * r.height;
        if (r.right > sr.right + 1 || r.bottom > sr.bottom + 1 || r.left < sr.left - 1 || r.top < sr.top - 1)
          issues.push({ rule: 'overflow', text: (e.textContent || e.tagName).trim().slice(0, 24) });
        if (leafText) {
          const cs = getComputedStyle(e), fs = parseFloat(cs.fontSize), txt = e.textContent.trim();
          texts.push({ tag: e.tagName, fs, txt: txt.slice(0, 30) });
          if (e.scrollWidth > e.clientWidth + 2 && cs.overflow !== 'visible') issues.push({ rule: 'clipped-text', text: txt.slice(0, 24) });
          // orphan: last rendered line holds 1-2 characters
          const range = document.createRange(); range.selectNodeContents(e);
          const lines = []; for (const q of range.getClientRects()) { const l = lines.find(a => Math.abs(a.top - q.top) < 3); l ? (l.w += q.width) : lines.push({ top: q.top, w: q.width }); }
          if (lines.length > 1 && lines[lines.length - 1].w < fs * 2.6 && txt.length > 6) issues.push({ rule: 'orphan-line', text: txt.slice(-12) });
          if (fs < 12 * (slide.offsetWidth / 1440) - .5 && txt.length > 8) issues.push({ rule: 'text-too-small', text: `${fs}px ${txt.slice(0, 16)}` });
        }
      }
      const sparse = slide.matches('.cover,.section,.closing,[data-sparse],[class*="cover"]') || /cover|statement|closing|thanks|section/.test(slide.id);
      const fill = (bottom - sr.top) / sr.height;
      if (!sparse && fill < .78) issues.push({ rule: 'empty-lower-area', text: `content ends at ${Math.round(fill * 100)}% of height` });
      const h = slide.querySelector('h1,h2,.title'), sub = slide.querySelector('.subtitle,.sub,h2+p,h1+p');
      const cards = [...slide.querySelectorAll('.card,[class*="card"]')].filter(vis).length;
      if (cards > 9) issues.push({ rule: 'card-grid-overuse', text: cards + ' cards' });
      return { title: h ? h.textContent.trim().slice(0, 40) : '', titleSize: h ? parseFloat(getComputedStyle(h).fontSize) : null, titleTop: h ? Math.round(h.getBoundingClientRect().top - sr.top) : null,
        subSize: sub ? parseFloat(getComputedStyle(sub).fontSize) : null, kind: slide.className + (sparse ? ' cover' : ''), family: slide.dataset.family || 'default', fill: +fill.toFixed(2), words: slide.innerText.replace(/\s/g, '').length, issues };
    }, [SEL, i]);
    if (m.words > 450) m.issues.push({ rule: 'too-much-text', text: m.words + ' chars' });
    await page.screenshot({ path: path.join(OUT, `slide-${String(i + 1).padStart(2, '0')}.png`) });
    report.push({ slide: i + 1, ...m });
  }
  // cross-slide consistency: body-slide titles share size and position
  const body = report.filter(r => r.titleSize && !/cover|section|closing/.test(r.kind));
  const mode = a => { const c = {}; a.forEach(v => c[v] = (c[v] || 0) + 1); return +Object.entries(c).sort((x, y) => y[1] - x[1])[0]?.[0]; };
  for (const fam of new Set(body.map(r => r.family))) {
    const g = body.filter(r => r.family === fam);
    const ts = mode(g.map(r => r.titleSize)), tt = mode(g.map(r => r.titleTop)), ss = mode(g.filter(r => r.subSize).map(r => r.subSize));
    for (const r of g) {
      if (Math.abs(r.titleSize - ts) > 1) r.issues.push({ rule: 'title-size-inconsistent', text: `${r.titleSize}px vs deck ${ts}px` });
      if (Math.abs(r.titleTop - tt) > 6) r.issues.push({ rule: 'title-position-inconsistent', text: `top ${r.titleTop}px vs deck ${tt}px` });
      if (r.subSize && Math.abs(r.subSize - ss) > 1) r.issues.push({ rule: 'subtitle-size-inconsistent', text: `${r.subSize}px vs deck ${ss}px` });
    }
  }
  const local = missing.filter(u => u.startsWith('file:'));
  const result = { entry, canvas: [W, H], slides: n, pageErrors: errors, missingLocalAssets: local, externalRequests: missing.filter(u => !u.startsWith('file:')), report };
  fs.writeFileSync(path.join(OUT, 'qa-report.json'), JSON.stringify(result, null, 2));
  let bad = errors.length + local.length;
  for (const r of report) for (const x of r.issues) { bad++; console.log(`P${String(r.slide).padStart(2, '0')} ${x.rule}: ${x.text}`); }
  errors.forEach(e => console.log('page error: ' + e)); local.forEach(u => console.log('missing asset: ' + u));
  if (result.externalRequests.length) console.log(`note: ${result.externalRequests.length} external requests blocked offline (deck must not depend on them)`);
  console.log(bad ? `\n${bad} issue(s). Screenshots in ${OUT}. Fix, rerun, then look at every screenshot yourself.` : `\nAutomatic checks pass on ${n} slides. Now look at every screenshot in ${OUT}: passing here is not the same as looking good.`);
  await browser.close(); process.exit(bad ? 1 : 0);
})().catch(e => { console.error(/Cannot find module 'playwright/.test(e.message) ? 'Install first: npm i playwright' : e); process.exit(2); });
