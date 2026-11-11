/* cjk-spacing.js · 中西文间距的兜底。自写，MIT（思路参考 pangu.js / heti：不插空格字符，只加间距）。
   Chrome 140+ 的 text-autospace:normal 会自动加间距；旧版 Chrome、导出用的旧内核没有。
   这个脚本只在不支持时运行（或 force=true）：找出每一段西文/数字，如果它的左邻或右邻是汉字，
   就把这一段包进 span，在相邻那一侧加 margin .2em；夹在中间的源空格会被吃掉，避免「空格 + 间距」叠成双倍。
   标点旁边不加。复制出来的文本不含多余空格。 */
function cjkSpacing(root, force) {
  if (!force && window.CSS && CSS.supports('text-autospace', 'normal')) return 0;
  var HAN = /[⺀-⻿぀-ヿ㐀-䶿一-鿿豈-﫿]/;
  var RUN = /[A-Za-z0-9@#$&][A-Za-z0-9.,:/%+\-_ ]*[A-Za-z0-9%+]|[A-Za-z0-9]/g;
  var w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT), nodes = [], n, made = 0;
  while ((n = w.nextNode())) if (!n.parentNode.closest('pre,code,script,style,svg,[data-cs],.no-cs') && /[A-Za-z0-9]/.test(n.data)) nodes.push(n);
  nodes.forEach(function (t) {
    var s = t.data, frag = document.createDocumentFragment(), pos = 0, m, hit = false;
    RUN.lastIndex = 0;
    while ((m = RUN.exec(s))) {
      var a = m.index, b = a + m[0].length;
      var la = s[a - 1] === ' ' ? a - 2 : a - 1, rb = s[b] === ' ' ? b + 1 : b;      // 跳过一个源空格
      var L = la >= 0 && HAN.test(s[la]), R = rb < s.length && HAN.test(s[rb]);
      if (!L && !R) continue;
      var from = L ? la + 1 : a, to = R ? rb : b;                                     // 吃掉被跳过的空格
      frag.appendChild(document.createTextNode(s.slice(pos, from)));
      var sp = document.createElement('span'); sp.dataset.cs = '1'; sp.textContent = m[0];
      if (L) sp.style.marginInlineStart = '.2em'; if (R) sp.style.marginInlineEnd = '.2em';
      frag.appendChild(sp); pos = to; hit = true; made++;
    }
    if (!hit) return;
    frag.appendChild(document.createTextNode(s.slice(pos)));
    t.parentNode.replaceChild(frag, t);
  });
  return made;
}
