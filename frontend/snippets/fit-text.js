/* fit-text.js · 把文字塞进固定盒子：二分法找最大字号。自写，MIT。
   盒子必须有确定的宽高。fitText(el,{min:28,max:120,step:0.5}) → 最终字号。
   到 min 仍溢出时返回 min 并打 data-fit="overflow"，交给 QA 报错，而不是继续缩。 */
function fitText(el, opt) {
  opt = Object.assign({ min: 24, max: 120, step: 0.5 }, opt);
  var lo = opt.min, hi = opt.max, best = opt.min;
  var fits = function (s) { el.style.fontSize = s + 'px';
    return el.scrollWidth <= el.clientWidth + 0.5 && el.scrollHeight <= el.clientHeight + 0.5; };
  while (hi - lo > opt.step) { var mid = (lo + hi) / 2; if (fits(mid)) { best = mid; lo = mid; } else hi = mid; }
  best = Math.floor(best / opt.step) * opt.step;
  el.dataset.fit = fits(best) ? 'ok' : 'overflow';
  return best;
}
