/* deck-lint.js · 固定画布幻灯片的版面体检。自写，MIT。
   规则的出处是公开的设计共识（见 ATTRIBUTION.md）；实现与阈值为本项目自定，按 1440×810 画布标定。
   用法：var issues = deckLint(slideEl, {minText:12, minBody:14, orphanMin:3, emptyMax:.35});
        deckLint.paint(issues) 在页面上描红框；每条 = {rule, level:'P1'|'P2', msg, el}
   需要 no-orphan.js 里的 lastLineCount（可选，没有就跳过孤字检查）。 */
(function (g) {
  function rgb(str) { var c = document.createElement('canvas').getContext('2d'); c.fillStyle = '#000'; c.fillStyle = str; c.fillRect(0, 0, 1, 1); var d = c.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; }
  function lum(c) { return [0, 1, 2].map(function (i) { var v = c[i] / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }).reduce(function (a, v, i) { return a + v * [.2126, .7152, .0722][i]; }, 0); }
  function over(fg, bg) { var a = fg[3]; return [0, 1, 2].map(function (i) { return fg[i] * a + bg[i] * (1 - a); }).concat(1); }
  function bgOf(el, stop) { // 向上合成背景色；遇到背景图/渐变返回 null（无法判定，交给人看）
    var chain = []; for (var e = el; e; e = e.parentElement) { chain.push(e); if (e === stop) break; }
    var bg = [255, 255, 255, 1];
    for (var i = chain.length - 1; i >= 0; i--) { var cs = getComputedStyle(chain[i]); if (cs.backgroundImage !== 'none' && i < chain.length - 1) return null; var c = rgb(cs.backgroundColor); if (c[3] > 0) bg = over(c, bg); }
    return bg;
  }
  function ownText(el) { return [].some.call(el.childNodes, function (n) { return n.nodeType === 3 && n.data.trim().length > 0; }); }
  function sig(el) { return [].map.call(el.children, function (c) { return c.tagName + '.' + c.className; }).join('|'); }
  function isCard(cs) { return parseFloat(cs.borderTopLeftRadius) > 0 && (cs.boxShadow !== 'none' || parseFloat(cs.borderTopWidth) > 0 || rgb(cs.backgroundColor)[3] > 0); }

  function deckLint(slide, opt) {
    opt = Object.assign({ minText: 12, minBody: 14, orphanMin: 3, emptyMax: .35, maxSizes: 8 }, opt);
    var R = slide.getBoundingClientRect(), k = R.width / slide.offsetWidth, out = [], sizes = {}, lowest = R.top;
    var all = slide.querySelectorAll('*:not(script):not(style):not(svg *)');
    function skip(el, rule) { var h = el.closest('[data-lint-skip]'); return h && (h.dataset.lintSkip === '' || h.dataset.lintSkip.split(' ').indexOf(rule) >= 0); }
    function add(rule, level, msg, el) { if (!skip(el, rule)) out.push({ rule: rule, level: level, msg: msg, el: el }); }
    function contrast(el, fg, fs, bold) {   // 文字压在图片 / SVG 形状上时，取它正下方那个元素的颜色；是位图就交给人看
      var b = el.getBoundingClientRect(), bg = bgOf(el.closest('svg') || el, slide), stack = document.elementsFromPoint(b.left + b.width / 2, b.top + b.height / 2);
      for (var i = 0; i < stack.length; i++) { var s = stack[i]; if (s === el || s.contains(el) && !(s instanceof SVGElement)) continue; if (el.contains(s)) continue;
        if (/^(IMG|VIDEO|CANVAS)$/.test(s.tagName) || (!(s instanceof SVGElement) && getComputedStyle(s).backgroundImage !== 'none')) { add('text-on-image', 'P3', '文字压在图片或渐变上，对比度需人工确认', el); return; }
        if (s instanceof SVGElement && /^(rect|circle|path|polygon|ellipse)$/.test(s.tagName)) { var f = getComputedStyle(s).fill; if (f && f !== 'none') { var c0 = rgb(f); if (c0[3] > 0 && bg) bg = over(c0, bg); break; } continue; }
        break; }
      if (!bg) return; var f2 = over(fg, bg), a = lum(f2), c = lum(bg), cr = (Math.max(a, c) + .05) / (Math.min(a, c) + .05), big = fs >= 24 || (fs >= 18.66 && bold);
      if (cr < (big ? 3 : 4.5)) add('low-contrast', cr < 3 ? 'P1' : 'P2', '对比度 ' + cr.toFixed(1) + ':1，要求 ≥ ' + (big ? 3 : 4.5), el);
    }
    all.forEach(function (el) {
      var cs = getComputedStyle(el), b = el.getBoundingClientRect(); if (!b.width || !b.height || cs.visibility === 'hidden') return;
      // 1 出画 / 被裁
      if (b.right > R.right + 1 || b.bottom > R.bottom + 1 || b.left < R.left - 1 || b.top < R.top - 1) add('out-of-canvas', 'P1', '元素超出画布 ' + Math.round(Math.max(b.right - R.right, b.bottom - R.bottom, R.left - b.left, R.top - b.top) / k) + 'px', el);
      if (/hidden|clip/.test(cs.overflow) && el !== slide && (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1)) add('clipped', 'P1', '内容被容器裁掉', el);
      if (ownText(el)) {
        lowest = Math.max(lowest, b.bottom);
        var fs = parseFloat(cs.fontSize); sizes[fs] = (sizes[fs] || 0) + 1;
        // 2 字号下限
        if (fs < opt.minText) add('tiny-text', 'P1', '字号 ' + fs + 'px 低于下限 ' + opt.minText + 'px', el);
        // 3 对比度
        contrast(el, rgb(cs.color), fs, parseInt(cs.fontWeight) >= 600);
        // 4 孤字
        if (g.lastLineCount && el.textContent.trim().length > 8) { var li = g.lastLineCount(el); if (li && li.lines > 1 && li.count < opt.orphanMin) add('orphan', 'P2', '末行只有 ' + li.count + ' 个字', el); }
        // 5 渐变字
        if (/text/.test(cs.webkitBackgroundClip || cs.backgroundClip) && /gradient/.test(cs.backgroundImage)) add('gradient-text', 'P2', '渐变文字', el);
        // 6 中文负字距过大 / 中文斜体
        var own = [].map.call(el.childNodes, function (n) { return n.nodeType === 3 ? n.data : ''; }).join('');
        if (/[\u4e00-\u9fff]/.test(own) && parseFloat(cs.letterSpacing) / fs < -0.04) add('tight-tracking', 'P2', '字距 ' + (parseFloat(cs.letterSpacing) / fs).toFixed(3) + 'em，中文不应小于 −0.04em', el);
        if (cs.fontStyle === 'italic' && /[一-鿿]/.test(el.textContent)) add('cjk-italic', 'P2', '中文不用斜体', el);
      } else if (/^(IMG|svg|CANVAS|VIDEO)$/.test(el.tagName) || isCard(cs)) lowest = Math.max(lowest, b.bottom);
      // 7 左侧色条卡片
      if (parseFloat(cs.borderLeftWidth) >= 3 && parseFloat(cs.borderTopLeftRadius) > 0 && parseFloat(cs.borderTopWidth) < parseFloat(cs.borderLeftWidth)) add('side-stripe', 'P2', '圆角卡片 + 左侧粗色条', el);
      // 8 卡中卡：两层都带阴影
      if (cs.boxShadow !== 'none' && el.parentElement && el.parentElement.closest) { for (var p = el.parentElement; p && p !== slide; p = p.parentElement) if (getComputedStyle(p).boxShadow !== 'none' && isCard(getComputedStyle(p))) { add('nested-shadow', 'P2', '带阴影的卡片嵌在另一张带阴影的卡片里', el); break; } }
      // 9 发光：零偏移的彩色阴影
      var m = cs.boxShadow.match(/rgba?\(([^)]+)\)\s+0px\s+0px\s+(\d+)px/); if (m) { var c3 = m[1].split(',').map(parseFloat), sat = Math.max(c3[0], c3[1], c3[2]) - Math.min(c3[0], c3[1], c3[2]); if (sat > 60 && +m[2] >= 12) add('glow', 'P2', '彩色发光阴影', el); }
      // 10 卡片汤：≥3 个同构、等尺寸的卡片兄弟
      var kids = [].filter.call(el.children, function (c) { return isCard(getComputedStyle(c)); });
      if (kids.length >= 3) { var s0 = sig(kids[0]), w0 = kids[0].offsetWidth, h0 = kids[0].offsetHeight;
        if (kids.every(function (c) { return sig(c) === s0 && Math.abs(c.offsetWidth - w0) < 2 && Math.abs(c.offsetHeight - h0) < 2; }) && !kids.some(function (c) { return getComputedStyle(c).backgroundColor !== getComputedStyle(kids[0]).backgroundColor; }))
          add('card-soup', 'P2', kids.length + ' 张完全同构、等大、同色的卡片：没有主次', el); }
    });
    // SVG 里的文字：字号下限 + 对比度
    slide.querySelectorAll('svg text').forEach(function (t) { var cs = getComputedStyle(t), fs = parseFloat(cs.fontSize) * (t.getBoundingClientRect().height / (t.getBBox().height || 1) || 1);
      if (fs < opt.minText) add('tiny-text', 'P1', 'SVG 文字 ' + fs.toFixed(1) + 'px 低于下限', t);
      contrast(t, rgb(cs.fill), fs, parseInt(cs.fontWeight) >= 600); });
    // 11 底部留白
    var empty = (R.bottom - lowest) / R.height; if (empty > opt.emptyMax) add('empty-bottom', empty > .5 ? 'P1' : 'P2', '底部 ' + Math.round(empty * 100) + '% 是空的', slide);
    // 12 字号种类过多
    var n = Object.keys(sizes).length; if (n > opt.maxSizes) add('too-many-sizes', 'P2', '用了 ' + n + ' 种字号（上限 ' + opt.maxSizes + '）：' + Object.keys(sizes).sort(function (a, b) { return a - b; }).join(' / '), slide);
    return out;
  }
  deckLint.paint = function (issues) { issues.forEach(function (it, i) { if (it.el.classList.contains('slide')) return; if (it.el instanceof SVGElement) return; it.el.style.outline = '2px ' + (it.level === 'P1' ? 'solid' : 'dashed') + ' #0A7CFF'; it.el.style.outlineOffset = '2px'; it.el.dataset.lint = (it.el.dataset.lint ? it.el.dataset.lint + ' ' : '') + it.rule; }); };
  g.deckLint = deckLint;
})(window);
