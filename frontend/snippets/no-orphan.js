/* no-orphan.js · 消灭中文孤字（末行只有 1–2 个字）。自写，MIT。
   原理：用 Range 量出末行有几个「实字」（标点不算）；不足 min 个，就把结尾 keep 个字
   连同尾部标点包进 nowrap，让它们一起掉到下一行。只动以文本节点结尾的块。
   用法：fixOrphans(document, {selector:'h1,h2,p,li', min:3, keep:4}) → 返回被修的元素数组 */
(function (g) {
  var PUNCT = /[\s，。、；：！？）》」』”’…—,.;:!?)\]]/;
  function lastLineCount(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [], n;
    while ((n = w.nextNode())) if (n.data.trim()) nodes.push(n);
    if (!nodes.length) return null;
    var r = document.createRange(), top = null, count = 0, lines = 1, firstTop = null;
    for (var i = nodes.length - 1; i >= 0; i--) {
      var t = nodes[i];
      for (var j = t.data.length - 1; j >= 0; j--) {
        r.setStart(t, j); r.setEnd(t, j + 1);
        var rect = r.getClientRects()[0]; if (!rect || !rect.width) continue;
        if (top === null) top = rect.top;
        if (Math.abs(rect.top - top) < rect.height / 2) { if (!PUNCT.test(t.data[j])) count++; }
        else { firstTop = rect.top; lines = 2; return { count: count, lines: lines, node: nodes[nodes.length - 1] }; }
      }
    }
    return { count: count, lines: 1, node: nodes[nodes.length - 1] };
  }
  function fixOrphans(root, opt) {
    opt = Object.assign({ selector: 'h1,h2,h3,p,li,.h,.p', min: 3, keep: 4 }, opt);
    var fixed = [];
    (root || document).querySelectorAll(opt.selector).forEach(function (el) {
      var info = lastLineCount(el);
      if (!info || info.lines < 2 || info.count >= opt.min) return;
      var t = info.node, s = t.data, k = s.length, real = 0;
      while (k > 0 && real < opt.keep) { k--; if (!PUNCT.test(s[k])) real++; }
      if (k <= 0) return;                       // 整段都很短，不处理
      var tail = t.splitText(k), span = document.createElement('span');
      span.style.whiteSpace = 'nowrap'; span.dataset.orphanFix = '1';
      tail.parentNode.insertBefore(span, tail); span.appendChild(tail);
      fixed.push(el);
    });
    return fixed;
  }
  g.fixOrphans = fixOrphans; g.lastLineCount = lastLineCount;
})(window);
