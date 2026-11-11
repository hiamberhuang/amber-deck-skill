/* Deck runtime · 无依赖
   键盘：→ / 空格 / PageDown 下一步；← / PageUp 上一步；Home / End；O 或 Esc 概览；F 全屏；M 动效开关；P 打印
   深链：#/7 打开第 7 页；#loop-rings 打开 id 为 loop-rings 的页；?static 关闭动效（截图、导出用）
   分步：页内元素加 data-step="1..n"，按 → 逐个出现 */
(() => {
  const W = 1440, H = 810;
  const stage = document.getElementById('stage');
  const slides = [...stage.querySelectorAll(':scope > .slide')];
  const q = new URLSearchParams(location.search);
  const root = document.documentElement;
  let cur = 0, step = 0;

  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  const setMotion = off => root.classList.toggle('no-motion', off);
  setMotion(mq.matches || q.has('static'));
  mq.addEventListener?.('change', e => setMotion(e.matches));

  /* chrome */
  const chrome = document.createElement('div');
  chrome.className = 'chrome';
  chrome.innerHTML = `<span class="chrome-label">${document.title}</span>
    <nav class="chrome-nav"><button data-act="prev" aria-label="上一页">‹</button>
    <span class="chrome-count"><b>01</b> / ${String(slides.length).padStart(2,'0')}</span>
    <button data-act="next" aria-label="下一页">›</button></nav>
    <span class="chrome-tools"><button data-act="overview">概览</button><button data-act="full">全屏</button><button data-act="print">打印</button></span>
    <i class="chrome-progress"><i></i></i>`;
  stage.appendChild(chrome);
  const countEl = chrome.querySelector('.chrome-count b'), bar = chrome.querySelector('.chrome-progress i');

  function fit() {
    const s = Math.min(innerWidth / W, innerHeight / H);
    stage.style.transform = `translate(${(innerWidth - W * s) / 2}px,${(innerHeight - H * s) / 2}px) scale(${s})`;
  }
  const steps = i => [...slides[i].querySelectorAll('[data-step]')].sort((a, b) => a.dataset.step - b.dataset.step);
  function paintSteps() { steps(cur).forEach((el, k) => el.classList.toggle('shown', k < step)); }

  function go(i, opts = {}) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((s, k) => { s.classList.toggle('active', k === i); s.setAttribute('aria-hidden', k !== i); });
    cur = i; step = opts.fromEnd ? steps(i).length : 0; paintSteps();
    countEl.textContent = String(i + 1).padStart(2, '0');
    bar.style.transform = `scaleX(${(i + 1) / slides.length})`;
    const id = slides[i].id; const h = '#/' + (i + 1);
    if (location.hash !== h && !(id && location.hash === '#' + id)) history.replaceState(null, '', h);
  }
  function next() { const n = steps(cur).length; if (step < n) { step++; paintSteps(); } else go(cur + 1); }
  function prev() { if (step > 0) { step--; paintSteps(); } else go(cur - 1, { fromEnd: true }); }
  function fromHash() {
    const m = location.hash.match(/^#\/(\d+)/);
    if (m) return go(+m[1] - 1);
    const t = location.hash.slice(1) && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    go(t ? slides.indexOf(t.closest('.slide')) : 0);
  }

  /* overview: static clones in a grid */
  const ov = document.createElement('div'); ov.className = 'overview'; ov.hidden = true; document.body.appendChild(ov);
  function overview(open = ov.hidden) {
    if (open) {
      ov.innerHTML = '';
      slides.forEach((s, k) => {
        const t = document.createElement('button'); t.className = 'ov-tile' + (k === cur ? ' is-cur' : '');
        const c = s.cloneNode(true); c.classList.add('active'); c.removeAttribute('id');
        c.querySelectorAll('[id]').forEach(e => e.removeAttribute('id'));
        c.querySelectorAll('[data-step]').forEach(e => e.classList.add('shown'));
        t.appendChild(c); t.insertAdjacentHTML('beforeend', `<span>${k + 1} · ${s.dataset.name || ''}</span>`);
        t.onclick = () => { overview(false); go(k); };
        ov.appendChild(t);
      });
      ov.hidden = false; root.classList.add('is-overview');
      ov.querySelectorAll('.ov-tile').forEach(t => t.style.setProperty('--ov-s', t.clientWidth / W)); ov.querySelector('.is-cur')?.scrollIntoView({ block: 'center' });
    } else { ov.hidden = true; root.classList.remove('is-overview'); }
  }
  const full = () => document.fullscreenElement ? document.exitFullscreen() : root.requestFullscreen?.();

  chrome.addEventListener('click', e => {
    const a = e.target.closest('button')?.dataset.act; if (!a) return;
    ({ prev, next, overview: () => overview(), full, print: () => print() })[a]();
  });
  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA/.test(e.target.tagName) || e.target.isContentEditable) return;
    const k = e.key;
    if (!ov.hidden && (k === 'Escape' || k === 'o' || k === 'O')) return overview(false);
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); prev(); }
    else if (k === 'Home') go(0); else if (k === 'End') go(slides.length - 1);
    else if (k === 'o' || k === 'O' || k === 'Escape') overview();
    else if (k === 'f' || k === 'F') full();
    else if (k === 'm' || k === 'M') setMotion(!root.classList.contains('no-motion'));
    else if (k === 'p' || k === 'P') print();
  });
  let tx = null;
  stage.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  stage.addEventListener('touchend', e => { if (tx == null) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) d < 0 ? next() : prev(); tx = null; });
  addEventListener('resize', fit); addEventListener('hashchange', fromHash);
  addEventListener('beforeprint', () => slides.forEach(s => s.querySelectorAll('[data-step]').forEach(e => e.classList.add('shown'))));
  window.deck = { go, next, prev, overview, slides };
  fit(); fromHash();
})();
