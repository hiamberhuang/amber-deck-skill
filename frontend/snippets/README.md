# snippets

26 个片段，每个都是一张可以单独打开的 1440×810 幻灯片，演示一条最难做对的规则。全部在无头 Chrome 里渲染并逐张看过，截图在 `_shots/`，总览是 `_shots/_sheet.jpg`。

- 令牌：`_base.css` 是 `../../style/tokens.css` 的同名子集，正式 deck 里直接引用 tokens.css。
- 不依赖任何外部资源，断网可用。
- 文案、公司名、人名、数据、logo 全部是虚构的示例。

## 重新渲染与自检

```bash
cd snippets
NODE_PATH=../../_tools/node_modules node _render.cjs          # 全部重渲染，报告溢出、404、脚本错误
NODE_PATH=../../_tools/node_modules node _render.cjs 08 09    # 只渲染指定编号
NODE_PATH=../../_tools/node_modules node _selfcheck.cjs       # 对正例跑 deck-lint，并导出 04 的 PDF 核对页数和尺寸
```

最近一次自检结果：26 张全部无溢出、无报错（24 号是故意做坏的）；19 张正例（不含 01、02、18、19、20 这五张带反例对照的片段）经 deck-lint 检查无 P1 / P2，仅 12 号有 4 条“图上压字需人工确认”的 P3 提醒；04 号导出 PDF 为 2 页，页面 1080×607.9pt。

## 工具脚本

| 文件 | 作用 | 入口 |
|---|---|---|
| `no-orphan.js` | 量出末行字数，不足时把结尾几个字绑在一起落到末行 | `fixOrphans(root,{selector,min:3,keep:4})`、`lastLineCount(el)` |
| `keep-words.js` | 用 `Intl.Segmenter('zh')` 分词，词不拆行，标点跟前词 | `keepWords(el)` |
| `fit-text.js` | 二分法找固定盒子里能放下的最大字号 | `fitText(el,{min,max,step})` |
| `cjk-spacing.js` | 中西文间距兜底，原生支持 `text-autospace` 时不运行 | `cjkSpacing(root,force)` |
| `deck-lint.js` | 15 条版面体检规则，返回问题列表并可在页面上描框 | `deckLint(slide,opt)`、`deckLint.paint(issues)` |
| `_render.cjs` / `_selfcheck.cjs` | 渲染与自检 | 见上 |

## 片段清单

| 编号 | 文件 | 演示的规则 | 对应文档 |
|---|---|---|---|
| 01 | `01-cjk-headline.html` | 中文标题按意群断行：意群包 nowrap 加 `text-wrap:balance` | 排印 §4.1 |
| 02 | `02-no-orphan.html` | 孤字自动修复，页面底部打印修复前后的末行字数 | 排印 §5 |
| 03 | `03-fit-text.html` | 三种长度的标题自适应同一个盒子，先分词再找字号 | 排印 §9 |
| 04 | `04-stage-scale.html` | 固定画布等比缩放、翻页、打印样式（截图视口故意用 1200×860） | 总则 §1、§6.1 |
| 05 | `05-browser-frame.html` | 网页截图装浏览器框 | 总则 §5.3 |
| 06 | `06-phone-frame.html` | 手机截图装机身，同心圆角 | 总则 §5.3 |
| 07 | `07-logo-wall.html` | Logo 墙按视觉面积归一，对比统一高度的做法 | 总则 §5.5 |
| 08 | `08-svg-loop.html` | 圆上的闭环：节点、弧线、切线方向的箭头全部由公式算出 | 图解 §2 |
| 09 | `09-funnel.html` | 漏斗宽度等于数据，标签在外，只亮流失最大的一步 | 图解 §3 |
| 10 | `10-comparison.html` | 方案对比：弱侧融进背景，强侧抬起 | 图解 §5.2、总则 §4.4 |
| 11 | `11-big-number.html` | 大数字加单位，带参照条和口径 | 排印 §8.2 |
| 12 | `12-image-scrim.html` | 图上压字：定向暗幕，文字避开主体 | 总则 §5.4 |
| 13 | `13-flow.html` | 流程：HTML 节点加 SVG 连线，端点量出来，正交走线，带回流分支 | 图解 §1、§4 |
| 14 | `14-before-after.html` | 数值前后对比：同一把尺的成对条形 | 图解 §5.1 |
| 15 | `15-bar-chart.html` | 条形图：降序、直接标注、只亮一根 | 图解 §8 |
| 16 | `16-line-chart.html` | 折线图：线尾写名字、事件标在图里 | 图解 §8.6 |
| 17 | `17-table.html` | 表格：只留横线、数字右对齐、重点行浅底出血 | 图解 §8.7 |
| 18 | `18-cjk-latin-spacing.html` | 中西文间距的四种状态对比 | 排印 §7 |
| 19 | `19-punctuation.html` | 行首开引号悬挂、连续标点挤压、数字单位不拆 | 排印 §6 |
| 20 | `20-depth.html` | 一套深度语言，左边是混用的反例 | 总则 §4 |
| 21 | `21-img-frame.html` | 图片容器：比例归容器、焦点归图片，含一个裁掉主体的反例 | 总则 §5.1 |
| 22 | `22-quote.html` | 引言页：引号悬挂在版心外，按意群断行 | 排印 §4、§6.4 |
| 23 | `23-timeline.html` | 时间线：节点位置按日期比例换算 | 图解 §6 |
| 24 | `24-deck-lint.html` | 故意做坏的一页，加 deck-lint 的体检报告（23 条、11 类） | 反模式、总则 §7 |
| 25 | `25-matrix.html` | 二乘二矩阵：一个容器加十字线 | 图解 §7 |
| 26 | `26-tint-scale.html` | 单一强调色的色阶，暖白底与深底，页面上打印实测对比度 | 总则 §3 |

## 做这些片段时被渲染结果纠正的地方

这些问题都是看了截图或跑了检查器才发现的，说明规则必须配合渲染验证：

- 标题只加 `text-wrap:balance` 仍然会把“渠道”“四分钟”拆开，必须先包意群或分词。
- 漏斗第一版的标题结论和数据算出来的最大流失层不一致。
- 图上压字第一版，文字正好盖在主体上；暗幕铺满全宽把主体也压暗了。
- 令牌里的 `--faint` 在暖白底上只有 2.5:1，第一版大量用它写表头和来源，全部不达标。
- 强调色小字在暖白底上是 4.50:1，正好卡线；强调色块上 86% 透明度的白字只有 3.8:1。
- 矩阵纵轴用 `rotate(180deg)` 把中文转倒了，中文直排不需要旋转。
- 多个片段第一版下半页是空的，按“放大主角、改构图”的顺序修掉。
