/* keep-words.js · 给中文补上「词不拆行」。自写，MIT。
   CSS 的 word-break:auto-phrase 目前只对日文生效；这里用浏览器内置分词 Intl.Segmenter('zh')
   把每个词包进 nowrap，标点并入前一个词（避头），开引号并入后一个词（避尾）。
   只用于标题和大字（≤60 字）；正文不要用，行尾会变得太参差。
   用法：keepWords(el)；可重复调用（已处理的节点会跳过）。 */
function keepWords(el) {
  if (!('Segmenter' in Intl)) return 0;
  var seg = new Intl.Segmenter('zh', { granularity: 'word' }), CLOSE = /^[，。、；：！？）》」』”’…—,.;:!?)\]%]+$/, OPEN = /^[（《「『“‘(\[]+$/;
  var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [], n, made = 0;
  while ((n = w.nextNode())) if (n.data.trim() && !n.parentNode.closest('[data-kw]')) nodes.push(n);
  nodes.forEach(function (t) {
    var parts = [], carry = '';
    Array.from(seg.segment(t.data)).forEach(function (s) {
      var x = s.segment;
      if (CLOSE.test(x) && parts.length) parts[parts.length - 1] += x;       // 收尾标点跟前词
      else if (OPEN.test(x)) carry += x;                                    // 开引号跟后词
      else { parts.push(carry + x); carry = ''; }
    });
    if (carry) parts.push(carry);
    var frag = document.createDocumentFragment();
    parts.forEach(function (p) {
      if (/^\s+$/.test(p) || p.length < 2) { frag.appendChild(document.createTextNode(p)); return; }
      var sp = document.createElement('span'); sp.dataset.kw = '1'; sp.style.whiteSpace = 'nowrap'; sp.textContent = p; frag.appendChild(sp); made++;
    });
    t.parentNode.replaceChild(frag, t);
  });
  return made;
}
