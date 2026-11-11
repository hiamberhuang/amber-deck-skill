# 字体排印（中文为主的固定画布）

数值按 1440×810 画布。规则后方括号里是 `snippets/deck-lint.js` 的规则名。

## 1. 字体栈：只用机器上一定有的字

deck 要离线可用、双平台一致，所以默认只用系统字体。下表是 macOS 和 Windows 上不需要安装就有的中文字体，以及各自真实存在的字重。

| 平台 | 字体 | 真实字重 | 备注 |
|---|---|---|---|
| macOS | PingFang SC | 100 / 200 / 300 / 400 / 500 / 600 | 没有 700，写 700 或 900 会落到 600 |
| macOS | Hiragino Sans GB | W3、W6 | 只有两档 |
| macOS | Songti SC | Light / Regular / Bold / Black | 宋体，做引言或大标题 |
| macOS | Kaiti SC | Regular / Bold / Black | 部分机器是按需下载，不保证有 |
| Windows | Microsoft YaHei | Light / Regular / Bold | **没有 500、600**：写 500 得到 Regular，写 600 得到 Bold |
| Windows | SimSun | 单字重 | 加粗是合成的，会糊，不要加粗 |
| Windows | DengXian、SimHei、KaiTi、FangSong | 见系统 | 属于“中文（简体）补充字体”，非中文系统上不保证有 |

由此得出四条硬规则：

**1.1 字体栈写全，中文字体不能缺。** 任何可能出现汉字的地方（包括等宽字体、SVG 的 `text`）都要带中文后备，绝不能只写 `sans-serif`。

```css
:root{
  --font-sans:"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",system-ui,sans-serif;
  --font-num:"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;   /* 大数字、表格数字 */
  --font-serif:"Songti SC","Noto Serif SC","SimSun",serif;                         /* 引言、个别大标题 */
}
```

**1.2 中文在前还是西文在前。** 正文栈中文在前，整段文字（含夹在里面的字母数字）都由中文字体出，风格统一、基线一致。只有“纯数字 / 纯西文”的元素（大数字、表格数字列、坐标轴）才用西文在前的 `--font-num`。SVG 的 `text` 一律中文在前，否则会逐字回退、混出两种中文字体。

**1.3 层级设计按 400 和 600/700 两档来，不依赖 500。** Windows 上 500 和 400 长得一样。需要第三档层级时用字号和颜色，不用字重。令牌里写的 800、900 在两个平台上分别落到 600 和 700，是可以的，但不要指望它比 700 更粗。

**1.4 关掉合成。** `font-synthesis:none`，不让浏览器伪造粗体和斜体。中文不用斜体 `[cjk-italic]`：强调用字重、强调色或划线；引用用楷体或宋体。

**1.5 字体族数量。** 一套 deck 最多两个中文字体族（一个黑体正文，可选一个宋体做引言或封面）。西文不单独挑字体，跟着中文字体自带的拉丁字形，或者只在数字上用 `--font-num`。

**1.6 需要品牌字体时。** 随包分发 woff2，按用到的字子集化，只带用到的字重；子集化保留 `kern`、`halt` 特性；`font-display:block` 并在导出前等 `document.fonts.ready`。字体回退会改变断行，所以导出后要确认实际渲染的字体是对的。

## 2. 字号与层级

**2.1 字号只用令牌里的台阶。** 一页内不超过 5 种字号，全 deck 不超过 8 种 `[too-many-sizes]`。不出现 15.5、17 这种台阶之间的值。检查：`grep -o 'font-size:[^;]*' | sort | uniq -c`。

**2.2 相邻层级拉开够大的差距。** 标题与正文的字号比 ≥ 2.2（令牌是 45 : 19）。两级之间比值小于 1.25 等于没有层级。大数字与它的说明文字比值 ≥ 6。

**2.3 下限。** 画布上任何文字 ≥ 12px `[tiny-text]`；需要被读的正文 ≥ 16px。令牌的正文 16px 换算到 1920 是 21px，低于多数公开规范建议的 24px，所以它是下限：现场投影的 deck 把正文提到 19px 以上，注脚提到 14px 以上。

**2.4 层级靠三样东西一起做。** 字号、字重、颜色同时变。文字颜色用四级：`--ink` 标题与重点，`--ink-2` 正文，`--muted` 说明，强调色点题。只有“黑字”和“灰字”两级是不够的。

**2.5 字重跟着字号反着走。** 字越大可以越细，字越小越不能细。16px 以下不用 300；72px 以上的标题用 600 就够，不需要更粗。

## 3. 行高、字距、行长

| 元素 | 行高 | 字距 |
|---|---|---|
| 封面、大数字（≥ 72px） | 1.05–1.15 | 中文 0 到 −0.02em；纯数字可到 −0.045em |
| 页标题（40–56px） | 1.22–1.3 | −0.01 到 −0.015em |
| 小标题（20–28px） | 1.3–1.4 | 0 |
| 正文（16–19px） | 1.55–1.65 | 0 |
| 注脚（12–14px） | 1.5 | 0 |
| 全大写西文标签 | 1.2 | +0.06 到 +0.1em |

**3.1 中文标题行高不低于 1.2。** 汉字是满格的，行高 1.0–1.1 时上下两行会粘在一起。多行中文标题用 1.24–1.3。

**3.2 中文不收紧字距超过 −0.04em** `[tight-tracking]`。西文大标题常用的 −0.05em 用在汉字上会让笔画相撞。正文字距一律为 0，不加宽。

**3.3 行长。** 中文正文一行 22–32 个字，最长不超过 38 个字：`max-width:32em`。标题一行不超过 18 个字。两栏布局里每栏不少于 12 个字，再窄就改成上下结构。

**3.4 深底浅字。** 行高加 0.05–0.1，正文字重不超过 500（深底上的字看起来更粗）。

## 4. 断行：按意思断，不让浏览器随便断

中文每个字之间都能断行，浏览器不认识词，所以会出现“渠 / 道”“四 / 分钟”这种把词拆开的断法。CSS 的 `word-break:auto-phrase` 目前只对日文生效，中文用不上。三层防线：

**4.1 标题按意群断。** 把每个意群包进 `white-space:nowrap`，再加 `text-wrap:balance`。浏览器只能在意群之间断，每一行是一个完整的意思。片段：`01-cjk-headline.html`。

```html
<h1><span class="nb">线索从进来到成交，</span><span class="nb">中间每一步都有人接住，</span><span class="nb">不再靠人盯</span></h1>
```
```css
h1{text-wrap:balance} .nb{white-space:nowrap}
```

`text-wrap:balance` 在 Chromium 里只对不超过 6 行的块生效。它只管各行等长，不管断在哪，所以必须配合意群包裹，否则它照样会把词拆开。

**4.2 自动分词兜底。** 文案是动态的、没法手工包意群时，用浏览器内置的 `Intl.Segmenter('zh')` 分词，把每个词包进 nowrap，标点并入前一个词。脚本：`snippets/keep-words.js`，演示见 `03-fit-text.html`。只用在标题和大字上（60 字以内），正文不要用，行尾会太参差。

**4.3 手动换行。** 封面、引言、大数字说明这类一共两三行的文字，直接用 `<br>` 定死。这是最可靠的做法。

**4.4 不要用的属性。** `word-break:break-all`（会拆英文单词）、`word-break:keep-all`（中文会不换行直接溢出）、`text-align:justify`（短行会被拉出大空隙）。

## 5. 孤字

**5.1 定义。** 段落或标题的最后一行只有一到两个字（标点不算）。这是中文版面里最显眼的缺陷，卡片里的短段落尤其常见 `[orphan]`。

**5.2 修法顺序。** 先改文案（删一个字或加两个字）；再调容器宽度；最后用脚本：`snippets/no-orphan.js` 量出末行字数，不足 3 个字时把结尾 4 个字连同标点包进 nowrap，让它们一起落到末行。片段：`02-no-orphan.html`，实测四处末行从 1–2 字修到 4 字。

```js
document.fonts.ready.then(function(){ fixOrphans(document,{selector:'h1,h2,p,li',min:3,keep:4}); });
```

**5.3 `text-wrap:pretty` 不够。** 它在 Chromium 里是为西文的短末行设计的，对中文的单字末行不保证有效，而且只有 Chrome 117+ 和 Safari 26 支持。可以加，但不能只靠它。

**5.4 同类问题一并检查。** 一行开头是标点（浏览器默认会处理，但 `inline-block` 的小标签后面可能失效，小标签用 `display:inline; white-space:nowrap`）；数字和单位被拆到两行；一个词被行尾拆开。

## 6. 标点

**6.1 中文句子用全角标点，英文整句和专有名词内部用半角。** 标点两侧不加空格。不重复标点（“！！”“？？”）。

**6.2 引号全 deck 统一一种。** 大陆规范是 “ ” 套 ‘ ’；「 」套『 』是另一种常见风格。选定一种后全 deck 不混用。用弯引号时确认它是由中文字体画的（全角宽度），否则会变成窄窄的西文引号挤在汉字中间。

**6.3 破折号和省略号。** 破折号是两个字宽的 `——`，省略号是六个点 `……`（两个 U+2026），都不能断在两行。演示文稿里尽量不用破折号，改成逗号、冒号或拆成两句。

**6.4 行首开引号悬挂。** 标题或大字的第一个字符是「《（“ 时，它左侧有半个字的空白，会让这一行看起来比下一行缩进。向左拉回 0.5em。片段：`19-punctuation.html`。

```css
.hang{margin-left:-.5em}   /* <span class="hang">「</span>线索不过夜」 */
```

**6.5 连续标点挤压。** “。」”“，「”“）、”这类两个标点相邻时，中间会空出一个字宽，要挤掉半个字。

- Chrome 123+ 默认开启 `text-spacing-trim:normal`，会自动挤压，前提是字体带 `halt` 或 `chws` 特性。PingFang、思源黑体有；微软雅黑、宋体没有，在 Windows 系统字体上这个属性不起作用。
- 所以大字和标题里遇到连续标点，手动处理最稳：前一个标点加 `margin-right:-.5em`。手动处理过的节点要设 `text-spacing-trim:space-all`，避免浏览器再挤一次。
- 正文小字不用管，差别看不出来。

**6.6 `hanging-punctuation` 只有 Safari 支持**，Chrome 里无效，不要依赖。

## 7. 中西文混排

**7.1 汉字与字母、数字之间留四分之一个字宽。** 汉字和标点之间不留。

**7.2 全 deck 只用一种机制。** 三种做法不能混：

| 做法 | 结果 |
|---|---|
| 源文本手敲半角空格 | 间距偏宽（约 0.3em），容易漏，复制出去带空格 |
| `text-autospace:normal` | Chrome 140+、Safari 18.4+ 原生支持，间距 1/8–1/4em，不产生空格字符 |
| 脚本加 margin | 旧内核兜底，间距可控 |

推荐：**源文案里不写空格**，CSS 开 `text-autospace:normal`，再挂 `snippets/cjk-spacing.js` 给不支持的内核兜底（它检测到原生支持就不运行，遇到源文本里已有的空格会吃掉，不会叠成双倍）。片段：`18-cjk-latin-spacing.html`。

要注意一个坑：`text-autospace` 的初始值就是 `normal`，Chrome 140 以后没写空格的文本会自动多出间距，同一份 deck 在新旧 Chrome 里宽度不同，断行可能变。所以要么显式写 `normal` 并带兜底脚本，要么显式写 `no-autospace` 并坚持手敲空格，不能不写。

**7.3 专有名词保持官方写法。** GitHub、iOS、B2B、小红书，大小写不改。不自造缩写。

**7.4 数字与单位。**

- 数字用半角。数字和中文单位之间按 7.1 留间距（“4 分钟”），和 `%`、`°`、`℃` 之间不留（“98%”）。
- 数字和单位永不拆行：包进 `white-space:nowrap`。
- 负号用 U+2212 `−`，不用连字符 `-`；乘号用 `×`，不用字母 x；范围用 `–` 或“至”。
- 千分位用半角逗号：1,284。

## 8. 数字的排法

**8.1 所有会被比较的数字用等宽数字。** `font-variant-numeric:lining-nums tabular-nums`，直接写在 `body` 上。表格的数字列右对齐，小数位数统一。

**8.2 大数字和单位。** 片段：`11-big-number.html`。

```css
.num{display:flex;align-items:baseline;font-family:var(--font-num);font-size:300px;font-weight:700;line-height:.9;letter-spacing:-.045em}
.num .u{font-family:var(--font-sans);font-size:.34em;font-weight:600;letter-spacing:0;margin-left:.08em}
```

- 数字用西文字体栈，单位用中文字体。
- 单位字号是数字的 0.3–0.4，基线对齐，不做上标。
- 说明文字不超过三行，写清楚这个数是什么、相对于什么。
- 大数字旁边必须有参照物（对比条、基准线、上期值）和口径来源。孤零零一个大数字是装饰。
- 一页只有一个主数字。三个大数字并排是最常见的模板化版式，见 `craft-antipatterns.md`。

**8.3 数字不能比标题更抢，除非它就是主角。** 非数据页里，卡片内的数字字号不超过页标题。

## 9. 文字自适应

固定盒子里放长度不定的标题时，用二分法找能放下的最大字号：`snippets/fit-text.js`。先跑 `keepWords` 保证词不拆，再找字号。设下限（28px）和上限；到下限仍然溢出就标记 `data-fit="overflow"` 让验收报错，由人来删字或拆页，脚本不继续缩。

## 10. 全局基础样式

```css
body{
  font-family:var(--font-sans);
  -webkit-font-smoothing:antialiased;
  font-synthesis:none;
  font-variant-numeric:lining-nums tabular-nums;
  line-break:strict;            /* 更严格的避头尾 */
  overflow-wrap:break-word;     /* 长网址、长英文不撑破容器 */
  text-autospace:normal;        /* 配合 cjk-spacing.js 兜底 */
}
h1,h2,h3{text-wrap:balance}
```

`line-break:strict` 对中文的实际影响不大（默认规则已经不让收尾标点出现在行首），留着无害。Kami 的规范对长篇正文主张不加 `balance`、`pretty`、`strict`，理由是会让行尾参差；这里的结论是：标题和短文字加，超过四行的正文段落不加 `balance`。
