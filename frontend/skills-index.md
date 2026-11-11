# 前端 / 设计技能与规则库索引

核实日期：2026-11-10。星标、许可证、最近推送均来自当天的 `gh api repos/<owner>/<repo>`。许可证一栏写的是 GitHub 识别出的 SPDX；写“未识别”的仓库没有根目录许可证文件，具体情况在备注里说明。

分级含义：

- **融合**：读过正文，其中的规则经过改写后进入了本目录的 craft 文档或片段。
- **并装**：值得和本技能一起安装使用，职责不重叠。
- **参考**：了解即可，或只取其中一两个想法。

A–F 共 81 个 GitHub 仓库，G 为本机已装技能。

## A. 幻灯片 / 演示专用技能

| 仓库 | 星标 | 许可证 | 最近推送 | 最强的地方 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| alchaincyf/huashu-design | 29,106 | MIT | 2026-11-10 | 中文排印规范、deck 架构与 PDF 导出的坑、可量化的 lint 和打磨循环 | 融合 | 这批里最有干货的一个。约一半是真工艺，另一半是人设喊话和流程文件，可以跳过 |
| zarazhangrui/frontend-slides | 32,159 | MIT | 2026-06-23 | 最小的固定舞台约定（缩放、可见性切换、打印块），两档密度模式 | 融合 | 审美部分是泛泛的“避免 slop”；预设字体正是别家列为滥用的那几款；PDF 导出靠截图，文件大且不是矢量 |
| lewislulu/html-ppt-skill | 9,044 | MIT | 2026-09-14 | 图片容器 `.img-frame`、强调色上的文字令牌 | 融合 | 主体是模板和主题目录（36 个主题、20 个特效）。基础字号偏小，1920 画布上副标题 22px、小标签 13px |
| open-slide/open-slide | 9,729 | MIT | 2026-11-09 | 纵向预算算术、硬性的装不下就拆页规则、截图就绪信号 | 融合 | 绑定 React 框架；审美指导很薄 |
| op7418/guizang-ppt-skill | 29,582 | AGPL-3.0 | 2026-10-30 | 这批里最强的验收思路：分级缺陷清单、版式登记、渲染后校验 | 参考 | **AGPL，未复制任何文字或代码**，只在思路层面了解。基于视口单位而不是固定 px 舞台，和两套自带模板绑得很紧 |
| JimLiu/baoyu-skills | 27,444 | MIT | 2026-11-06 | `baoyu-diagram` 的 SVG 几何规则（绘制顺序、间距、遮罩矩形） | 融合 | `baoyu-slide-deck` 和 `baoyu-infographic` 是生图提示词系统，明确不产出 HTML，能迁移的只有密度分档和叙事标题 |
| archlizheng/frontend-slides-editable | 551 | MIT | 2026-07-01 | 在 frontend-slides 基础上加了拖拽编辑和重排 | 参考 | 派生作品，工艺规则没有新增 |
| tw93/Kami | 12,489 | MIT | 2026-11-10 | 图解几何规则、中文排版的克制取向、PDF 生产的字体坑 | 融合 | 面向纸面文档和 WeasyPrint，换算到幻灯片要乘系数；对中文断行的主张和别家相反（见排印文档 §10） |
| heygen-com/hyperframes | 82,008 | Apache-2.0 | 2026-11-10 | 固定画面下的字号下限、深底排印补偿、数据画面的禁忌 | 融合 | 做视频的，动效占大头；本机装的是 Codex 插件版本 |
| slidevjs/slidev | 49,417 | MIT | 2026-11-05 | Markdown 写幻灯片的成熟框架 | 参考 | 是框架不是工艺规范，默认主题是开发者风格 |
| hakimel/reveal.js | 72,551 | MIT | 2026-09-30 | 最老牌的 HTML 演示框架，缩放和打印实现可参考 | 参考 | 同上 |
| marp-team/marp | 12,738 | MIT | 2026-11-07 | Markdown 转幻灯片生态 | 参考 | 同上 |
| astefanutti/decktape | 2,439 | MIT | 2026-11-09 | 把 HTML 演示导出成 PDF 的工具 | 并装 | 需要兼容第三方框架时有用；自己的固定画布用 `page.pdf` 就够 |
| crawfordxx/xiaoma-studio | 18 | MIT | 2026-10-23 | 动效视频与 HTML 幻灯片的工作流 | 参考 | 很新、星标少，未经验证 |
| moguzbulbul/blueprint-animation | 432 | 未识别（NOASSERTION） | 2026-09-27 | 前后对比式的 UX 改版讲解动画 | 参考 | 许可证不明，只看了简介 |

## B. 设计品味 / 反模板化技能

| 仓库 | 星标 | 许可证 | 最近推送 | 最强的地方 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| pbakaus/impeccable | 107,232 | Apache-2.0 | 2026-11-10 | 62 条规则的反模式检测器（每条有测试夹具）、数值化的工艺底线 | 融合 | 检测器的规则分类最值钱。命令文档多是提问清单和流程，数字不多；仓库里同一份技能复制了十几份给不同工具 |
| Leonxlnx/taste-skill | 112,782 | MIT | 2026-11-08 | 硬数值体系（间距、字号比、卡片规则）、真实浏览器里跑的检查器 | 融合 | 强烈偏向一种营销站风格，有些规则互相矛盾（比如完全禁止图片说明），不能整套照搬 |
| anthropics/skills | 191,776 | 未识别 | 2026-11-06 | `frontend-design` 对当前 AI 默认风格的归纳最准确；`canvas-design`、`theme-factory` | 融合 | 根目录没有许可证文件；读过的五个技能各自带 Apache-2.0 的 LICENSE.txt。`canvas-design` 偏理念，没有阈值 |
| anthropics/claude-plugins-official | 46,701 | Apache-2.0 | 2026-11-10 | 本机安装的 `frontend-design` 插件来源 | 融合 | 内容同上 |
| anthropics/claude-cookbooks | 54,482 | MIT | 2026-11-04 | 前端审美提示词的原始出处：命名默认值、给出具体维度 | 融合 | 它推荐的字重极端对比在微软雅黑上做不到，只能用于数字和西文 |
| Dammyjay93/interface-design | 5,950 | MIT | 2026-06-20 | 去模板化的两遍检查法（先眯眼再逐项）、深度策略四选一 | 融合 | 偏产品界面（状态、组件），没有工具 |
| nextlevelbuilder/ui-ux-pro-max-skill | 147,597 | MIT | 2026-11-10 | 带规则编号的大清单，图表规则可用 | 参考 | 星标最高但含金量不匹配。它的 `slides` 技能本身就是反例：25 个版式基本是“3–6 张功能卡”“4 列指标”，默认带卡片色条和全员淡入 |
| bbylw/ui-ux-pro-max-skill-cn | 1,511 | MIT | 2026-11-02 | 上一项的中文教程站 | 参考 | 翻译，无新增内容 |
| emilkowalski/skills | 55,617 | MIT | 2026-11-09 | 动效工艺；`apple-design` 里的排印和材质部分 | 并装 | 约 95% 是动效和手势，归 motion 目录管 |
| ibelick/ui-skills | 10,913 | MIT | 2026-11-07 | `baseline-ui` 的硬性清单、有证据才下结论的审查流程 | 融合 | 多数条目是 Tailwind / React 机制，对 deck 有用的只有六七条 |
| vercel-labs/web-interface-guidelines | 1,144 | MIT | 2026-10-05 | 排印微规则（弯引号、不换行空格、等宽数字）、同心圆角、分层阴影 | 融合 | 大部分篇幅是表单、无障碍和性能，和 deck 无关 |
| vercel-labs/agent-skills | 33,822 | 未识别 | 2026-10-28 | `react-view-transitions`、`composition-patterns` | 参考 | 没有根许可证文件，README 写 MIT，部分技能的元数据里写了 MIT。`web-design-guidelines` 只是个去抓上一项内容的壳 |
| google-labs-code/design.md | 28,803 | Apache-2.0 | 2026-11-06 | 给代理描述视觉识别的文件格式规范 | 参考 | 是格式不是工艺。本项目的令牌文件可以考虑导出成这个格式 |
| google-labs-code/stitch-skills | 8,716 | Apache-2.0 | 2026-08-17 | 配合 Stitch 的技能集 | 参考 | 依赖 Stitch MCP |
| VoltAgent/awesome-design-md | 126,417 | MIT | 2026-10-28 | 各大品牌设计体系的 DESIGN.md 分析合集 | 参考 | 是别人品牌的拆解，直接套用就是抄风格；星标远高于实用性 |
| jiji262/claude-design-skill | 217 | MIT | 2026-07-15 | 简洁的反模板化陈述、设备框尺寸 | 融合 | 和 huashu 同源，数字更少 |
| nexu-io/open-design | 106,962 | Apache-2.0 | 2026-11-10 | 本地优先的设计代理工作台，内置大量技能 | 并装 | 是产品不是规则集 |
| bencium/bencium-marketplace | 491 | MIT | 2026-10-04 | 设计与开发技能合集 | 参考 | 只看了简介 |
| aievolutionpl/agent-design-taste | 15 | MIT | 2026-11-04 | 15 种风格配方 | 参考 | 星标极少，未经验证 |
| Ferousco-dev/anti-slop-design | 21 | MIT | 2026-10-02 | 反模板化技能 | 参考 | 同上 |
| obra/superpowers | 315,426 | MIT | 2026-11-03 | 代理工作方法论 | 参考 | 和视觉设计无关，列出是因为各榜单都把它放在前面 |
| antfu/skills | 6,064 | MIT | 2026-11-10 | 前端工程技能合集 | 参考 | 工程向 |
| jezweb/claude-skills | 1,106 | MIT | 2026-10-09 | Tailwind v4、Cloudflare 全栈技能 | 参考 | 工程向 |
| alirezarezvani/claude-skills | 29,575 | MIT | 2026-11-10 | 410 个技能的大合集 | 参考 | 以量取胜，设计相关的质量参差 |
| wshobson/agents | 42,384 | MIT | 2026-11-09 | 多代理与技能合集 | 参考 | 同上 |
| openai/skills | 28,650 | 未识别 | 2026-10-28 | Codex 技能目录 | 参考 | 本机的 `design-qa`、`image-to-code` 来自 Codex 插件缓存，没有找到许可证，只归纳了思路 |
| remotion-dev/skills | 6,768 | 未识别 | 2026-11-09 | 用代码做视频的技能 | 参考 | 归 motion 目录 |
| greensock/gsap-skills | 18,216 | MIT | 2026-07-29 | GSAP 官方技能，本机已装 | 并装 | 归 motion 目录 |

## C. 中文排版

| 仓库 | 星标 | 许可证 | 最近推送 | 最强的地方 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| sivan/heti | 6,751 | MIT | 2025-08-31 | 标点挤压和中西间距的实现方式（包裹加 margin，不插空格） | 融合 | 面向长文阅读，两端对齐等默认值不适合幻灯片；一年多没更新，没跟上 `text-autospace` |
| vinta/pangu.js | 4,861 | MIT | 2026-10-24 | 中西文之间自动加空格的事实标准 | 融合 | 它插入真实空格字符，会和原生 `text-autospace` 叠加；本项目只借了判定思路 |
| ethantw/Han | 2,525 | MIT | 2026-09-06 | 汉字标准格式，标点和着重号处理 | 参考 | 体量大、依赖 JS 改写 DOM，对固定画布过重 |
| sparanoid/chinese-copywriting-guidelines | 15,837 | MIT | 2026-10-12 | 中文文案排版指北：空格、标点、专有名词 | 融合 | 文案层面的规则，写得清楚 |
| w3c/clreq | 813 | W3C Software and Document License | 2026-10-25 | 中文排版需求：避头尾、标点宽度、行长 | 融合 | 权威但面向书籍排版，只取了和幻灯片相关的十来条事实 |
| lxgw/LxgwWenKai | 26,934 | OFL-1.1 | 2026-11-09 | 开源楷体，可随包分发 | 参考 | 需要手写感时的备选字体 |
| adobe-fonts/source-han-sans | 17,456 | OFL-1.1（GitHub 未识别，LICENSE 文件为 OFL） | 2025-06-25 | 思源黑体，带 `halt`、`palt` 特性，七个字重 | 参考 | 要跨平台完全一致时的随包字体，体积大，必须子集化 |
| chenglou/pretext | 51,024 | MIT（GitHub 未识别，LICENSE 文件为 MIT） | 2026-10-15 | 不触发重排的文本测量与排版 | 参考 | 没有读代码；本项目的测量用的是浏览器 Range |

## D. 文字适配与图标

| 仓库 | 星标 | 许可证 | 最近推送 | 最强的地方 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| rikschennink/fitty | 3,854 | MIT | 2025-05-15 | 单行文字撑满宽度 | 参考 | 只管单行；本项目自写了多行二分法 |
| STRML/textFit | 686 | 未识别 | 2023-01-29 | 多行文字适配盒子 | 参考 | 久未维护，许可证未识别 |
| adobe/balance-text | 1,405 | 未识别 | 2024-04-08 | `text-wrap:balance` 出现之前的 JS 实现 | 参考 | 已被原生属性取代 |
| tabler/tabler-icons | 22,595 | MIT | 2026-11-10 | 6,200 多个线性图标，线宽可调 | 并装 | 推荐的图标来源 |
| lucide-icons/lucide | 25,681 | ISC（GitHub 未识别，LICENSE 文件为 ISC） | 2026-11-10 | 一致性好的线性图标 | 并装 | 最常见的默认选择，用它不会错也不会有特点 |
| phosphor-icons/core | 399 | MIT | 2026-01-06 | 六种粗细的图标族 | 并装 | 需要粗细变化时用 |
| simple-icons/simple-icons | 26,194 | CC0-1.0 | 2026-11-08 | 品牌 logo 的 SVG | 并装 | 图形是 CC0，但各品牌有自己的商标使用规范 |
| argyleink/open-props | 5,570 | MIT | 2026-10-11 | 一套现成的 CSS 自定义属性 | 参考 | 本项目有自己的令牌 |
| shadcn-ui/ui | 127,803 | MIT | 2026-11-10 | 组件默认值讲究 | 参考 | 是界面组件，直接搬到幻灯片上就是“代码味”的来源 |
| tailwindlabs/tailwindcss-typography | 6,487 | MIT | 2026-06-08 | 长文排版默认值 | 参考 | 面向西文长文 |

## E. 图解、图表、导出

| 仓库 | 星标 | 许可证 | 最近推送 | 最强的地方 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| observablehq/plot | 5,423 | ISC | 2026-11-05 | 简洁的图形语法，默认值克制 | 并装 | 数据量大时的首选库 |
| apache/echarts | 67,700 | Apache-2.0 | 2026-10-13 | 功能最全的图表库 | 参考 | 默认样式是仪表盘味，用之前要关掉一大半配置 |
| frappe/charts | 15,094 | MIT | 2026-10-19 | 零依赖的 SVG 图表 | 参考 | 轻量备选 |
| leeoniya/uPlot | 10,628 | MIT | 2026-11-10 | 极快的时间序列图 | 参考 | 幻灯片用不上这个性能 |
| mermaid-js/mermaid | 91,061 | MIT | 2026-11-10 | 文本生成图解 | 参考 | 自动布局的结果达不到演示级，线和间距不可控 |
| rough-stuff/rough | 21,371 | MIT | 2024-07-28 | 手绘风格图形 | 参考 | 手绘抖动本身是一种模板化特征 |
| tldraw/tldraw | 51,443 | 未识别（自有许可） | 2026-11-10 | 无限画布 SDK | 参考 | 许可证有商用限制 |
| zumerlab/snapdom | 8,233 | MIT | 2026-11-09 | DOM 转图片 | 并装 | 需要在浏览器里导出单页图片时用 |
| bubkoo/html-to-image | 7,277 | MIT | 2026-11-09 | 同上 | 参考 | 同类备选 |
| puppeteer/puppeteer | 95,815 | Apache-2.0 | 2026-11-10 | 无头 Chrome 控制 | 并装 | 本项目用的是 playwright-core，二选一 |
| Kozea/WeasyPrint | 9,779 | BSD-3-Clause | 2026-11-10 | HTML 转 PDF 的排版引擎 | 参考 | 不是 Chrome 内核，渲染结果和浏览器不一致，不适合本项目 |
| typst/typst | 57,088 | Apache-2.0 | 2026-11-06 | 现代排版系统 | 参考 | 另一条技术路线 |
| penpot/penpot | 62,247 | MPL-2.0 | 2026-11-10 | 开源设计工具 | 参考 | 与本项目流程无关 |
| nolimits4web/atropos | 3,613 | MIT | 2026-10-06 | 3D 视差悬停 | 参考 | 归 motion 目录，且属于应当克制的效果 |

## F. 技能榜单

| 仓库 | 星标 | 许可证 | 最近推送 | 用途 | 分级 | 实话 |
|---|---|---|---|---|---|---|
| ComposioHQ/awesome-claude-skills | 79,181 | 未识别 | 2026-09-18 | 综合榜单 | 参考 | 收录宽松，设计类条目少且不筛质量 |
| hesreallyhim/awesome-claude-code | 57,669 | 未识别 | 2026-11-10 | Claude Code 资源精选 | 参考 | 筛选较严 |
| VoltAgent/awesome-agent-skills | 37,032 | MIT | 2026-11-05 | 官方团队技能合集 | 参考 | 找各家官方技能的入口 |
| travisvn/awesome-claude-skills | 15,761 | 未识别 | 2026-04-28 | 综合榜单 | 参考 | 半年没更新 |
| BehiSecc/awesome-claude-skills | 10,385 | 未识别 | 2026-11-02 | 综合榜单 | 参考 | 与上面几个高度重复 |
| zhuyansen/awesome-claude-design-skills | 9 | 未识别 | 2026-11-09 | 专门的设计技能榜单 | 参考 | 很新，条目对口 |

## G. 本机已装、不在 GitHub 上核实的

| 技能 | 位置 | 许可证 | 取了什么 | 分级 |
|---|---|---|---|---|
| frontend-design（官方插件） | `~/.claude/plugins/.../frontend-design` | Apache-2.0 | AI 默认风格的五个集群、结构即信息、克制与自查 | 融合 |
| frontend-dev | `~/.agents/skills/frontend-dev` | MIT（元数据声明） | 禁用占位图链接、只动画合成属性。其余是 React 和素材生成流程 | 参考 |
| ppt-pixel-restore | `~/.claude/skills/ppt-pixel-restore` | 用户自有 | 固定画布铁律、禁孤行、一级卡与嵌套卡的深度规则、像素差验收 | 融合 |
| design-qa / audit / image-to-code / url-to-code | Codex 插件 product-design 0.1.56 | 未找到许可证 | 只归纳思路：同视口同状态并排比对、分级缺陷、五个必查面 | 参考 |
| hyperframes（house-style、typography） | Codex 插件 hyperframes 0.1.2 | 上游 Apache-2.0 | 见 A 表 | 融合 |
| figma-implement-motion、gsap-*、shader-dev、vercel-react-view-transitions、vercel-composition-patterns | 各自目录 | 各异 | 动效、着色器、React 机制，不属于本目录范围 | 参考 |

## 几点总体判断

1. **星标和含金量不成正比。** ui-ux-pro-max（14.7 万）、awesome-design-md（12.6 万）、superpowers（31.5 万）对做好一页幻灯片的帮助，远不如 huashu-design（2.9 万）和 Kami（1.2 万）。
2. **真正可执行的知识集中在五六个仓库里**：huashu-design、impeccable、taste-skill、Kami、open-slide、anthropics 的 frontend-design。其余多是它们的转述、翻译或合集。
3. **各家在几个问题上互相矛盾**：能不能用 Inter；大写小标签是禁用还是慎用；近黑色是推荐还是特征；中文正文要不要 `text-wrap`；截图能不能裁。craft 文档里遇到这些地方都写了本项目的取舍和理由。
4. **没有一家把中文固定画布讲全。** 中文排印只有 huashu、Kami、heti 认真处理过，且都不是针对 16:9 画布加双平台系统字体这个组合。这部分是本目录自己补的，结论都经过渲染验证。
