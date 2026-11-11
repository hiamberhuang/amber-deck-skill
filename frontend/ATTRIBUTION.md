# 来源与许可证

本目录的文字、片段和脚本都是自己写的。下面列出读过并且影响了内容的来源。处理原则：

- **MIT / Apache-2.0 / ISC / OFL / CC0 来源**：规则用自己的话重写；通用的 CSS 惯用法（如 `aspect-ratio` 加 `object-fit` 的图片容器、`transform:scale` 缩放舞台、`@page` 打印块）是行业通行写法，按本项目的令牌和画布重新实现，没有整段照搬。受到具体启发的地方在片段文件头部的注释里写明。
- **AGPL、没有许可证、许可证不明的来源**：不复制任何文字和代码，只在思路层面了解，下表单独标出。
- 所有数值阈值在采用前都对照了至少两个来源，有冲突的地方在 craft 文档里写明取舍；能验证的都在无头 Chrome 里渲染验证过。

核实日期 2026-11-10。提交号是当天浅克隆到的版本。

## 一、内容被融合进 craft 文档的来源

| 来源 | 许可证 | 版本 | 影响了什么 |
|---|---|---|---|
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | MIT | e8d1148 | 中文行高与行长区间、字体栈写法、`font-synthesis:none`、中文不用斜体、PDF 导出前把页面摊平的做法、每轮只修三个问题的打磨循环、文字核对 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache-2.0 | ec229b4 | 反模式的分类方式和可检测特征（侧边色条、渐变字、发光、卡中卡、图标方块、小标签、单调间距等）、标题上下间距关系、彩色底上不用灰字 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT | f6b7657 | 空白面积阈值（35% / 50%）、间距台阶、卡片最多两层、同一行图片同一比例、数字不与单位分离、纠偏过头的现象 |
| [anthropics/skills](https://github.com/anthropics/skills)（frontend-design、canvas-design、theme-factory、web-artifacts-builder、brand-guidelines） | 各技能 LICENSE.txt 为 Apache-2.0；仓库根目录无许可证文件 | 2c5958e | 当前 AI 默认风格的几个集群、结构元素必须承载信息、只在一处用力、编号只给真正的序列 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)（frontend-design 插件，本机安装版） | Apache-2.0 | 本机 | 同上 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)（prompting_for_frontend_aesthetics）及 Anthropic 博客 “Improving frontend design through Skills” | MIT（cookbook） | main | “命名默认值再避开”的方法；模型会收敛到新的默认值 |
| [tw93/Kami](https://github.com/tw93/Kami) | MIT | 381db25 | 图解几何规则（节点上限、正交连线、端点贴边或明确间隙、箭头独立绘制、SVG 文字基线）、中文标题行高下限、中文不收紧字距、SVG 里中文字体在前、对 `text-wrap` 的相反主张 |
| [open-slide/open-slide](https://github.com/open-slide/open-slide) | MIT | 3233309 | 纵向预算算术、装不下就拆页不缩字、截图就绪信号 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | MIT | 9906a34 | 固定舞台加可见性切换的结构、打印块的组成、不把过程标签渲染进成品 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | MIT | fd16290 | 图片不裸放、容器管比例的做法；强调色上的文字要单独定义 |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)（baoyu-diagram） | MIT | ca703c2 | 图解的间距下限、流程主路径走直线、标题写结论 |
| [jiji262/claude-design-skill](https://github.com/jiji262/claude-design-skill) | MIT | 35a20e5 | 设备框的比例与阴影量级、靠构图填满画布 |
| [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design) | MIT | 2f9be32 | 眯眼检查、深度策略只选一种、分层阴影的结构、圆角同心、“什么不算模板化”的过滤 |
| [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) | MIT | 434b7f9 | 等宽数字、数字与单位不换行、同心圆角、阴影和边框带底色色相 |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | MIT | 97dea9e | 一个视图一个强调色、不用渐变字 |
| [emilkowalski/skills](https://github.com/emilkowalski/skills)（apple-design 的排印部分） | MIT | 715c180 | 大字行高收紧、文字颜色分级 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)（本机 Codex 插件 0.1.2 的 house-style、typography、data-in-motion） | Apache-2.0 | 本机 | 固定画面的字号下限思路、深底文字的光学补偿、数字要有参照物、不用饼图和多面板 |
| [sivan/heti](https://github.com/sivan/heti) | MIT | 7d5ceb7 | 中西间距用包裹加 margin 而不插空格；连续标点用负边距挤压；手动挤压时关闭浏览器自动挤压 |
| [vinta/pangu.js](https://github.com/vinta/pangu.js) | MIT | 未克隆 | 汉字与西文交界的判定思路（未读源码，按公开行为自行实现） |
| [sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines) | MIT | master | 空格、全角半角标点、专有名词写法 |
| [W3C 中文排版需求 clreq](https://www.w3.org/TR/clreq/) | W3C Software and Document License | TR | 避头尾、标点宽度与挤压、破折号省略号不拆、行长与行距的范围 |
| MDN Web Docs 与 [MDN browser-compat-data](https://github.com/mdn/browser-compat-data) v8.1.8 | 文档 CC-BY-SA 2.5；兼容数据 CC0 | 2026-11-02 | `text-wrap`、`text-spacing-trim`、`text-autospace`、`word-break:auto-phrase`、`hanging-punctuation`、容器查询、视图过渡的支持版本（只引用事实） |
| Chrome for Developers 博客（CSS i18n features、text-wrap: pretty） | 文档 CC-BY 4.0 | 网页 | `auto-phrase` 只支持日文、`balance` 的行数限制（只引用事实） |
| [Microsoft Windows 11 字体列表](https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list) | 文档 | 网页 | Windows 自带中文字体及其字重（只引用事实） |
| ppt-pixel-restore（用户本机技能） | 用户自有 | 本机 | 固定画布铁律、禁孤行、一级卡与嵌套卡的规则、像素差验收 |
| `../style/tokens.css`（本项目另一工作流产出） | 本项目 | 当前 | 所有颜色、字号、圆角、阴影令牌；片段里的 `_base.css` 是它的同名子集 |

## 二、只了解思路、没有使用任何文字或代码的来源

| 来源 | 原因 | 了解了什么 |
|---|---|---|
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | AGPL-3.0，与本技能的 MIT 许可证不兼容 | 渲染后量化校验（溢出像素、底部留白）并按梯度修复的验收思路。本目录的 `deck-lint.js` 是独立实现，规则集合、阈值和代码都不来自它 |
| Codex 插件 product-design 0.1.56（design-qa、audit、image-to-code、url-to-code） | 插件缓存里没有找到许可证 | 源图与实现同视口并排比对、缺陷分级、必查的几个面 |
| Codex 插件 figma 17.0.0（figma-implement-motion） | 同上，且属于动效范围 | 未采用 |
| [openai/skills](https://github.com/openai/skills)、[remotion-dev/skills](https://github.com/remotion-dev/skills)、[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 根目录没有许可证文件 | 只看了目录和个别技能的元数据 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT，可用，但内容没有采用 | 它的 slides 技能被当作反例分析 |
| [moguzbulbul/blueprint-animation](https://github.com/moguzbulbul/blueprint-animation)、[STRML/textFit](https://github.com/STRML/textFit)、[adobe/balance-text](https://github.com/adobe/balance-text) | 许可证未识别 | 只看了简介 |

## 三、片段与脚本

`snippets/` 下的全部 HTML、CSS、JS、SVG 为本项目自写，随本技能以 MIT 发布。

- `no-orphan.js`、`keep-words.js`、`fit-text.js`、`cjk-spacing.js`、`deck-lint.js`：独立实现，没有参考任何第三方源码。`cjk-spacing.js` 的“不插空格只加间距”思路来自 heti（MIT），判定范围参考了 pangu.js（MIT）的公开行为。
- `assets/scene.svg`、`assets/shot-web.svg`、`assets/shot-app.svg`：自绘的示意素材。截图里的产品、公司名、人名和数据全部是虚构的。
- `07-logo-wall.html` 里的六个 logo 是虚构图形，不对应任何真实品牌。
- 片段没有引用任何外部字体、脚本或图片。

## 四、克隆目录

调研时把 18 个仓库浅克隆到了 `_clones/`（约 600MB）。读完后已删除，只保留 `_clones/README.md` 记录仓库和提交号，需要时可以按提交号重新克隆。克隆的内容全程只被读取，没有执行过其中任何代码。
