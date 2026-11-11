# Awesome Motion & Aesthetics for Decks

服务于 HTML deck / PPT 的动效、美学、版式资源索引，是对 `release/amber-deck-skill/references/github-index.tsv`（204 个仓库）的刷新和扩展。

- 核实日期：2026-11-10（Stars、License、最后 push 均为当日 `gh api repos/{owner}/{repo}` 实测）
- 正文条目总数：198（不含 Skills 节和剔除表）
- TSV 已有 / 新增：96 / 102
- Tier 分布：install 135，borrow idea 44，reference 19
- Skills 数量：42 个具名 skill，来自 26 个仓库（install 27，borrow idea 15）
- 剔除 / 受限数量：24

Tier 定义：

- install：可直接进 deck 工具链（npm、pip、字体文件或 skill 安装后即用）
- borrow idea：不装依赖，借它的做法、结构或参数思路
- reference：看视觉和案例

License 列说明：取 gh api 的 `license.spdx_id`；GitHub 返回 NOASSERTION 或 null 时，已查看 LICENSE 文件、package.json 或 README 的许可声明，并在括号里写明依据。“给 deck 借什么”一栏均在读取该仓库 README（Skills 节为 SKILL.md）后写成。各节内按 Stars 降序。TSV 中与动效美学无关的通用工具（文档转换、截图测试、PDF 处理等）未收录。

## 1. 动画引擎与补间

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | 74483 | MIT | 2026-11-02 | v4 用 ES 模块按需引入 animate、stagger，一行给一组卡片做错峰位移和旋转，同一套 API 可动 CSS、SVG 属性和 JS 对象 | install | TSV 已有 |
| [motiondivision/motion](https://github.com/motiondivision/motion) | 35046 | MIT | 2026-11-10 | 混合引擎同时走 JS 和原生 Web Animations API，可用 animate() 给 HTML deck 元素做 120fps 的 GPU 加速入场，React/Vue 各有独立包 | install | TSV 已有 |
| [airbnb/lottie-web](https://github.com/airbnb/lottie-web) | 32394 | MIT | 2025-09-01 | 把 After Effects 用 Bodymovin 导出的 JSON 直接在页面里渲染，设计师做的图标和插画动效不用手工重写 | install | TSV 已有 |
| [greensock/GSAP](https://github.com/greensock/GSAP) | 30400 | GreenSock Standard "no charge" License（自有条款，README 指向 gsap.com/standard-license，免费含商用，非 OSI 许可） | 2026-11-04 | 用 timeline 编排每页入场顺序，ScrollTrigger 做滚动式 deck，gsap.matchMedia() 统一处理 prefers-reduced-motion | install | TSV 已有 |
| [pmndrs/react-spring](https://github.com/pmndrs/react-spring) | 29271 | MIT | 2026-11-01 | useSpring 用弹簧物理代替时长曲线，React 版 deck 的卡片翻转、悬停回弹手感更自然，也支持 react-three-fiber | install | TSV 已有 |
| [Popmotion/popmotion](https://github.com/Popmotion/popmotion) | 20155 | MIT（仓库根无 LICENSE，packages/popmotion/package.json 声明 MIT） | 2024-03-12 | 约 4.5kb 的 animate() 支持数字、颜色和复杂字符串的关键帧与弹簧动画，可借来做数值插值而不引入大库 | borrow idea | TSV 已有 |
| [mojs/mojs](https://github.com/mojs/mojs) | 18894 | MIT | 2026-07-30 | 内置 shape、burst、swirl、stagger 组件，适合给数据页高亮做爆点、放射线这类点缀动效 | install | TSV 已有 |
| [julianshapiro/velocity](https://github.com/julianshapiro/velocity) | 17188 | MIT | 2020-10-24 | V2 仍是 beta 且 2020 年后无推送，只作为 jQuery 时代“UI pack 预设动画”思路的历史参考 | reference | 新增 |
| [formkit/auto-animate](https://github.com/formkit/auto-animate) | 13966 | MIT | 2026-11-07 | 给父元素挂一行 autoAnimate，子元素增删和重排自动过渡，适合 deck 里列表逐条出现或排序变化 | install | TSV 已有 |
| [theatre-js/theatre](https://github.com/theatre-js/theatre) | 12965 | Apache-2.0 | 2024-08-14 | 代码和可视化时间轴编辑器两用，可给 THREE.js 对象和 DOM 打关键帧，借它“先在面板里调曲线再导出状态”的做法 | borrow idea | 新增 |
| [reactjs/react-transition-group](https://github.com/reactjs/react-transition-group) | 10212 | BSD-3-Clause（LICENSE 文件为 BSD 3-Clause，GitHub 未识别） | 2026-03-05 | 用 Transition/CSSTransition 管理组件挂载和卸载的阶段 class，React deck 切页时按 enter/exit 状态挂 CSS 动画 | install | TSV 已有 |
| [tweenjs/tween.js](https://github.com/tweenjs/tween.js) | 10149 | MIT（LICENSE 文件为 MIT，GitHub 未识别） | 2026-11-09 | 基于 Robert Penner 缓动方程的补间引擎，Tween 对象驱动任意数值，常与 three.js 配合做镜头和物体过渡 | install | TSV 已有 |
| [veltman/flubber](https://github.com/veltman/flubber) | 6963 | MIT | 2022-11-08 | 给任意两个形状做“最佳猜测”插值，解决 d3.transition() 在不对应的 SVG 路径间变形时的翻转和跳变 | install | 新增 |
| [sghall/react-move](https://github.com/sghall/react-move) | 6542 | MIT | 2023-01-07 | 3.5kb 的数据驱动动画，按数据条目控制 delay、duration、easing，适合借来做图表条形逐条长出 | borrow idea | TSV 已有 |
| [thednp/kute.js](https://github.com/thednp/kute.js) | 2644 | MIT | 2026-03-26 | 组件覆盖 SVG 描边绘制、路径变形、文字逐字写出和数字倒计时，一个库解决 deck 常见的四类动效 | install | 新增 |
| [jeremyckahn/shifty](https://github.com/jeremyckahn/shifty) | 1553 | MIT | 2026-11-09 | 只提供 tween 的最小内核，支持 Promise/async 串联，适合在自研 deck 播放器里做底层插值 | borrow idea | TSV 已有 |
| [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime) | 1254 | MIT | 2026-11-10 | .riv 文件自带状态机，可借“交互动画由状态机驱动而不是写死时间轴”的思路；网页端用其 web runtime 包装 | borrow idea | TSV 已有 |
| [LottieFiles/dotlottie-web](https://github.com/LottieFiles/dotlottie-web) | 941 | MIT | 2026-11-04 | .lottie 单文件打包多段动画、主题和状态机，Rust+WASM(ThorVG) 内核可选 WebGL2/WebGPU 渲染，适合一页放多段 Lottie | install | TSV 已有 |

## 2. CSS 动效与入场

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [animate-css/animate.css](https://github.com/animate-css/animate.css) | 82977 | Hippocratic License 2.1（LICENSE 实为伦理型许可，非 OSI，禁止违反人权的用途） | 2024-07-29 | 加 animate__animated 和效果 class 即可得到入场动画，自带 prefers-reduced-motion 关闭，适合静态 HTML deck 快速出效果 | install | TSV 已有 |
| [michalsnik/aos](https://github.com/michalsnik/aos) | 28047 | MIT | 2024-03-26 | 在元素上写 data-aos 属性即可滚动触发入场，可设锚点位置和缓动，适合长滚动式 deck | install | TSV 已有 |
| [miniMAC/magic](https://github.com/miniMAC/magic) | 8592 | MIT | 2022-08-23 | 3.1kB 的 CSS3 特效动画集，如 puffIn、vanishOut、swap 这类夸张进出场，可挑几个 keyframes 抄进主题 | borrow idea | TSV 已有 |
| [css-doodle/css-doodle](https://github.com/css-doodle/css-doodle) | 6081 | MIT | 2026-11-07 | 用 Web Component 写网格单元的 CSS 规则并混入随机和数学函数，生成背景纹样、图标和装饰，cssd 可导出图片和视频 | install | 新增 |
| [argyleink/gui-challenges](https://github.com/argyleink/gui-challenges) | 2991 | Apache-2.0 | 2025-02-19 | 每个挑战配 Demo、视频和文章，Split Text、Media Scroller、Color Schemes 等可直接看实现方式 | reference | 新增 |
| [argyleink/transition.css](https://github.com/argyleink/transition.css) | 2019 | Apache-2.0 | 2025-06-16 | 46 个现成的 clip-path 转场，按 circles、squares、polygons、wipes 分包，给元素加 transition-style 属性即可做擦除式出场 | install | 新增 |
| [jh3y/whirl](https://github.com/jh3y/whirl) | 1837 | MIT | 2023-01-03 | 纯 CSS 加载动画合集，可单独 import 某一个 loader 的样式，借来做 deck 里的等待态或装饰小动画 | borrow idea | TSV 已有 |

## 3. 滚动、翻页与视差

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [nolimits4web/swiper](https://github.com/nolimits4web/swiper) | 41908 | MIT | 2026-10-30 | 硬件加速的触摸滑动器，自带 fade、cube、coverflow、creative 等切换效果，可直接当横向翻页 deck 外壳 | install | 新增 |
| [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) | 17176 | MIT | 2026-11-10 | 平滑滚动库，可和 WebGL 场景、视差层同步，滚动式 deck 的阻尼手感从这里来 | install | 新增 |
| [barbajs/barba](https://github.com/barbajs/barba) | 12996 | MIT | 2024-12-02 | 把多页面网站当 SPA 做页面间流畅过渡，借它的 leave/enter 钩子组织“上一页退场、下一页进场”的切页逻辑 | borrow idea | 新增 |
| [locomotivemtl/locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll) | 8899 | MIT | 2026-11-06 | 基于 Lenis 的 9.4kB 库，用 data-scroll-speed 这类属性做视差和视口检测，CSS 一行引入 | install | 新增 |
| [swup/swup](https://github.com/swup/swup) | 5252 | MIT | 2026-11-03 | 服务端渲染站点的页面转场库，管理加载生命周期、缓存和预加载，多 HTML 文件组成的 deck 可借其切页方式 | borrow idea | 新增 |
| [micku7zu/vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js) | 4010 | MIT | 2024-03-01 | 原生 JS 的 3D 倾斜效果，max、perspective、scale、glare 参数可调，适合给图片卡片加鼠标跟随倾斜 | install | 新增 |
| [nolimits4web/atropos](https://github.com/nolimits4web/atropos) | 3613 | MIT | 2026-10-06 | 触摸友好的 3D 视差悬停，多层元素按深度偏移，适合封面卡片或产品图的立体感 | install | 新增 |

## 4. 文字、数字与代码动画

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [carbon-app/carbon](https://github.com/carbon-app/carbon) | 36139 | MIT | 2026-11-05 | 代码截图美化工具，可参考它的窗口外框、阴影、背景和字体组合来设计代码页 | reference | 新增 |
| [shikijs/shiki](https://github.com/shikijs/shiki) | 13921 | MIT | 2026-11-02 | 基于 TextMate 语法的高亮器，直接用 VS Code 主题配色，生成静态 HTML，代码页配色和编辑器一致 | install | 新增 |
| [cmiscm/leonsans](https://github.com/cmiscm/leonsans) | 10172 | MIT | 2020-09-21 | 用代码定义的几何字体，每个字形有坐标点，可做描线绘制、字重动态变化、波浪和 metaball 效果 | borrow idea | 新增 |
| [inorganik/countUp.js](https://github.com/inorganik/countUp.js) | 8151 | MIT | 2026-10-17 | 无依赖的数字计数动画，autoAnimate 选项可在元素进入视口时自动开始，支持前后缀和千分位 | install | 新增 |
| [barvian/number-flow](https://github.com/barvian/number-flow) | 7791 | MIT | 2026-09-20 | 数字变化时按位滚动过渡的组件，React、Vue、Svelte 和原生 JS 都有，适合 KPI 大字报页 | install | 新增 |
| [pomber/code-surfer](https://github.com/pomber/code-surfer) | 6366 | MIT | 2023-05-02 | 给 MDX Deck 的代码块加缩放、滚动、聚焦和逐步形变，借它“同一段代码分步高亮”的讲解节奏 | borrow idea | 新增 |
| [code-hike/codehike](https://github.com/code-hike/codehike) | 5397 | MIT | 2026-03-17 | 把 Markdown 和 React 打通做代码讲解，可借它按步骤切换代码焦点与旁注的版面组织 | borrow idea | 新增 |
| [bradley/Blotter](https://github.com/bradley/Blotter) | 3083 | MIT（license.txt 内文为 MIT，GitHub 未识别） | 2020-07-28 | 用 GLSL 给文字加液体、通道错位、滚动扭曲等效果，借它“文字先绘入纹理再用 shader 处理”的机制做标题 | borrow idea | 新增 |
| [tameemsafi/typewriterjs](https://github.com/tameemsafi/typewriterjs) | 2663 | MIT | 2026-10-22 | typeString、deleteChars、pauseFor 链式调用模拟打字和回删，适合封面标语或问题页逐字出现 | install | 新增 |
| [raycast/ray-so](https://github.com/raycast/ray-so) | 2369 | MIT | 2026-11-10 | Raycast 的代码图片工具源码，可参考其主题背景渐变、留白和圆角窗口的代码卡片样式 | reference | 新增 |
| [shshaw/Splitting](https://github.com/shshaw/Splitting) | 1757 | MIT | 2024-06-19 | 把文字拆成词和字符的 span 并写入 --word-index、--char-index 等 CSS 变量，纯 CSS 就能做逐字错峰入场 | install | 新增 |
| [lukePeavey/SplitType](https://github.com/lukePeavey/SplitType) | 734 | ISC（仓库无 LICENSE 文件，package.json 声明 ISC） | 2023-12-03 | 按行、词、字符拆分文本，思路仿 GSAP SplitText，可交给任意动画库做标题逐行升起，支持 revert 还原 | install | 新增 |

## 5. SVG、图表与图示

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | 135432 | MIT | 2026-11-09 | 手绘风无限画布，npm 包可嵌入并导出 PNG/SVG，适合做白板风格的架构图 | install | TSV 已有 |
| [d3/d3](https://github.com/d3/d3) | 113895 | ISC | 2026-11-03 | 底层数据驱动图形，scale、shape、transition 模块可组合出任意定制图表，并能做数据更新时的过渡 | install | TSV 已有 |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | 91061 | MIT | 2026-11-10 | 用类 Markdown 文本生成流程图、时序图、甘特图，deck 里的结构图可以和文字一起维护 | install | TSV 已有 |
| [chartjs/Chart.js](https://github.com/chartjs/Chart.js) | 67787 | MIT | 2026-11-09 | Canvas 图表库，v4 配置简单，常用柱线饼图开箱有动画，适合轻量 HTML deck | install | TSV 已有 |
| [apache/echarts](https://github.com/apache/echarts) | 67700 | Apache-2.0 | 2026-10-13 | 基于 zrender 的图表库，option 配置驱动，自带入场动画和中文文档，适合数据页快速出图 | install | TSV 已有 |
| [xyflow/xyflow](https://github.com/xyflow/xyflow) | 38955 | MIT | 2026-11-09 | React Flow/Svelte Flow 节点式图，节点和连线都是组件，适合做可拖拽的流程或架构图页 | install | TSV 已有 |
| [fabricjs/fabric.js](https://github.com/fabricjs/fabric.js) | 31554 | MIT | 2026-11-10 | HTML5 Canvas 对象模型，可借其对象选择、缩放、序列化思路做 deck 编辑器的画布层 | borrow idea | TSV 已有 |
| [recharts/recharts](https://github.com/recharts/recharts) | 27694 | MIT | 2026-11-09 | React + D3 的声明式图表组件，原生 SVG 输出，React deck 中按组件拼图表 | install | TSV 已有 |
| [d2lang/d2](https://github.com/d2lang/d2) | 25820 | MPL-2.0 | 2026-10-11 | 文本转图表的脚本语言，自带主题、字体设置和多种布局引擎，可导出 SVG/PNG/PDF 放进 deck | install | 新增 |
| [svg/svgo](https://github.com/svg/svgo) | 22804 | MIT | 2026-11-08 | 命令行和 Node 库，去掉矢量软件导出的 SVG 冗余元数据，减小 deck 里的图标和插图体积 | install | TSV 已有 |
| [rough-stuff/rough](https://github.com/rough-stuff/rough) | 21371 | MIT | 2024-07-28 | 小于 9kB，在 Canvas 和 SVG 上画手绘风格的线、弧、多边形和 SVG 路径，适合做草图风格示意图 | install | TSV 已有 |
| [airbnb/visx](https://github.com/airbnb/visx) | 21100 | MIT | 2026-06-22 | 把 d3 的计算和 React 渲染结合的底层组件集，按需装 @visx/shape 等包拼出定制图表 | install | 新增 |
| [plotly/plotly.js](https://github.com/plotly/plotly.js) | 18377 | MIT | 2026-11-09 | 覆盖统计图、3D 图、科学和金融图表，适合需要交互缩放或 3D 散点的技术汇报页 | install | TSV 已有 |
| [maxwellito/vivus](https://github.com/maxwellito/vivus) | 15478 | MIT | 2022-07-06 | 无依赖地让 SVG 线条按 delayed、sync、oneByOne 等方式“画出来”，适合流程图和手绘插图入场 | install | 新增 |
| [paperjs/paper.js](https://github.com/paperjs/paper.js) | 15191 | MIT（LICENSE.txt 内文为 MIT，GitHub 未识别） | 2026-11-06 | 矢量图形脚本框架，提供路径布尔运算、平滑和交点计算，可借来生成有机形状和装饰曲线 | borrow idea | TSV 已有 |
| [konvajs/konva](https://github.com/konvajs/konva) | 14931 | MIT（LICENSE 文件为 MIT，GitHub 未识别） | 2026-11-09 | 2D Canvas 场景图框架，每个形状有事件、拖拽、变换、动画和导出，适合做 deck 里的可编辑画布 | install | TSV 已有 |
| [plouc/nivo](https://github.com/plouc/nivo) | 14133 | MIT | 2026-07-21 | 基于 d3 的 React 图表组件，支持服务端渲染，按需装 @nivo 子包，主题配置集中 | install | TSV 已有 |
| [markmap/markmap](https://github.com/markmap/markmap) | 13230 | MIT | 2026-11-10 | Markdown 标题和列表直接变成可折叠缩放的思维导图，适合目录页或议程页 | install | 新增 |
| [antvis/G2](https://github.com/antvis/G2) | 12657 | MIT | 2026-10-28 | 图形语法可视化库，面向仪表盘和数据叙事，示例库很大可直接改，适合中文数据页 | install | TSV 已有 |
| [antvis/G6](https://github.com/antvis/G6) | 12384 | MIT | 2026-10-27 | 图可视化引擎，提供布局、交互、动画和主题，适合关系网络或组织结构页 | install | TSV 已有 |
| [vega/vega](https://github.com/vega/vega) | 12038 | BSD-3-Clause | 2026-11-05 | 用 JSON 声明数据、比例尺、标记和交互，再渲染到 Canvas 或 SVG，可借其规范结构设计图表模板 | borrow idea | TSV 已有 |
| [svgdotjs/svg.js](https://github.com/svgdotjs/svg.js) | 11911 | MIT（LICENSE.txt 内文为 MIT，GitHub 未识别） | 2026-08-04 | 无依赖的 SVG 操作和动画库，用链式 API 创建形状并做 animate()，适合手写图示动画 | install | TSV 已有 |
| [cytoscape/cytoscape.js](https://github.com/cytoscape/cytoscape.js) | 11279 | MIT | 2026-11-05 | 图论库加可选渲染器，内置多种网络布局，适合复杂关系数据的可视化页 | install | TSV 已有 |
| [metafizzy/zdog](https://github.com/metafizzy/zdog) | 10696 | MIT（仓库无 LICENSE 文件，README 写明 Licensed MIT） | 2023-07-18 | 圆润扁平的伪 3D 引擎，用 Illustration 加形状搭模型并旋转，适合封面上的小型立体插画 | install | 新增 |
| [rough-stuff/rough-notation](https://github.com/rough-stuff/rough-notation) | 9735 | MIT | 2024-03-18 | 基于 RoughJS 给页面文字加手绘下划线、圈注、高亮、方框，带动画，可在讲到要点时按顺序触发 | install | TSV 已有 |
| [jgraph/drawio](https://github.com/jgraph/drawio) | 9287 | Apache-2.0 | 2026-11-04 | draw.io 源码为 Apache-2.0，可参考其图形库和模板做结构图；README 注明图标集和模板另有条款 | reference | TSV 已有 |
| [timqian/chart.xkcd](https://github.com/timqian/chart.xkcd) | 7876 | MIT | 2026-10-21 | xkcd 漫画风格的手绘折线、柱状、饼图，一个 svg 节点即可渲染，适合轻松风格分享 | install | 新增 |
| [jwilber/roughViz](https://github.com/jwilber/roughViz) | 7174 | MIT | 2024-04-26 | 基于 D3、roughjs 和 handy 的手绘风柱图、甜甜圈图、折线图，用于表达趋势而非精确数值的页面 | install | 新增 |
| [antvis/Infographic](https://github.com/antvis/Infographic) | 7084 | MIT | 2026-10-20 | 声明式信息图引擎，语法为 AI 生成优化并支持流式渲染，可让模型直接输出信息图页 | install | TSV 已有 |
| [jakearchibald/svgomg](https://github.com/jakearchibald/svgomg) | 6213 | MIT | 2025-09-29 | SVGO 的图形界面，逐项开关优化选项并实时预览，适合手动处理单张 SVG | install | TSV 已有 |
| [vega/vega-lite](https://github.com/vega/vega-lite) | 5549 | BSD-3-Clause | 2026-11-07 | 用简短 JSON 描述可视化并编译成完整 Vega 规范，图表可以作为数据文件随 deck 一起版本化 | install | TSV 已有 |
| [observablehq/plot](https://github.com/observablehq/plot) | 5423 | ISC | 2026-11-05 | 图形语法风格的简洁 API，用 marks 和 scales 分层组合，少量代码出探索型图表 | install | TSV 已有 |
| [opentypejs/opentype.js](https://github.com/opentypejs/opentype.js) | 5045 | MIT | 2026-08-08 | 在浏览器或 Node 里把文字转成贝塞尔路径，支持字距和连字，标题可转为 SVG 路径做描边动画 | install | TSV 已有 |

## 6. 演示框架与导出

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [hakimel/reveal.js](https://github.com/hakimel/reveal.js) | 72551 | MIT | 2026-09-30 | HTML 演示框架，自带嵌套幻灯片、Auto-Animate 跨页补间、PDF 导出、演讲者备注和 LaTeX | install | TSV 已有 |
| [slidevjs/slidev](https://github.com/slidevjs/slidev) | 49417 | MIT | 2026-11-05 | Markdown 写页、UnoCSS 做样式、可嵌 Vue 组件，主题可作为 npm 包共享，带演讲者模式 | install | TSV 已有 |
| [impress/impress.js](https://github.com/impress/impress.js) | 38151 | MIT | 2026-07-23 | 基于 CSS3 transform 的 Prezi 式演示，每页设置 data-x、data-y、data-rotate、data-scale 在大画布上飞行 | install | TSV 已有 |
| [vercel/satori](https://github.com/vercel/satori) | 14174 | MPL-2.0 | 2026-11-06 | 把 JSX 形式的 HTML 和 CSS 转成 SVG，可用来批量生成封面图、社交卡片和页面缩略图 | install | 新增 |
| [gnab/remark](https://github.com/gnab/remark) | 13003 | MIT | 2024-06-19 | 浏览器内 Markdown 幻灯片，带演讲者模式、克隆视图和等比缩放，模板语法简单 | install | TSV 已有 |
| [marp-team/marp](https://github.com/marp-team/marp) | 12738 | MIT | 2026-11-07 | Marp 生态入口，用纯 Markdown 写 deck，核心、CLI、VS Code 插件分仓维护 | install | TSV 已有 |
| [jxnblk/mdx-deck](https://github.com/jxnblk/mdx-deck) | 11495 | MIT | 2023-01-04 | MDX 写演示并导入 React 组件，主题和布局可定制，2023 年后不再活跃，借其 MDX 分页思路 | borrow idea | 新增 |
| [FormidableLabs/spectacle](https://github.com/FormidableLabs/spectacle) | 10190 | MIT | 2026-11-04 | React 写演示的库，Slide、Heading、Appear 等组件化编排，适合 React 团队维护 deck | install | TSV 已有 |
| [bubkoo/html-to-image](https://github.com/bubkoo/html-to-image) | 7277 | MIT | 2026-11-09 | 用 Canvas 和 SVG 把 DOM 节点导出成 PNG、JPEG、SVG，可做每页缩略图或分享图 | install | 新增 |
| [webslides/WebSlides](https://github.com/webslides/WebSlides) | 6327 | MIT | 2022-12-10 | 用 HTML 和 CSS class 拼出演示、落地页和长文，可参考其现成的 demo 版式和排版组件 | reference | 新增 |
| [quarto-dev/quarto-cli](https://github.com/quarto-dev/quarto-cli) | 6165 | MIT（COPYING.md 为 MIT，GitHub 未识别） | 2026-11-10 | 基于 Pandoc 的出版系统，同一份 Markdown 可输出 reveal.js 演示，支持代码执行结果嵌入和版面面板 | install | TSV 已有 |
| [shower/shower](https://github.com/shower/shower) | 4879 | MIT（LICENSE.md 为 MIT，GitHub 未识别） | 2026-11-09 | 原生 HTML/CSS/JS 演示引擎，主题与引擎分离，全键盘可访问并可打印成 PDF，有 Ribbon、Material 主题 | install | TSV 已有 |
| [bespokejs/bespoke](https://github.com/bespokejs/bespoke) | 4791 | MIT | 2020-09-08 | 1KB 的演示微框架，核心只管翻页和事件，其余都是插件，可借它的插件分层设计 deck 运行时 | borrow idea | 新增 |
| [marp-team/marp-cli](https://github.com/marp-team/marp-cli) | 3911 | MIT | 2026-09-08 | 把 Marp Markdown 转成 HTML、PDF、PPTX 和图片，npx 一行完成，适合 CI 批量导出 | install | TSV 已有 |
| [astefanutti/decktape](https://github.com/astefanutti/decktape) | 2439 | MIT | 2026-11-09 | HTML 演示框架的高质量 PDF 导出器，按框架插件逐页截取，HTML deck 交付 PDF 时使用 | install | 新增 |
| [marp-team/marpit](https://github.com/marp-team/marpit) | 1394 | MIT | 2026-11-01 | 极简 Markdown 转 deck 框架，输出最少的 HTML 和 CSS 主题，打印即 PDF，可借来做自定义渲染管线 | borrow idea | 新增 |
| [rajgoel/reveal.js-plugins](https://github.com/rajgoel/reveal.js-plugins) | 816 | MIT | 2025-06-23 | reveal.js 插件集合，含基于 SVG.js 的 Animate、Chalkboard 板书标注、Chart 图表等 | install | 新增 |
| [antfu/talks](https://github.com/antfu/talks) | 373 | AGPL-3.0 | 2026-07-14 | Anthony Fu 用 Slidev 做的全部演讲源码，可直接看真实技术演讲的版式、动效和代码页处理 | reference | 新增 |

## 7. PPT 生成与编辑

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [presenton/presenton](https://github.com/presenton/presenton) | 11837 | Apache-2.0 | 2026-11-06 | 自托管的 AI 演示生成器，内置模板可复制成自定义模板，导出可编辑 pptx 或 PDF，可借其模板编辑器和 API 设计 | borrow idea | 新增 |
| [pipipi-pikachu/PPTist](https://github.com/pipipi-pikachu/PPTist) | 9481 | AGPL-3.0 | 2026-11-06 | Vue 3 + TS 的网页版 PPT 编辑器，支持文本、图形、图表、表格、公式和多格式导出，可借其元素数据结构和编辑交互 | borrow idea | 新增 |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 6369 | MIT | 2025-11-28 | 在 Node 或浏览器里用 JS 生成 OOXML，slide.addText、addChart、addImage 和母版定义可产出 PowerPoint、Keynote 都能打开的原生 pptx | install | TSV 已有 |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | 5234 | MIT | 2026-11-09 | 研究型 deck 生成系统，含自由版式与模板两种生成、视觉复核和 pptx 导出，另附 Claude Code/Codex 用的 PPTAgent Skill | borrow idea | TSV 已有 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | 3585 | MIT | 2024-08-07 | Python 创建、读取和修改 pptx，适合从数据或 JSON 批量出页，也能分析已有 deck 的版式结构 | install | TSV 已有 |
| [johnson7788/MultiAgentPPT](https://github.com/johnson7788/MultiAgentPPT) | 1647 | MIT | 2026-10-14 | 大纲、拆题、调研、汇总多个 agent 并行并流式返回 PPT 内容，作者已注明旧版不再维护，只看流程设计 | reference | TSV 已有 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | 1235 | Apache-2.0 | 2026-05-08 | 先补内容基底、出风格预览、反复推风格再锁定生成，整页图像放进 pptx，可借其分阶段确认流程 | borrow idea | TSV 已有 |
| [addsumtech/slides_maker](https://github.com/addsumtech/slides_maker) | 664 | MIT | 2026-11-08 | 先确认大纲和设计再构建，生成可编辑 pptx 并保留生成脚本，便于后续改稿，可借其“脚本即源文件”的做法 | borrow idea | TSV 已有 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | 378 | MIT | 2026-10-26 | Streamlit 应用，用 LLM 规划大纲再用 python-pptx 套模板出 pptx，可参考其“大纲 JSON 到模板版位”的映射 | borrow idea | TSV 已有 |

## 8. WebGL、shader 与动态背景

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | 118023 | MIT | 2026-11-10 | 通用 3D 库，WebGL 与 WebGPU 渲染器，另有 SVG、CSS3D 渲染器插件，封面 3D 场景和产品模型展示用它 | install | TSV 已有 |
| [pixijs/pixijs](https://github.com/pixijs/pixijs) | 48662 | MIT | 2026-11-10 | WebGL/WebGPU 2D 渲染引擎，带滤镜、遮罩、混合模式和文字渲染，适合大量粒子或图片拼贴页 | install | TSV 已有 |
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | 33624 | MIT | 2026-10-21 | three.js 的 React 渲染器，场景写成可复用组件并响应状态，React deck 里嵌 3D 页面用它 | install | TSV 已有 |
| [VincentGarreau/particles.js](https://github.com/VincentGarreau/particles.js) | 30186 | MIT | 2024-03-28 | 轻量粒子背景，用 JSON 配置并可在 CodePen 生成器导出，可借其参数组织方式 | borrow idea | 新增 |
| [processing/p5.js](https://github.com/processing/p5.js) | 24329 | LGPL-2.1 | 2026-11-09 | 面向创意编程的 setup/draw 模型，适合在 deck 里嵌入生成艺术或交互示意 | install | TSV 已有 |
| [catdad/canvas-confetti](https://github.com/catdad/canvas-confetti) | 12852 | ISC | 2025-10-25 | 一个 confetti() 调用就能在 canvas 上撒彩纸，可设形状、颜色、发射角，适合结尾页或里程碑页 | install | 新增 |
| [pmndrs/drei](https://github.com/pmndrs/drei) | 10137 | MIT | 2026-10-21 | r3f 的现成组件集，相机、文字、环境光、轮廓等常用抽象直接导入，减少 3D 页面样板代码 | install | 新增 |
| [tsparticles/tsparticles](https://github.com/tsparticles/tsparticles) | 9080 | MIT | 2026-11-10 | TypeScript 粒子库，支持主流框架和 Web Components，预设丰富，可做连线粒子、雪花、彩带背景 | install | 新增 |
| [tengbao/vanta](https://github.com/tengbao/vanta) | 7356 | MIT | 2024-03-03 | 几行代码给任意元素加 three.js 或 p5.js 渲染的动态背景，颜色可调成品牌色，支持鼠标交互 | install | 新增 |
| [regl-project/regl](https://github.com/regl-project/regl) | 5595 | MIT | 2026-10-17 | 函数式 WebGL，把状态封装成 resource 和 command，可借来写可复用的绘制命令而不管理全局状态 | borrow idea | 新增 |
| [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch) | 5324 | MIT | 2026-06-02 | 生成艺术脚手架，统一画布尺寸、导出 PNG 和动画帧，可借其按打印尺寸和像素比出图的做法 | borrow idea | 新增 |
| [sarcadass/granim.js](https://github.com/sarcadass/granim.js) | 5297 | MIT | 2022-12-06 | 在 canvas 上做多状态渐变过渡，states 定义多组渐变并可切换，适合封面底色缓慢流动 | install | 新增 |
| [oframe/ogl](https://github.com/oframe/ogl) | 4754 | Unlicense（仓库无 LICENSE 文件，package.json 声明 Unlicense） | 2025-04-13 | 零依赖的极简 WebGL 库，API 近似 three.js 但更薄，适合只做一个全屏 shader 背景 | install | 新增 |
| [paper-design/shaders](https://github.com/paper-design/shaders) | 3947 | Apache-2.0 | 2026-11-10 | MeshGradient、DotOrbit 等现成 shader 组件，有 React 和原生包，参数可在 Paper 里可视化调好再搬进代码 | install | 新增 |
| [ruucm/shadergradient](https://github.com/ruucm/shadergradient) | 3121 | MIT（仓库无 LICENSE 文件，README License 节写明 MIT） | 2026-09-23 | 可定制的 3D 流动渐变 React 组件，另有 Figma 插件和 Framer 组件，适合封面和章节页背景 | install | 新增 |
| [pmndrs/postprocessing](https://github.com/pmndrs/postprocessing) | 2963 | Zlib | 2026-11-01 | three.js 后期处理库，用 pass 和 effect 叠加 bloom、景深、色差等全屏效果，提升 3D 封面质感 | install | 新增 |
| [hydra-synth/hydra](https://github.com/hydra-synth/hydra) | 2751 | AGPL-3.0 | 2026-04-25 | 仿模拟合成器的实时视觉 livecoding，链式函数叠加坐标和颜色变换，可借其组合方式快速试背景效果 | borrow idea | 新增 |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions) | 2240 | MIT（LICENSE 文件为 MIT，GitHub 未识别） | 2026-11-09 | 100+ 个两图之间的 GLSL 转场函数，统一规范并已翻译到 WGSL、Metal 等，可直接拿来做翻页转场 | install | 新增 |
| [martinlaxenaire/curtainsjs](https://github.com/martinlaxenaire/curtainsjs) | 1830 | MIT | 2025-04-03 | 把含图片和视频的 HTML 元素转成 WebGL 平面并跟随 DOM 定位，用 shader 做图片扭曲和切换 | install | 新增 |
| [crashmax-dev/fireworks-js](https://github.com/crashmax-dev/fireworks-js) | 1385 | MIT | 2024-07-16 | 零依赖烟花效果，提供 React、Vue、Svelte 等多个包装，适合年会或发布会结尾页 | install | 新增 |

## 9. 地球与地图

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [visgl/deck.gl](https://github.com/visgl/deck.gl) | 14745 | MIT | 2026-11-10 | GPU 大规模数据可视化，把 JSON 数据映射成图层叠在地图视图上，适合地理数据页 | install | 新增 |
| [shuding/cobe](https://github.com/shuding/cobe) | 6055 | MIT | 2026-09-22 | 约 5KB 的 WebGL 地球，可调 phi、theta、暗色和标记点，DOM 元素可绑定为标记，适合全球业务页 | install | 新增 |
| [vasturiano/globe.gl](https://github.com/vasturiano/globe.gl) | 3225 | MIT | 2026-08-22 | 地球上的数据图层 Web Component，弧线、热力、国家多边形都有示例，基于 three-globe | install | 新增 |
| [vasturiano/three-globe](https://github.com/vasturiano/three-globe) | 1658 | MIT | 2026-10-14 | three.js 地球可视化类，可放进已有 three 场景，弧线连接和路径线图层适合航线或流量页 | install | 新增 |

## 10. 版式、设计系统与配色

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | 127802 | MIT | 2026-11-10 | 组件源码直接复制进项目再改，适合把 deck 的卡片、表格、徽标等样式收敛成自己的组件库 | install | 新增 |
| [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | 98670 | MIT | 2026-11-10 | utility-first CSS，间距、字号、颜色都走同一套 token，HTML deck 每页版式可直接用 class 组合 | install | 新增 |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | 23187 | MIT | 2026-11-09 | 面向设计工程师的动效 UI 组件库，可按文档挑选组件源码改作 deck 的标题、背景和数字展示 | borrow idea | 新增 |
| [catppuccin/catppuccin](https://github.com/catppuccin/catppuccin) | 19930 | MIT | 2026-07-25 | 4 种口味、每种 26 色的柔和配色，已有大量 port，代码页与图表可共用一套色 | install | TSV 已有 |
| [radix-ui/primitives](https://github.com/radix-ui/primitives) | 19489 | MIT | 2026-10-14 | 无样式的可访问底层组件，可借来做 deck 里的弹层、标签页、手风琴等交互页而自己控制视觉 | borrow idea | 新增 |
| [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) | 14956 | MIT | 2024-09-02 | 3000+ 社区 UI 元素归档，按钮、加载器、卡片都是纯 HTML/CSS，可挑来做 deck 装饰 | reference | 新增 |
| [lokesh/color-thief](https://github.com/lokesh/color-thief) | 13666 | MIT | 2026-08-03 | 从图片提取主色和色板，并给出 isDark 与推荐文字色，可让封面配色跟随主图 | install | 新增 |
| [gka/chroma.js](https://github.com/gka/chroma.js) | 10601 | BSD-3-Clause（LICENSE 文件为 BSD 3-Clause 条款，GitHub 未识别） | 2026-10-24 | 颜色转换和色阶库，chroma.scale() 生成数据可视化用的渐变色阶，也可调亮度、混色 | install | TSV 已有 |
| [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) | 9612 | Apache-2.0 | 2026-11-10 | IBM 设计系统，含 React/Web Components、设计 token、图标和象形图，可参考其数据可视化和网格规范 | reference | 新增 |
| [radix-ui/themes](https://github.com/radix-ui/themes) | 8833 | MIT | 2026-04-11 | 可访问的组件主题库，借其 accent 色、灰阶、圆角、缩放这几个全局旋钮来定义 deck 主题 | borrow idea | 新增 |
| [nolly-studio/cult-ui](https://github.com/nolly-studio/cult-ui) | 7070 | MIT | 2026-10-29 | 150+ 动效组件，每个都是 shadcn registry 条目，CLI 把源码复制进项目，适合 React deck | install | 新增 |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | 6927 | MIT | 2026-09-28 | 基于 motion 和 Tailwind 的动效组件，项目仍处 beta，可借其文字效果和过渡组件的写法 | borrow idea | 新增 |
| [nordtheme/nord](https://github.com/nordtheme/nord) | 6911 | MIT | 2023-10-18 | 16 色北欧冷色调，分 Polar Night、Snow Storm、Frost、Aurora 四组，适合冷静克制的技术 deck | install | TSV 已有 |
| [tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) | 6487 | MIT | 2026-06-08 | prose class 给 Markdown 渲染出的 HTML 加整套排版默认值，长文字页、引用页的行高和段距不用逐个调 | install | 新增 |
| [davidmerfield/randomColor](https://github.com/davidmerfield/randomColor) | 6115 | CC0-1.0 | 2025-12-03 | 生成好看的随机色，可限定色相和明度，适合给多类别图表或标签批量配色 | install | 新增 |
| [argyleink/open-props](https://github.com/argyleink/open-props) | 5570 | MIT | 2026-10-11 | 开源 CSS 变量集，含颜色、渐变、阴影、字体、缓动和动画关键帧，引入后用 var(--ease-3) 这类 token | install | 新增 |
| [unovue/inspira-ui](https://github.com/unovue/inspira-ui) | 5088 | MIT | 2026-10-17 | 把 Aceternity UI 和 Magic UI 风格移植到 Vue/Nuxt 的组件集，Slidev 这类 Vue deck 可直接参考 | borrow idea | 新增 |
| [bansal/pattern.css](https://github.com/bansal/pattern.css) | 3925 | MIT（仓库无 LICENSE 文件，README License 节写明 MIT） | 2022-03-26 | 纯 CSS 背景纹样库，pattern-checks-sm、pattern-dots-md 这类 class 直接铺底纹 | install | 新增 |
| [meodai/color-names](https://github.com/meodai/color-names) | 3106 | MIT | 2026-11-08 | 3.2 万个颜色名的数据集，可给主题色起名或在风格说明里用具体色名代替 hex | reference | 新增 |
| [color-js/color.js](https://github.com/color-js/color.js) | 2319 | MIT | 2026-11-09 | CSS 颜色规范编辑参与开发的色彩库，色彩空间无关，适合做对比度计算和色域映射 | install | TSV 已有 |
| [material-foundation/material-color-utilities](https://github.com/material-foundation/material-color-utilities) | 2302 | Apache-2.0 | 2026-11-06 | Material 3 动态配色算法，可从一张品牌图或一个种子色推出整套语义色角色 | install | 新增 |
| [adobe/leonardo](https://github.com/adobe/leonardo) | 2165 | Apache-2.0 | 2026-07-08 | 以目标对比度为起点生成自适应色板，保证文字和背景满足 WCAG 对比度要求 | install | 新增 |
| [radix-ui/colors](https://github.com/radix-ui/colors) | 1735 | MIT | 2025-12-17 | 为可访问性设计的配色系统，每色 12 级并分明暗，可直接当 deck 的背景、边框、文字层级色阶 | install | 新增 |
| [seek-oss/capsize](https://github.com/seek-oss/capsize) | 1734 | MIT | 2026-10-15 | 用字体度量按大写字母高度定字号并裁掉基线上下的空白，标题与图形的对齐可精确到像素 | install | 新增 |
| [danburzo/culori](https://github.com/danburzo/culori) | 1254 | MIT | 2026-11-04 | 支持 CSS Color 4 全部色彩空间，做转换、插值、色差计算，可在 OKLCH 里生成均匀的主题色阶 | install | 新增 |
| [Experience-Monks/nice-color-palettes](https://github.com/Experience-Monks/nice-color-palettes) | 979 | MIT | 2024-10-01 | ColourLovers 热门色板的 JSON，每组 5 个 hex，可随机抽一组给草稿 deck 试配色 | install | 新增 |
| [chriskempson/base16](https://github.com/chriskempson/base16) | 975 | MIT | 2023-10-12 | 8 级灰阶加 8 个强调色的配色框架，可借其“16 色槽位”约束统一代码高亮和界面色 | borrow idea | TSV 已有 |
| [trys/utopia-core](https://github.com/trys/utopia-core) | 142 | ISC（仓库无 LICENSE 文件，package.json 声明 ISC） | 2024-09-19 | calculateTypeScale() 在两个视口宽度之间生成流体字阶和间距，并标出不满足 WCAG 1.4.4 的步长 | install | 新增 |

## 11. 字体与图标

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [lxgw/LxgwWenKai](https://github.com/lxgw/LxgwWenKai) | 26934 | OFL-1.1 | 2026-11-09 | 开源中文楷体，适合引言页、人文主题标题；README 提醒 OFL 禁止单独售卖字体文件 | install | 新增 |
| [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons) | 26194 | CC0-1.0 | 2026-11-08 | 3400+ 品牌 SVG 图标，适合客户和技术栈 logo 墙；使用前需读其商标免责声明 | install | TSV 已有 |
| [feathericons/feather](https://github.com/feathericons/feather) | 26038 | MIT | 2025-03-11 | 24x24 网格的极简线性图标，feather.icons[name].toSvg() 可在脚本里生成，适合轻量 deck | install | TSV 已有 |
| [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | 25680 | ISC（LICENSE 为 ISC，GitHub 未识别） | 2026-11-10 | 1600+ 线性 SVG 图标，提供多框架官方包，24px 网格风格统一，适合 deck 的要点图标 | install | TSV 已有 |
| [be5invis/Iosevka](https://github.com/be5invis/Iosevka) | 23230 | OFL-1.1 | 2026-11-09 | 等宽与准比例两种排布、可自定义构建的字体家族，适合终端截图和技术文档页 | install | 新增 |
| [tabler/tabler-icons](https://github.com/tabler/tabler-icons) | 22595 | MIT | 2026-11-10 | 6000+ 个 24x24 网格、2px 描边的 SVG 图标，有描边和填充两版，可按 stroke 宽度统一视觉 | install | TSV 已有 |
| [google/fonts](https://github.com/google/fonts) | 20748 | 按目录区分（ofl/ 为 OFL-1.1，apache/ 为 Apache-2.0，ufl/ 为 UFL），GitHub 未识别 | 2026-11-10 | Google Fonts 字体文件源仓库，按 ofl、apache、ufl 顶层目录区分许可，每个家族带 METADATA.pb 可查设计师和分类 | reference | TSV 已有 |
| [rsms/inter](https://github.com/rsms/inter) | 20053 | OFL-1.1 | 2024-11-19 | 为屏幕设计的可变字体，x 高较高，带等宽数字、斜杠零等 OpenType 特性，适合数据页的数字对齐 | install | TSV 已有 |
| [githubnext/monaspace](https://github.com/githubnext/monaspace) | 19814 | OFL-1.1 | 2026-03-27 | 五款度量兼容的等宽可变字体，可在同一段代码里混用不同字形区分注释和强调 | install | 新增 |
| [adobe-fonts/source-han-sans](https://github.com/adobe-fonts/source-han-sans) | 17456 | OFL-1.1（LICENSE.txt 为 SIL Open Font License 1.1，GitHub 未识别） | 2025-06-25 | 泛 CJK 思源黑体，提供 OTF、Super OTC、Subset OTF 和可变 WOFF2，中文 deck 正文的基础字 | install | TSV 已有 |
| [atelier-anchor/smiley-sans](https://github.com/atelier-anchor/smiley-sans) | 14963 | OFL-1.1 | 2024-12-10 | 得意黑，字身窄而斜、带手绘美术字细节的中文黑体，提供 woff2，适合中文大标题 | install | 新增 |
| [JetBrains/JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) | 13163 | OFL-1.1 | 2025-01-31 | 为开发者设计的等宽字体，带连字并可关闭，代码页字体首选之一 | install | TSV 已有 |
| [IBM/plex](https://github.com/IBM/plex) | 11764 | OFL-1.1 | 2026-11-04 | IBM 企业字体家族，含 Sans、Serif、Mono 和多语种版本，适合需要稳重科技感的正文和数据页 | install | TSV 已有 |
| [twbs/icons](https://github.com/twbs/icons) | 8173 | MIT | 2026-11-01 | Bootstrap 官方 2000+ SVG 图标，包内带 SVG sprite、图标字体和 CSS | install | TSV 已有 |
| [pheralb/svgl](https://github.com/pheralb/svgl) | 6415 | MIT | 2026-10-28 | 品牌 logo 的 SVG 库并提供 API，可按名获取 logo 用于合作伙伴页（logo 商标归各品牌） | install | 新增 |
| [iconify/iconify](https://github.com/iconify/iconify) | 6390 | MIT | 2026-11-10 | 统一的图标框架，收录 200+ 图标集、25 万+ 图标，用 Web Component 按名嵌入，跨图标集混用 | install | TSV 已有 |
| [fontsource/fontsource](https://github.com/fontsource/fontsource) | 6274 | MIT | 2026-11-09 | 每款开源字体一个 npm 包，可自托管字体文件，离线 deck 不依赖 Google Fonts CDN | install | 新增 |
| [fonttools/fonttools](https://github.com/fonttools/fonttools) | 5315 | MIT | 2026-11-05 | Python 字体处理库，含 TTX 和 subset 工具，可把中文字体裁剪到 deck 实际用到的字以减小体积 | install | TSV 已有 |
| [iconoir-icons/iconoir](https://github.com/iconoir-icons/iconoir) | 4631 | MIT | 2026-11-04 | 1383 个 24px 网格 SVG 图标，其中 288 个有实心版，风格偏细线条 | install | 新增 |
| [notofonts/noto-cjk](https://github.com/notofonts/noto-cjk) | 4147 | OFL-1.1（根目录无 LICENSE，Sans/LICENSE 为 SIL OFL 1.1） | 2025-12-16 | Noto Sans/Serif CJK 源仓库，可按语言下载单独字重，与思源同源，适合中日韩混排 | install | TSV 已有 |
| [vercel/geist-font](https://github.com/vercel/geist-font) | 3750 | OFL-1.1 | 2026-11-06 | Geist Sans、Mono、Pixel、Serif 一个家族四种风格，可在同一 deck 里统一标题、代码和像素风装饰字 | install | TSV 已有 |
| [phosphor-icons/core](https://github.com/phosphor-icons/core) | 399 | MIT | 2026-01-06 | Phosphor 图标原始 SVG 和目录数据（标签、分类），可按标签检索，多种字重风格可选 | install | TSV 已有 |

## 12. 视频式动效

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [3b1b/manim](https://github.com/3b1b/manim) | 96309 | MIT | 2026-09-09 | 3Blue1Brown 原版的程序化精确动画引擎，适合借其“公式与图形逐步变换”的讲解手法 | borrow idea | TSV 已有 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 82002 | Apache-2.0 | 2026-11-10 | 把 HTML、CSS 和可 seek 的动画确定性渲染成 MP4，HTML deck 可以直接导出视频版 | install | TSV 已有 |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim) | 42386 | MIT | 2026-11-09 | Manim 社区版，更稳定、文档和测试更全，用 Python 生成数学讲解动画片段放进 deck | install | TSV 已有 |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | 19758 | MIT | 2026-07-02 | 用 TypeScript generator 编排矢量动画并有实时预览编辑器，可按配音时间轴对齐讲解动画，再导出视频嵌入 deck | install | TSV 已有 |
| [midrender/revideo](https://github.com/midrender/revideo) | 4199 | MIT | 2026-07-15 | 用 TypeScript 描述场景并渲染成视频，带无头渲染 API 和浏览器内 React 播放器，可批量生成 deck 动画片段 | install | 新增 |

## 13. 美学合集与案例

| 仓库 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---:|---|---|---|---|---|
| [goabstract/Awesome-Design-Tools](https://github.com/goabstract/Awesome-Design-Tools) | 41826 | MIT | 2024-07-28 | 设计工具大全，附插件、UI Kit、设计会议子清单，选原型、配色、动效工具时用 | reference | 新增 |
| [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems) | 26331 | Unlicense | 2026-10-06 | 设计系统清单，并用 Components、Voice & Tone 等标签标注每个系统包含的内容，可挑来参考 token 与组件规范 | reference | 新增 |
| [gztchan/awesome-design](https://github.com/gztchan/awesome-design) | 17756 | CC0-1.0（README 末尾声明 CC0，无 LICENSE 文件） | 2024-07-04 | UI/UX 设计资源清单，含配色、字体、图标、免费图库等分类，找素材时按分类查 | reference | 新增 |
| [terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) | 15574 | CC0-1.0（README 末尾声明 CC0，无 LICENSE 文件） | 2026-07-21 | 创意编程资源清单，覆盖交互设计、信息可视化和生成艺术，找 deck 背景和动效灵感用 | reference | 新增 |
| [hal9ai/awesome-dataviz](https://github.com/hal9ai/awesome-dataviz) | 4454 | CC-BY-4.0（LICENSE 为 CC BY 4.0，GitHub 未识别） | 2026-11-09 | 开源数据可视化库清单，按语言分类，选图表库时用来比较 | reference | 新增 |
| [sjfricke/awesome-webgl](https://github.com/sjfricke/awesome-webgl) | 1546 | CC0-1.0 | 2026-10-26 | WebGL 库、教程和资源清单，选 3D 或 shader 方案时用来横向比较 | reference | 新增 |
| [vanrez-nez/awesome-glsl](https://github.com/vanrez-nez/awesome-glsl) | 1378 | MIT | 2023-08-21 | GLSL 学习清单，按教程、站点、编辑器、文章、书、工具、人物分类，写背景 shader 时查资料 | reference | 新增 |
| [codrops/ParticleEffectsButtons](https://github.com/codrops/ParticleEffectsButtons) | 1264 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2024-08-05 | 基于 anime.js 让按钮或元素粒子化消散再聚合，可借来做页面元素“碎裂退场” | borrow idea | TSV 已有 |
| [codrops/StackMotionHoverEffects](https://github.com/codrops/StackMotionHoverEffects) | 501 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2017-03-15 | 悬停时在条目后面露出多张彩色卡片堆叠，可借来做目录卡片的交互 | borrow idea | TSV 已有 |
| [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) | 351 | MIT | 2023-12-05 | 一组随滚动触发的排版动画示例，大字标题逐字或逐行变化，适合滚动式 deck 的标题页 | borrow idea | TSV 已有 |
| [codrops/AnimatedFrameSlideshow](https://github.com/codrops/AnimatedFrameSlideshow) | 283 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2017-11-15 | 切换幻灯片时出现动画 SVG 边框的实验性轮播，可借其转场框架做章节切换 | borrow idea | TSV 已有 |
| [codrops/ScrollingLettersAnimation](https://github.com/codrops/ScrollingLettersAnimation) | 229 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2018-02-12 | 固定标题随滚动位置切换文字的效果，可借来做长滚动 deck 的章节标题 | borrow idea | TSV 已有 |
| [codrops/FullImageReveal](https://github.com/codrops/FullImageReveal) | 165 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2018-06-12 | 全屏大图揭示效果加缩略图滑动，适合图片作品集页的进场方式 | borrow idea | TSV 已有 |
| [codrops/ScrollAnimationsGrid](https://github.com/codrops/ScrollAnimationsGrid) | 119 | MIT | 2026-11-09 | 网格图片的多种滚动特效，用 GSAP ScrollTrigger、Lenis 实现，部分变体用 three.js | borrow idea | TSV 已有 |
| [codrops/AnimatedImageColumns](https://github.com/codrops/AnimatedImageColumns) | 118 | Codrops 自有条款（README License 节：可集成进个人或商业项目，禁止原样转售、再发布） | 2019-05-16 | 点击菜单时图片列分别位移的实验版式，可借其多列错峰动画做封面 | borrow idea | TSV 已有 |

## 14. Claude / Agent Skills

本节每行是一个具名 skill，路径已用 gh api 列目录核实存在 SKILL.md。同一仓库的多个 skill 共用该仓库的 star；本节仓库不在其它节重复出现。

| 仓库 | Skill 路径 | Skill 名 | Stars | License | 最后 push | 给 deck 借什么 | Tier | TSV |
|---|---|---|---:|---|---|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/algorithmic-art` | algorithmic-art | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 用 p5.js 加种子随机做生成艺术，输出可调参数的交互 HTML，适合 deck 的生成式背景 | install | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/brand-guidelines` | brand-guidelines | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 把品牌色和字体写成 skill 供产物套用，可照这个结构写自己的品牌规范 skill | borrow idea | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/canvas-design` | canvas-design | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 先写一份“设计哲学”再在画布上表达成 PNG/PDF，适合做 deck 的海报式封面和章节插画 | install | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/frontend-design` | frontend-design | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 要求先定一个不落俗套的视觉方向，再对配色、字体、版式做有主见的选择，用来避免模板化的 AI 页面 | install | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/pptx` | pptx | 191761 | Apache-2.0（仓库根无 LICENSE；该 skill 目录 LICENSE.txt 为 Apache 2.0） | 2026-11-06 | 新建 deck 走 pptxgenjs 脚本，改模板走解压改 slideN.xml 再打包，读取用 markitdown，附缩略图网格做视觉检查 | install | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/slack-gif-creator` | slack-gif-creator | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 给出 GIF 尺寸、帧率、色数、时长的约束和校验工具，可借来把 deck 动效导出成小体积 GIF | borrow idea | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/theme-factory` | theme-factory | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | 10 套预置配色加字体搭配主题，可套到 slides、文档、落地页，也能现场生成新主题 | install | TSV 已有 |
| [anthropics/skills](https://github.com/anthropics/skills) | `skills/web-artifacts-builder` | web-artifacts-builder | 191761 | Apache-2.0（skill 目录 LICENSE.txt） | 2026-11-06 | React+Tailwind+shadcn/ui 开发后打包成单个 HTML 文件，适合需要状态和组件的交互式 deck | install | TSV 已有 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `.claude/skills/design-system` | design-system | 147589 | MIT | 2026-11-10 | primitive、semantic、component 三层 token 架构和字号间距尺度，可借来给 deck 主题建 token | borrow idea | 新增 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `.claude/skills/slides` | slides | 147589 | MIT | 2026-11-10 | 用 Chart.js、设计 token 和版式模式生成策略型 HTML 演示，含文案公式和按场景的页面策略 | install | 新增 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `.claude/skills/ui-ux-pro-max` | ui-ux-pro-max | 147589 | MIT | 2026-11-10 | 本地可检索的风格、配色、字体搭配、GSAP 预设和图表类型数据，做 deck 视觉决策时按关键词查 | install | 新增 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | `skills/ppt-master` | ppt-master | 75506 | MIT | 2026-11-09 | 路由式工作流：生成可编辑 pptx、重建页面视觉、维护 Brand/Style/Layout 工作区、填充原生模板 | install | TSV 已有 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | `SKILL.md（仓库根）` | frontend-slides | 32159 | MIT | 2026-06-23 | 零依赖单文件 HTML deck，先生成多个视觉预览让用户挑风格，附 STYLE_PRESETS.md 和 animation-patterns.md | install | TSV 已有 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | `SKILL.md（仓库根）` | guizang-ppt-skill | 29581 | AGPL-3.0 | 2026-10-30 | 单 HTML 横向翻页 deck，两种风格：电子杂志（衬线、WebGL 流体背景）和瑞士国际主义（网格点阵、IKB 等高亮色） | install | TSV 已有 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-core` | gsap-core | 18216 | MIT | 2026-07-29 | 官方 GSAP 核心 API skill：to/from/fromTo、缓动、stagger、matchMedia 处理减少动态偏好 | install | 新增 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-performance` | gsap-performance | 18216 | MIT | 2026-07-29 | 优先动 transform 和 opacity、避免布局抖动、合理用 will-change，保证 deck 动效 60fps | install | 新增 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-plugins` | gsap-plugins | 18216 | MIT | 2026-07-29 | Flip、SplitText、DrawSVG、MorphSVG、MotionPath、CustomEase 等插件的注册和用法 | install | 新增 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-scrolltrigger` | gsap-scrolltrigger | 18216 | MIT | 2026-07-29 | ScrollTrigger 的 pin、scrub、触发点写法，做滚动驱动的 deck 和视差 | install | 新增 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-timeline` | gsap-timeline | 18216 | MIT | 2026-07-29 | timeline 的位置参数、嵌套和播放控制，适合编排一页里多个元素的先后入场 | install | 新增 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | `skills/gsap-utils` | gsap-utils | 18216 | MIT | 2026-07-29 | gsap.utils 的 clamp、mapRange、snap、wrap 等工具，做滚动映射和网格吸附 | install | 新增 |
| [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | `skills/dashi-ppt` | dashi-ppt | 10558 | AGPL-3.0 | 2026-11-06 | 先把需求整理成 JSON 计划，再调本地生成器输出可离线打开、浏览器内可编辑的 HTML deck，并导出 PPTX/PDF | install | TSV 已有 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | `SKILL.md（仓库根）` | html-ppt | 9043 | MIT | 2026-09-14 | 一个主题文件一种外观、一个版式文件一种页型、一个 class 一种入场动画，所有页共享 base.css 的 token | install | TSV 已有 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | `skills/codex-ppt` | codex-ppt | 7782 | MIT | 2026-10-13 | 每页生成一张完整 16:9 图像再用 assemble_ppt.py 组装成 pptx，适合不要求逐元素可编辑的视觉稿 | borrow idea | TSV 已有 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | `SKILL.md（仓库根）` | gorden-ppt-skill | 4051 | MIT（LICENSE 文件为 MIT，GitHub 未识别） | 2026-06-22 | 21 套中文模板只替换文字不破坏排版，带文本框溢出检测和同级标题字号一致校验；SKILL.md 要求首次使用先执行远程自动更新命令，安装前需审查 | borrow idea | TSV 已有 |
| [crazyykhllc-bit/CyberPPT](https://github.com/crazyykhllc-bit/CyberPPT) | `SKILL.md（仓库根）` | cyber-ppt | 1883 | MIT | 2026-07-20 | 把材料转成咨询式可编辑 pptx，强制分阶段确认故事线和每页信息密度，以渲染结果而非文件生成判定完成 | borrow idea | TSV 已有 |
| [carnot-tech/jinba-consulting-pptx-skill](https://github.com/carnot-tech/jinba-consulting-pptx-skill) | `SKILL.md（仓库根）` | consulting-pptx-skill | 1591 | MIT | 2026-11-08 | 以 slide-rules.md 为规约，按工序用 rules.py 分段读取，20 种经验证部件组页，check_deck 与 check_layout 机检零失败才交付 | borrow idea | TSV 已有 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | `SKILL.md（仓库根）` | academic-pptx | 1493 | MIT | 2026-07-14 | 学术报告的论证结构和设计标准，要求与 pptx skill 配合使用，附 slide_patterns.md 页型 | borrow idea | TSV 已有 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | `SKILL.md（仓库根）` | gpt-image2-ppt | 1438 | Apache-2.0 | 2026-08-22 | 按 styles 目录里的风格文件逐页调用 gpt-image-2 出图并打包 16:9 pptx，风格表可借来写视觉提示词 | borrow idea | TSV 已有 |
| [archlizheng/frontend-slides-editable](https://github.com/archlizheng/frontend-slides-editable) | `SKILL.md（仓库根）` | frontend-slides-editable | 551 | MIT | 2026-07-01 | 在 frontend-slides 基础上加内置编辑器：拖动对象、对齐吸附、页面缩略图排序、撤销重做、Ctrl+S 保存 | install | TSV 已有 |
| [sunchaokun/PPT-Design-Skill](https://github.com/sunchaokun/PPT-Design-Skill) | `skill` | ppt-design-skill | 497 | MIT | 2026-09-16 | 从需求简报到渲染 PNG 的设计导演流程，用 pptx-designer 库出可编辑 pptx 并按渲染图复核 | install | TSV 已有 |
| [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) | `skills/revealjs` | revealjs | 421 | MIT | 2026-05-02 | 生成 reveal.js 的 HTML 加独立 CSS，CDN 加载无需构建，先按内容选设计元素再写多栏版式 | install | TSV 已有 |
| [minorun365/minorun-marp-skill](https://github.com/minorun365/minorun-marp-skill) | `skills/slide-design-dark` | slide-design-dark | 418 | Apache-2.0 | 2026-10-27 | 黑底 Marp 主题的留白、纵向平衡和配色规则，正文 26pt、h1 36pt 等字号下限，带导出后检查脚本 | borrow idea | TSV 已有 |
| [minorun365/minorun-marp-skill](https://github.com/minorun365/minorun-marp-skill) | `skills/slide-figures` | slide-figures | 418 | Apache-2.0 | 2026-10-27 | 规定图和文字二选一做主角，机制图拆成 3 到 5 页逐步加元素，SVG 文字有最小字号 | borrow idea | TSV 已有 |
| [minorun365/minorun-marp-skill](https://github.com/minorun365/minorun-marp-skill) | `skills/slide-story` | slide-story | 418 | Apache-2.0 | 2026-10-27 | 登壇 deck 的故事结构：开场钩子、中扉、逐步揭示、标题文体和收尾，按时长估页数 | borrow idea | TSV 已有 |
| [Noi1r/beamer-skill](https://github.com/Noi1r/beamer-skill) | `beamer` | beamer | 373 | MIT | 2026-08-12 | Beamer LaTeX 学术 deck 的创建、编译、审阅、打磨全流程，默认 10pt 和 16:9 比例 | install | TSV 已有 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | `SKILL.md（仓库根）` | mck-ppt-design | 337 | Apache-2.0 | 2026-11-03 | 用 python-pptx 封装的 MckEngine 以 eng.cover()、eng.donut() 等调用出咨询风 pptx，列出常见失败模式 | install | TSV 已有 |
| [EveryInc/hands-on-deck](https://github.com/EveryInc/hands-on-deck) | `skills/hands-on-deck` | hands-on-deck | 224 | MIT | 2026-08-04 | 用 deck.py 执行 JSON patch 修改 pptx，按稳定形状 id 寻址并自动 lint，不用直接改 XML | install | TSV 已有 |
| [kgraph57/mckinsey-style-visualization-skill](https://github.com/kgraph57/mckinsey-style-visualization-skill) | `SKILL.md（仓库根）` | strategy-consulting-visualization | 173 | MIT | 2026-10-18 | 结论先行的标题、克制的版式和明确的含义陈述，也覆盖“安静动画”和带情景滑块的交互 deck | borrow idea | TSV 已有 |
| [jinwyp/open-ppt-skill](https://github.com/jinwyp/open-ppt-skill) | `skills/open-kimi-ppt` | open-kimi-ppt | 173 | MIT | 2026-08-07 | 用 YAML 的 .pptd 中间格式描述每页，同时产出 PPTD 项目和嵌入字体、带淡入转场的 pptx | install | TSV 已有 |
| [daniel-style/magic-slide](https://github.com/daniel-style/magic-slide) | `SKILL.md（仓库根）` | magic-slide | 172 | MIT | 2026-08-30 | 单文件 HTML deck 的 Magic Move 转场：相邻页共有的标题、数字、图片自动补间，先按此约束规划大纲 | install | TSV 已有 |
| [joeseesun/qiaomu-bento-ppt](https://github.com/joeseesun/qiaomu-bento-ppt) | `SKILL.md（仓库根）` | qiaomu-bento-ppt | 126 | MIT | 2026-07-27 | 生成单文件 .bento.html 便当格 deck，可离线编辑，编辑已有 deck 时只改 #bento-doc 并保留 docId | borrow idea | TSV 已有 |
| [gongnyang/awesome-html-scrolline-deck](https://github.com/gongnyang/awesome-html-scrolline-deck) | `SKILL.md（仓库根）` | scrolline-deck | 105 | MIT | 2026-10-08 | 一个舞台加一条连续 timeline 的滚动式 deck，内容写成 beat、动作写成 move，按 6 种概念套运动语法，可导出 MP4 | borrow idea | TSV 已有 |

## 15. 已剔除 / 受限

以下条目不计入正文总数。archived、无 LICENSE 文件、或带商业付费、非商业、私有条款的仓库放在这里，只作了解。

| 仓库 | Stars | License（gh api） | archived | 最后 push | 类别 | 原因 | TSV |
|---|---:|---|---|---|---|---|---|
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 79180 | null | 否 | 2026-09-18 | 无许可 | 根目录无 LICENSE 文件（README 只有 Apache-2.0 徽章），且多数 skill 复制自 anthropics/skills | 新增 |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 72147 | NOASSERTION | 否 | 2026-11-10 | 许可受限 | Remotion License：个人和小公司免费，一定规模以上的营利组织需购买公司许可 | TSV 已有 |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 51623 | NOASSERTION | 否 | 2026-11-10 | 许可受限 | MIT + Commons Clause，只能作为应用的一部分使用，禁止转售组件本身 | 新增 |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | 51443 | NOASSERTION | 否 | 2026-11-10 | 许可受限 | tldraw 自有许可，生产环境需另购许可证 | TSV 已有 |
| [IanLunn/Hover](https://github.com/IanLunn/Hover) | 29408 | NOASSERTION | 否 | 2023-10-28 | 许可受限 | license.txt 写明 MIT 仅用于个人/开源，商业使用需购买商业许可 | TSV 已有 |
| [jlmakes/scrollreveal](https://github.com/jlmakes/scrollreveal) | 22466 | null | 否 | 2024-04-05 | 许可受限 | README 写明 GPLv3 之外，商业闭源项目需购买商业许可 | 新增 |
| [mattboldt/typed.js](https://github.com/mattboldt/typed.js) | 16273 | NOASSERTION | 否 | 2026-01-25 | 许可受限 | LICENSE 为 GPL-3.0，README 表格写明仅个人/开源免费，商业项目需购买许可 | 新增 |
| [Chalarangelo/30-seconds-of-css](https://github.com/Chalarangelo/30-seconds-of-css) | 15963 | CC-BY-4.0 | 是 | 2023-05-07 | 已归档 | 仓库已 archived | TSV 已有 |
| [apexcharts/apexcharts.js](https://github.com/apexcharts/apexcharts.js) | 15186 | NOASSERTION | 否 | 2026-11-08 | 许可受限 | LICENSE.md 为双许可，商业产品按规模需购买许可 | 新增 |
| [highcharts/highcharts](https://github.com/highcharts/highcharts) | 12500 | NOASSERTION | 否 | 2026-11-10 | 许可受限 | license.txt 指向 Highsoft 商店，商业使用需购买许可 | TSV 已有 |
| [qrohlf/trianglify](https://github.com/qrohlf/trianglify) | 10087 | GPL-3.0 | 否 | 2025-05-12 | 许可受限 | README 写明 GPLv3，闭源项目需购买商业许可（生成的图片版权归使用者） | 新增 |
| [patriciogonzalezvivo/thebookofshaders](https://github.com/patriciogonzalezvivo/thebookofshaders) | 7069 | NOASSERTION | 否 | 2026-02-28 | 许可受限 | LICENSE 写明保留所有权利，禁止在任何产品或项目中使用 | 新增 |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | 6768 | null | 否 | 2026-11-09 | 无许可 | 仓库无 LICENSE 文件，且依附 Remotion 的公司许可条款 | 新增 |
| [imskyleen/animate-ui](https://github.com/imskyleen/animate-ui) | 4954 | NOASSERTION | 否 | 2026-11-09 | 许可受限 | MIT + Commons Clause，只能作为应用的一部分使用，禁止转售组件本身 | 新增 |
| [webpro/reveal-md](https://github.com/webpro/reveal-md) | 3909 | MIT | 是 | 2026-02-14 | 已归档 | 仓库已 archived（TSV 已标注） | TSV 已有 |
| [patriciogonzalezvivo/lygia](https://github.com/patriciogonzalezvivo/lygia) | 3483 | NOASSERTION | 否 | 2026-10-24 | 许可受限 | Prosperity Public License 3.0，仅非商业免费，商业只能试用 30 天 | 新增 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | 3350 | null | 否 | 2026-01-19 | 无许可 | 根目录无 LICENSE 文件（README 只有 MIT 徽章），依赖外部图像与视频 API | TSV 已有 |
| [alexmacarthur/typeit](https://github.com/alexmacarthur/typeit) | 3181 | GPL-3.0 | 否 | 2025-04-04 | 许可受限 | README 写明开源和个人项目免费（GPLv3），商业项目须付费许可 | 新增 |
| [motiondivision/motionone](https://github.com/motiondivision/motionone) | 2859 | MIT | 是 | 2024-11-12 | 已归档 | 仓库已 archived，功能已并入 motiondivision/motion | TSV 已有 |
| [brabadu/awesome-fonts](https://github.com/brabadu/awesome-fonts) | 2102 | null | 否 | 2026-10-31 | 无许可 | 仓库无 LICENSE 文件，只能当链接清单看，不计入 | 新增 |
| [GongRzhe/Office-PowerPoint-MCP-Server](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server) | 1862 | MIT | 是 | 2025-12-31 | 已归档 | 仓库已 archived | TSV 已有 |
| [deckgo/deckdeckgo](https://github.com/deckgo/deckdeckgo) | 1674 | null | 是 | 2024-02-06 | 已归档 | 仓库已 archived，且无 license | TSV 已有 |
| [shikijs/shiki-magic-move](https://github.com/shikijs/shiki-magic-move) | 1509 | MIT | 是 | 2026-06-03 | 已归档 | 仓库已 archived，代码形变动画思路可参考 Slidev 内置的 magic-move | 新增 |
| [tfriedel/claude-office-skills](https://github.com/tfriedel/claude-office-skills) | 849 | null | 否 | 2026-04-01 | 无许可 | 仓库无任何 LICENSE 文件 | TSV 已有 |
