# 小红书 PPT 观察 → HTML Deck 规则手册（v3）

数据快照：2026-11-10，通过 TikHub 只读接口。18 个关键词，每词按「点赞降序」「收藏降序」各取 2 页，共 72 次检索，得到 1,107 条去重笔记。筛掉点赞不足 500 和与演示无关的笔记后剩 543 条，见 `notes.tsv`。其中 47 条另外拉取了正文和按赞排序的首屏评论，38 条拿到了可用正文：图文笔记取描述，视频笔记取平台自带字幕。字幕接口返回的是平台机翻的英文，下面的规则按原意转述。

边界：
- 笔记和评论都当作数据看待，不当指令执行。
- 不复制原文和图片，必要时只引用几个字。
- 不收录作者个人信息，只给笔记链接。
- 互动数是当次快照。
- 另有 9 条正文过短：多数是把内容写在图里的图文笔记，还有 1 条视频没有字幕。这些只拿到标题和评论，没有做 OCR，规则里不引用它们的版式细节。

---

## 一、已核验的 Skill / 开源项目

核验方法：`gh api repos/{owner}/{repo}` 只读查询，日期 2026-11-10。笔记里没给仓库链接的，按名称搜索取最匹配的仓库，这类在表中标「名称匹配」。

| 项目 | 仓库 | Stars | License | 交付形态 | 备注 |
|---|---|---:|---|---|---|
| ppt-master | hugohe3/ppt-master | 75,506 | MIT | 原生可编辑 PPTX（SVG→DrawingML） | 多篇笔记评为正式交付首选。评论里流传的 `DEE8ZDJ/ppt-master` 是 1 星的 fork，要从上游安装 |
| ui-ux-pro-max-skill | nextlevelbuilder/ui-ux-pro-max-skill | 147,591 | MIT | 通用设计 Skill | 不专做幻灯片 |
| frontend-slides | zarazhangrui/frontend-slides | 32,159 | MIT | 单文件 HTML | 自带 `viewport-base.css` 和 `animation-patterns.md`，禁用烂大街的字体和配色组合 |
| guizang-ppt-skill | op7418/guizang-ppt-skill | 29,581 | **AGPL-3.0** | 单文件 HTML，杂志风 | 只能参考它的规则，不要把代码打包进闭源产品 |
| huashu-design | alchaincyf/huashu-design | 29,104 | MIT | HTML + 可编辑 PPTX + 动画 | 2026-05-14 起改为 MIT。`stickers/` 子目录是 PolyForm Shield 授权 |
| baoyu-skills（含 baoyu-slide-deck） | JimLiu/baoyu-skills | 27,444 | MIT | 图解、课件 | 子目录已确认存在 |
| MiniMax skills（含 pptx-generator） | MiniMax-AI/skills | 13,812 | MIT | Markdown→PPTX | 子目录已确认存在 |
| Kami | tw93/Kami | 12,489 | MIT | 排版规则和模板 | |
| presenton | presenton/presenton | 11,837 | Apache-2.0 | 自托管应用 | 不是 Skill |
| dashi-ppt-skill | chuspeeism/dashi-ppt-skill | 10,558 | **AGPL-3.0** | 浏览器内编辑，再导出 PPTX | 名称匹配 |
| open-slide | open-slide/open-slide | 9,729 | MIT | 给 agent 用的幻灯片框架 | 只在评论里出现过，名称匹配 |
| html-ppt-skill | lewislulu/html-ppt-skill | 9,043 | MIT | HTML，带演讲者模式 | 评论认为它把主题和布局解耦得最好 |
| codex-ppt-skill | ningzimu/codex-ppt-skill | 7,782 | MIT | 整页图片式 PPT | 笔记写的 `ningzimu/codex-ppt` 已 404，这是改名后的仓库 |
| PPTAgent | icip-cas/PPTAgent | 5,234 | MIT | 研究型框架 | |
| GordenPPTSkill | GordenSun/GordenPPTSkill | 4,051 | MIT（LICENSE 文件） | 中文职场 PPTX 模板 + 文字出框检查 | API 显示 NOASSERTION，以 LICENSE 文件为准 |
| harness-anything | yb2460/harness-anything | 3,038 | MIT | Agent 操控 WPS / Office | 名称匹配 |
| CyberPPT | crazyykhllc-bit/CyberPPT | 1,883 | MIT | 咨询风可编辑 PPTX | 名称匹配，笔记里没有给链接 |
| rw-consulting-ppt | Pikapika260214/rw-consulting-ppt | 551 | MIT | 生成咨询风图片，再转可编辑 | 笔记里给了链接 |
| frontend-slides-editable | archlizheng/frontend-slides-editable | 551 | MIT | 让 HTML 幻灯片可点选编辑 | 名称匹配 |
| revealjs-skill | ryanbbrown/revealjs-skill | 421 | MIT | reveal.js | |
| NBLM2PPTX | laihenyi/NBLM2PPTX | 350 | MIT | NotebookLM 导出的 PDF→PPTX | 名称匹配 |
| planners-ppt-hell | thePlannerIvan/planners-ppt-hell | 246 | **AGPL-3.0** | 长文案方案页 PPTX | 依赖 Python 和 Playwright |
| deck-dna | opitaru-sys/deck-dna | 49 | MIT | 按自有模板生成 PPTX | 名称匹配，星数少 |
| Anthropic pptx skill | anthropics/skills → skills/pptx | 191,765（整仓） | 子目录 LICENSE.txt 为 Apache-2.0 | PPTX 读写 | |

**不应作为可安装项推荐：**
- GordenSuperPPTSkills（GordenSun，2,240 星）：仓库没有 License，等于保留全部权利。
- photo-abstract-editorial（ZzzLc0405）：声明仅限非商业使用，而且不是 PPT 工具。
- tong-ppt-skill：GitHub 上搜不到，评论说完整版收费。
- 「附 Skill 模版」类视频：要进群或私信才能领取。
- Slidify、TapNow、Claude Design、天工、Genspark、Lovart 等：商业产品或闭源服务，不是 Skill。

**评论区推广需要警惕：**
- 某个工具名在多篇笔记里以几乎相同的句式反复出现。
- 一篇 11 万赞笔记的置顶回复说热评是托。
- 因此评论里的工具推荐一律不算证据。

---

## 二、评论区反复出现的抱怨（按出现频次排序）

1. **字太小、行距太挤。** 至少 5 篇笔记的高赞评论提到。有人给出的补丁是在提示词里写死字号。来源：[6a85b442](https://www.xiaohongshu.com/explore/6a85b4420000000005032bb2)、[6a0ff7cd](https://www.xiaohongshu.com/explore/6a0ff7cd0000000038037642)、[69ebd0ea](https://www.xiaohongshu.com/explore/69ebd0ea000000001002d000)、[6a434b7f](https://www.xiaohongshu.com/explore/6a434b7f000000000f0146ba)。
2. **AI 擅自增删内容。** 用户想要「只排版、不改内容」。这是 11 万赞求助帖里排第二、第三的诉求，评论区还有人说某工具「丢内容」。来源：[6874da50](https://www.xiaohongshu.com/explore/6874da50000000000d01909d)、[6a55fdf1](https://www.xiaohongshu.com/explore/6a55fdf1000000000702e600)。
3. **分不清标题和正文，层级混乱。** 来源：[6a55fdf1](https://www.xiaohongshu.com/explore/6a55fdf1000000000702e600)。
4. **HTML 难改。** 给决策者汇报要改上百处，所以下级向上汇报仍然用 PPT。来源：[6a7993e6](https://www.xiaohongshu.com/explore/6a7993e60000000028032339)。
5. **太花哨，听众记不住内容。** 18 万赞的转盘教程下，最高赞评论就是这一条。来源：[691c66fd](https://www.xiaohongshu.com/explore/691c66fd000000001f00d1ab)。
6. **杂志风看着高级，内容却空洞。** 风格同质化，额度也跑光了。来源：[6a75e3de](https://www.xiaohongshu.com/explore/6a75e3de0000000025002051)。
7. **图片转可编辑 PPT 会出问题。** 图标丢失、字号和间距漂移、文本框碎片化。来源：[6a186a70](https://www.xiaohongshu.com/explore/6a186a700000000035031b6f)、[6a4bc840](https://www.xiaohongshu.com/explore/6a4bc840000000001702ef48)。
8. **分享和环境问题。** 内网打不开、转不了 PDF、换台电脑字体错位。来源：[6a03f061](https://www.xiaohongshu.com/explore/6a03f061000000000f03ac00)、[69ead2b4](https://www.xiaohongshu.com/explore/69ead2b40000000020007002)、[6ad88f12](https://www.xiaohongshu.com/explore/6ad88f120000000025006ae9)。
9. **对模板不满意。** 预览图和实际产物差距大，近乎盲选；套不进公司模板。来源：[6a55fdf1](https://www.xiaohongshu.com/explore/6a55fdf1000000000702e600)、[6a12ab21](https://www.xiaohongshu.com/explore/6a12ab21000000003501cf2a)。
10. **「内容才值钱，排版不值钱」。** 麦肯锡相关笔记下这是最高赞的反驳。来源：[6a64cd3c](https://www.xiaohongshu.com/explore/6a64cd3c0000000010029ad5)、[6a782a7c](https://www.xiaohongshu.com/explore/6a782a7c000000002202fadd)。

---

## 三、可执行规则

每条规则的格式是：**触发** → **HTML/CSS/GSAP 做法** → 来源。默认画布为 1920×1080，按视口等比缩放。

### A. 内容与流程

**R01 标题写结论。**
- 触发：任何内容页、图表页。
- 做法：`<h2 class="claim">` 写成带动词或数字的完整判断句，例如「韧性从 44% 升到 60%」，不写名词标签，例如「销售数据」。lint：标题少于 8 个字，或者不含动词和数字时报警。
- 来源：[6a64cd3c](https://www.xiaohongshu.com/explore/6a64cd3c0000000010029ad5)、[653e4645](https://www.xiaohongshu.com/explore/653e4645000000001d016e6a)

**R02 先列每页论点，再做视觉。**
- 触发：拿到零散材料时。
- 做法：先产出 `core question → thesis → storyline → page claims` 四层。每页 JSON 必须有 `claim`，以及支撑它的 `evidence[]`。拿不出支撑的页删掉，不要靠装饰填满。
- 来源：[6a186a70](https://www.xiaohongshu.com/explore/6a186a700000000035031b6f)

**R03 证据编号可回溯。**
- 触发：页面上有数据、案例或引语。
- 做法：每个数字带 `<sup class="ev" data-ev="E3">`，页脚列出来源。构建时检查每个 `data-ev` 都能在证据表里找到。
- 来源：[6a434b7f](https://www.xiaohongshu.com/explore/6a434b7f000000000f0146ba)

**R04 先出 3 种风格样张，再全量生成。**
- 触发：开始一份新 deck。
- 做法：用同一组 3 页（封面、内容页、数据页）分别渲染 3 套 `data-theme`。选定一套后锁定 tokens，再生成全量。也可以融合两套，生成第四套参考。
- 来源：[6a85b442](https://www.xiaohongshu.com/explore/6a85b4420000000005032bb2)、[6aacbe20](https://www.xiaohongshu.com/explore/6aacbe20000000002a02dfb0)

**R05 用参考图代替形容词。**
- 触发：用户说「高级一点」「不要 AI 味」。
- 做法：要一张参考图，从中抽出主色、辅色、强调色、字体分级和网格边距，写进 `:root` 变量。不接受只有形容词的风格描述。
- 来源：[6a85b442](https://www.xiaohongshu.com/explore/6a85b4420000000005032bb2)

**R06 公司模板要学风格，不要往里填。**
- 触发：用户给了公司模板。
- 做法：
  1. 把模板拆成 tokens 和 2–3 个 layout，做 1 页仿制品对比。
  2. 对齐以后，把这些规则固化成可复用的提示词或配置。
  3. 再把材料整体生成进去，不要逐框复制粘贴。
- 来源：[6a12ab21](https://www.xiaohongshu.com/explore/6a12ab21000000003501cf2a)

**R07 「只排版」模式要保证内容零改动。**
- 触发：用户说「只帮我排版」。
- 做法：文字放进 `content.json`，与布局分离。构建前后比较全部文本节点的规范化哈希，有任何增删就失败，并列出差异。
- 来源：[6874da50](https://www.xiaohongshu.com/explore/6874da50000000000d01909d)

**R08 用语义角色表达层级。**
- 触发：材料是 Markdown 或纯文本。
- 做法：每个块显式标注 `role: title | claim | body | label | source | note`，渲染器只按 role 套样式，不让模型从字号去猜层级。
- 来源：[6a55fdf1](https://www.xiaohongshu.com/explore/6a55fdf1000000000702e600)

### B. 字号、排版、配色

**R09 设字号下限，作为硬约束。**
- 触发：每页渲染之后。
- 做法：在 1920 宽画布上，正文 ≥ 28px，标签和脚注 ≥ 20px，页标题 ≥ 48px，行高 ≥ 1.3。用 `getComputedStyle` 遍历文本节点，低于下限就报错，不只是警告。评论里有人给出的 PPTX 版本是正文 16、关键词 18、标题 24 磅。
- 来源：[6a85b442](https://www.xiaohongshu.com/explore/6a85b4420000000005032bb2)、[6a782a7c](https://www.xiaohongshu.com/explore/6a782a7c000000002202fadd)

**R10 检查文本框溢出和留白失衡。**
- 触发：每页渲染之后。
- 做法：
  - `el.scrollHeight > el.clientHeight + 1` 判为溢出。
  - 计算各栏内容的包围盒面积比，两栏比例超过 2:1 时提示重排。
  - 模型对文本框该多大普遍没有概念，所以这一步不能省。
- 来源：[6a0ff7cd](https://www.xiaohongshu.com/explore/6a0ff7cd0000000038037642)、[6a75e3de](https://www.xiaohongshu.com/explore/6a75e3de0000000025002051)

**R11 设四条红线，由 lint 检查。**
- 触发：全局检查。
- 做法：
  - 全篇字体族不超过 3 种，颜色不超过 4 种。
  - 禁用 3D 图表，禁用竖排和斜排正文。
  - 主内容区留白不低于 40%。
- 来源：[6a64cd3c](https://www.xiaohongshu.com/explore/6a64cd3c0000000010029ad5)

**R12 按 6:3:1 配色。**
- 触发：选定主题时。
- 做法：
  - `--c-primary` 是深色主色，偏蓝绿而不偏紫，占约 60%。
  - `--c-neutral-*` 是黑白灰，占约 30%。正文用深灰，不用纯黑。
  - `--c-accent` 只用于关键数字，每页最多出现 2 处。
  - 自检方法：缩小到 25% 截图，第一眼看到的应该是重点。
- 来源：[6a782a7c](https://www.xiaohongshu.com/explore/6a782a7c000000002202fadd)

**R13 字体三级分工，主题用固定变量集。**
- 触发：杂志风或个人分享场景。
- 做法：衬线大标题，非衬线正文，等宽字体用于元数据（页码、来源、日期）。每套主题只有约 6 个 CSS 变量，在白名单主题里选，不开放自定义 hex，以免破坏整体美感。
- 来源：[69ead2b4](https://www.xiaohongshu.com/explore/69ead2b40000000020007002)、[69ebd0ea](https://www.xiaohongshu.com/explore/69ebd0ea000000001002d000)

**R14 设反 AI 味黑名单。**
- 触发：默认启用。
- 做法：拒绝把 Inter 或 Roboto 当作唯一字体，拒绝白底配紫色渐变，拒绝所有卡片使用同一圆角和同一阴影。
- 来源：[69ebd0ea](https://www.xiaohongshu.com/explore/69ebd0ea000000001002d000)、[6a5dbfc8](https://www.xiaohongshu.com/explore/6a5dbfc8000000000402b4d5)

**R15 主题和布局正交。**
- 触发：搭建模板库时。
- 做法：`<html data-theme="ink">` 与 `<section data-layout="split-60-40">` 相互独立，任意组合都要能渲染。新增一个主题时，不需要改任何布局 CSS。
- 来源：[69ebd0ea](https://www.xiaohongshu.com/explore/69ebd0ea000000001002d000)

**R16 用固定的版式词表。**
- 触发：规划每页布局时。
- 做法：从约 10 种布局里选，不让模型自由发挥：封面、章节幕封、大数字页、左文右图、图片网格、流程 pipeline、悬念问题页、大引用、Before/After、图文混排。内容页再细分为四栏并列、对称分栏、环形中心、卡片模块。
- 来源：[69ead2b4](https://www.xiaohongshu.com/explore/69ead2b40000000020007002)、[698bfa1f](https://www.xiaohongshu.com/explore/698bfa1f000000001b015a9c)

**R17 中英混排和换行。**
- 触发：导出前。
- 做法：
  - 字体栈写成「西文字体, 中文字体, system-ui」，字体内联或自托管。
  - 设置 `line-break: strict`。标题用 `text-wrap: balance`，正文用 `text-wrap: pretty`。
  - 逐页截图，检查行首标点和孤字。
- 来源：[6ad88f12](https://www.xiaohongshu.com/explore/6ad88f120000000025006ae9)

### C. 图表

**R18 数据点不能孤立出现。**
- 触发：页面上只有单个百分比或数值时。
- 做法：自动补一个对比维度，可以是上期、行业均值或目标值。没有对比数据时，把它降级为文字陈述，不画图。
- 来源：[653e4645](https://www.xiaohongshu.com/explore/653e4645000000001d016e6a)

**R19 按目的选图。**
- 触发：生成图表时。
- 做法：比较用条形图，趋势用折线图，精确值用表格。数据直接标在柱子或线的末端，省掉图例。颜色按语义：强调色表示上升或焦点，灰色作对照，深色表示下降。
- 来源：[6a64cd3c](https://www.xiaohongshu.com/explore/6a64cd3c0000000010029ad5)、[653e4645](https://www.xiaohongshu.com/explore/653e4645000000001d016e6a)

**R20 做减法。**
- 触发：一页里同时有多个表和多段文字。
- 做法：改写成 1 张主图加至多 3 个要点或图标，其余内容移到附录页或讲者备注。
- 来源：[6a64cd3c](https://www.xiaohongshu.com/explore/6a64cd3c0000000010029ad5)

### D. 动效

**R21 用 Flip 实现「神奇移动」：同一对象跨页延续。**
- 触发：前后两页有同一个元素，只是位置、大小或颜色变了。
- 做法：PowerPoint 靠对象重名配对，原理是同名对象自动补间。HTML 里给两页的对应元素加同一个 `data-flip-id`。

  ```js
  const st = Flip.getState('[data-flip-id]');
  show(next);
  Flip.from(st, { duration: .7, ease: 'power3.inOut', absolute: true, targets: '[data-flip-id]' });
  ```

  一次补间可以同时改变位置、旋转和颜色。没有同名元素的页面，退回淡入淡出。
- 来源：[6253f8e8](https://www.xiaohongshu.com/explore/6253f8e8000000000c033cc4)

**R22 转盘式章节切换。**
- 触发：只用在封面、章节页或人物介绍组。
- 做法：放一个常驻的同心圆环层（`.ring`，图片填充，内阴影），切页时执行 `gsap.to('.ring', {rotation: '+=' + 360/n, duration: .9, ease: 'expo.inOut'})`。正文页不要用。
- 来源：[691c66fd](https://www.xiaohongshu.com/explore/691c66fd000000001f00d1ab)

**R23 视差封面。**
- 触发：封面页。
- 做法：
  - 背景图从 `scale: .8` 放大到 1。
  - 左右两组形状反向平移。
  - 次要层延迟 0.2s，所有动画同时起播。
  - 用一个 `gsap.timeline()` 组织，总时长 1.2s 以内。
- 来源：[683a630b](https://www.xiaohongshu.com/explore/683a630b0000000023002e51)

**R24 换掉预设缓动。**
- 触发：评论说效果「顿」「不如苹果流畅」。
- 做法：不用 linear 或默认 ease，入场用 `expo.out` 或 `power3.out`，转场用 `power3.inOut`。文字扩散效果的做法是：渐变填充文字，复制两份放到下层，配合遮罩向外扩散、透明度递减，不要用图标素材。
- 来源：[691c6bbf](https://www.xiaohongshu.com/explore/691c6bbf000000001e00a48b)

**R25 动效预算。**
- 触发：全局。
- 做法：
  - 每个章节最多 1 个主动效，正文页只做 ≤400ms 的淡入或逐条出现。
  - 在 `gsap.matchMedia()` 的 `(prefers-reduced-motion: reduce)` 分支里直接 `gsap.set` 到终态。
  - 打印和导出 PDF 时，一律显示终态。
- 来源：[691c66fd](https://www.xiaohongshu.com/explore/691c66fd000000001f00d1ab)

### E. 交付形态

**R26 先问清交付物，再选技术路线。**
- 触发：项目开始时。
- 做法：
  - 别人要接着改：输出可编辑 PPTX（ppt-master、huashu 路线）。
  - 现场演讲：输出 HTML。
  - 赶时间、之后基本不改：可以用整页图片。
  - 给决策者的汇报默认要求「可改」，必须提供浏览器内编辑并保存，或者导出 PPTX。
- 来源：[6a75e3de](https://www.xiaohongshu.com/explore/6a75e3de0000000025002051)、[6a8acf77](https://www.xiaohongshu.com/explore/6a8acf7700000000330088a0)、[6a7993e6](https://www.xiaohongshu.com/explore/6a7993e60000000028032339)

**R27 HTML 转 PPTX 时先转一页。**
- 触发：需要导出 PPTX。
- 做法：HTML 画布的宽高比与目标 PPTX 完全一致，16:9 对应 13.333×7.5in。先转 1 页，比对位置、字号和图标，没问题后再批量转。踩过的坑写回 Skill 规则。
- 来源：[6ab08214](https://www.xiaohongshu.com/explore/6ab082140000000011035fd8)

**R28 单文件离线可用。**
- 触发：要分享，或在企业内网使用。
- 做法：
  - 字体、图片、GSAP 全部内联，或者打包在同目录，不依赖外部 CDN。
  - 双击就能打开。
  - 加 `@page { size: 1920px 1080px; margin: 0 }`，每个 `section` 用 `break-after: page`，保证能打印成 PDF。
- 来源：[69ead2b4](https://www.xiaohongshu.com/explore/69ead2b40000000020007002)、[6a03f061](https://www.xiaohongshu.com/explore/6a03f061000000000f03ac00)

**R29 讲者备注和演讲者视图。**
- 触发：需要上台讲。
- 做法：每页写 `<aside class="notes">`，按 S 打开演讲者窗口，显示当前页、下一页、计时和备注。这样「投屏版」和「自己念的版本」可以合成一份。
- 来源：[69ebd0ea](https://www.xiaohongshu.com/explore/69ebd0ea000000001002d000)、[68ac23fa](https://www.xiaohongshu.com/explore/68ac23fa000000001d02ff7a)

**R30 修改页不重新生成整份。**
- 触发：用户要改某一页的内容。
- 做法：用户截图标出问题后，只重渲染那一个 `section`。也可以给页面开 contenteditable 编辑层，Ctrl+S 写回 `content.json`。
- 来源：[6a85b442](https://www.xiaohongshu.com/explore/6a85b4420000000005032bb2)、[6a8d5e4b](https://www.xiaohongshu.com/explore/6a8d5e4b00000000100238fa)

**R31 模板预览必须是真实产物。**
- 触发：给用户挑风格时。
- 做法：预览图用同一份示例内容，经实际渲染流水线输出的整页长图，不用手绘的效果图。
- 来源：[6a55fdf1](https://www.xiaohongshu.com/explore/6a55fdf1000000000702e600)

**R32 记录模型，保留回归样页。**
- 触发：Skill 有更新，或者换了模型。
- 做法：构建日志写入模型名和参数。固定 3 页回归样张，每次更新后截图比对。笔记作者也承认，同一个 Skill 在不同模型上表现差异很大。
- 来源：[6a0ff7cd](https://www.xiaohongshu.com/explore/6a0ff7cd0000000038037642)、[6aa95dba](https://www.xiaohongshu.com/explore/6aa95dba00000000120346c8)

---

## 四、本次未覆盖

- 纯图片笔记（版式合集、留白案例）没有做 OCR。如需借鉴具体版式，要人工看图并重新绘制，不能直接搬用。
- 平滑和转场类视频大多只有很短的步骤字幕，能转换成规则的只有 R21–R24。
- 笔记里声称的 Keynote 渲染技术细节（GPU、字体渲染等）没有核实，所以没有写进规则。
- 「HTML 嵌入 WPS/PPT」的两篇笔记只检索到标题，没有拉取正文。
