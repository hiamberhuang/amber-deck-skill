# GitHub 选型索引

2026-11-10 通过 GitHub API 核对 204 个公开、非 fork 且至少 100 星的仓库。星数是发现信号，不是效果评分；其中有 Agent Skill、框架、素材工具和 QA 工具，分类仅用于选型。仓库级许可并不覆盖所有目录或模板。

## 优先读这批

| 任务 | 项目 | GitHub ★ | 怎么用 |
|---|---|---:|---|
| 生成可编辑 PPTX | [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 75,479 | 有原生对象和动效路线；生成后实际验证选中编辑与播放 |
| 原模板修订 | [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | 4,049 | 母版与非破坏编辑路线值得研究；上游示例有个人/研究用途限制 |
| 官方 PPTX 能力 | [anthropics/skills](https://github.com/anthropics/skills) | 191,722 | 查官方 PPTX 工作流；星数是整个仓库，阅读独立 Skill 许可 |
| 做网页演示 | [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 32,158 | 适合交互式 HTML 方向，先定是否需要另交 PPTX |
| 编辑风格探索 | [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 29,579 | 看杂志和瑞士网格方向，按主题筛，不默认开启 WebGL |
| 网页演示引擎 | [hakimel/reveal.js](https://github.com/hakimel/reveal.js) | 72,550 | 成熟的演示导航、层级、打印等能力 |
| 代码化幻灯片 | [slidevjs/slidev](https://github.com/slidevjs/slidev) | 49,416 | 适合技术发布和用代码管理的演示 |
| 复杂运动 | [greensock/GSAP](https://github.com/greensock/GSAP) | 30,399 | 用时间线对齐多对象节奏，核对所用版本条款 |
| 网页局部运动 | [motiondivision/motion](https://github.com/motiondivision/motion) | 35,046 | 处理布局连续性与轻量交互，先定静态终态 |
| 原生演示生成 | [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 6,369 | 按需构建可编辑文本、图表和表格 |
| 证据图表 | [vega/vega-lite](https://github.com/vega/vega-lite) | 5,549 | 用于可复核的数据图；PPTX 仍按编辑性要求实现 |
| 逐页渲染测试 | [microsoft/playwright](https://github.com/microsoft/playwright) | 99,734 | 检查深链、边界、离线和页面错误 |
| 像素差异 | [mapbox/pixelmatch](https://github.com/mapbox/pixelmatch) | 7,021 | 定位重建差异；像素差不能替代主观视觉评估 |

## 全表

[下载 TSV](github-index.tsv) · 候选发现参考 [Awesome Codex PPT Skills](https://github.com/zhuyansen/awesome-codex-ppt-skills)；星数与仓库状态取自各仓库。

### AI deck skill / related（67）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 191,722 | 未识别 | 可访问 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 75,479 | MIT | 可访问 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 32,158 | MIT | 可访问 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 29,579 | AGPL-3.0 | 可访问 |
| [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | 10,555 | AGPL-3.0 | 可访问 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | 9,040 | MIT | 可访问 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | 7,781 | MIT | 可访问 |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | 5,233 | MIT | 可访问 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | 4,049 | NOASSERTION | 可访问 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | 3,350 | 未识别 | 可访问 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | 3,300 | MIT | 可访问 |
| [GordenSun/GordenSuperPPTSkills](https://github.com/GordenSun/GordenSuperPPTSkills) | 2,240 | 未识别 | 可访问 |
| [crazyykhllc-bit/CyberPPT](https://github.com/crazyykhllc-bit/CyberPPT) | 1,883 | MIT | 可访问 |
| [GongRzhe/Office-PowerPoint-MCP-Server](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server) | 1,862 | MIT | 已归档 |
| [johnson7788/MultiAgentPPT](https://github.com/johnson7788/MultiAgentPPT) | 1,647 | MIT | 可访问 |
| [carnot-tech/jinba-consulting-pptx-skill](https://github.com/carnot-tech/jinba-consulting-pptx-skill) | 1,590 | MIT | 可访问 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | 1,493 | MIT | 可访问 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | 1,438 | Apache-2.0 | 可访问 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | 1,235 | Apache-2.0 | 可访问 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | 920 | NOASSERTION | 可访问 |
| [tfriedel/claude-office-skills](https://github.com/tfriedel/claude-office-skills) | 849 | 未识别 | 可访问 |
| [addsumtech/slides_maker](https://github.com/addsumtech/slides_maker) | 664 | MIT | 可访问 |
| [mucsbr/ppt-agent-workflow-san](https://github.com/mucsbr/ppt-agent-workflow-san) | 651 | 未识别 | 可访问 |
| [Pikapika260214/rw-consulting-ppt](https://github.com/Pikapika260214/rw-consulting-ppt) | 551 | MIT | 可访问 |
| [archlizheng/frontend-slides-editable](https://github.com/archlizheng/frontend-slides-editable) | 551 | MIT | 可访问 |
| [sunchaokun/PPT-Design-Skill](https://github.com/sunchaokun/PPT-Design-Skill) | 496 | MIT | 可访问 |
| [AI272/speaker](https://github.com/AI272/speaker) | 478 | 未识别 | 可访问 |
| [zhouwei713/luobo-ppt](https://github.com/zhouwei713/luobo-ppt) | 457 | MIT | 可访问 |
| [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) | 421 | MIT | 可访问 |
| [minorun365/minorun-marp-skill](https://github.com/minorun365/minorun-marp-skill) | 418 | Apache-2.0 | 可访问 |
| [irenerachel/visual-style-ppt-skill](https://github.com/irenerachel/visual-style-ppt-skill) | 398 | 未识别 | 可访问 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | 378 | MIT | 可访问 |
| [Noi1r/beamer-skill](https://github.com/Noi1r/beamer-skill) | 373 | MIT | 可访问 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | 337 | Apache-2.0 | 可访问 |
| [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides) | 334 | 未识别 | 可访问 |
| [Faust-Donf/beamer-academic](https://github.com/Faust-Donf/beamer-academic) | 332 | MIT | 可访问 |
| [M1n-n9/academic-ppt-master](https://github.com/M1n-n9/academic-ppt-master) | 304 | MIT | 可访问 |
| [zouchenzhen/thesis-defense-pptx-skill](https://github.com/zouchenzhen/thesis-defense-pptx-skill) | 280 | Apache-2.0 | 可访问 |
| [vigorX777/ppt-svg-generator](https://github.com/vigorX777/ppt-svg-generator) | 262 | MIT | 可访问 |
| [thePlannerIvan/planners-ppt-hell](https://github.com/thePlannerIvan/planners-ppt-hell) | 246 | AGPL-3.0 | 可访问 |
| [borjaperfra/beatdeck](https://github.com/borjaperfra/beatdeck) | 240 | NOASSERTION | 可访问 |
| [EveryInc/hands-on-deck](https://github.com/EveryInc/hands-on-deck) | 224 | MIT | 可访问 |
| [Ronnie2025/codex-ppt-skill](https://github.com/Ronnie2025/codex-ppt-skill) | 223 | MIT | 可访问 |
| [helloo1568/slidemuse](https://github.com/helloo1568/slidemuse) | 209 | MIT | 可访问 |
| [wwe-dog/ppt-image2-editable-rebuild](https://github.com/wwe-dog/ppt-image2-editable-rebuild) | 206 | Unlicense | 可访问 |
| [w1163222589-coder/slide-image-to-editable-pptx](https://github.com/w1163222589-coder/slide-image-to-editable-pptx) | 198 | MIT | 可访问 |
| [mujingquan835/Dawang-ppt](https://github.com/mujingquan835/Dawang-ppt) | 192 | AGPL-3.0 | 可访问 |
| [rsrohan99/presenter](https://github.com/rsrohan99/presenter) | 187 | 未识别 | 可访问 |
| [Akxan/ppt-agent-skill](https://github.com/Akxan/ppt-agent-skill) | 181 | MIT | 可访问 |
| [Sven-LI-sankyuu/presentation-skills](https://github.com/Sven-LI-sankyuu/presentation-skills) | 179 | 未识别 | 可访问 |
| [xdmlxdml/beamer2pptx](https://github.com/xdmlxdml/beamer2pptx) | 175 | MIT | 可访问 |
| [kgraph57/mckinsey-style-visualization-skill](https://github.com/kgraph57/mckinsey-style-visualization-skill) | 173 | MIT | 可访问 |
| [jinwyp/open-ppt-skill](https://github.com/jinwyp/open-ppt-skill) | 173 | MIT | 可访问 |
| [daniel-style/magic-slide](https://github.com/daniel-style/magic-slide) | 172 | MIT | 可访问 |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | 154 | MIT | 可访问 |
| [SenseTime-Copilot/raccoon-ppt-skill](https://github.com/SenseTime-Copilot/raccoon-ppt-skill) | 149 | Apache-2.0 | 可访问 |
| [Arinin77/image2editable-ppt](https://github.com/Arinin77/image2editable-ppt) | 147 | MIT | 可访问 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | 141 | MIT | 可访问 |
| [knight6669/knight-imagetopptx-skill](https://github.com/knight6669/knight-imagetopptx-skill) | 140 | MIT | 可访问 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | 132 | MIT | 可访问 |
| [Ayushmaniar/powerpoint-mcp](https://github.com/Ayushmaniar/powerpoint-mcp) | 127 | 未识别 | 可访问 |
| [joeseesun/qiaomu-bento-ppt](https://github.com/joeseesun/qiaomu-bento-ppt) | 126 | MIT | 可访问 |
| [fangyuanopus/literature-report-ppt-builder](https://github.com/fangyuanopus/literature-report-ppt-builder) | 122 | MIT | 可访问 |
| [gnuhpc/ppt-master-plus](https://github.com/gnuhpc/ppt-master-plus) | 105 | MIT | 可访问 |
| [gongnyang/awesome-html-scrolline-deck](https://github.com/gongnyang/awesome-html-scrolline-deck) | 105 | MIT | 可访问 |
| [StarryKit/starrykit-plugin](https://github.com/StarryKit/starrykit-plugin) | 102 | MIT | 可访问 |
| [siril9/presentation-skill](https://github.com/siril9/presentation-skill) | 101 | MIT | 可访问 |

### Deck authoring / export（21）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 194,690 | MIT | 可访问 |
| [hakimel/reveal.js](https://github.com/hakimel/reveal.js) | 72,550 | MIT | 可访问 |
| [docling-project/docling](https://github.com/docling-project/docling) | 70,364 | MIT | 可访问 |
| [slidevjs/slidev](https://github.com/slidevjs/slidev) | 49,416 | MIT | 可访问 |
| [jgm/pandoc](https://github.com/jgm/pandoc) | 46,872 | GPL-2.0 | 可访问 |
| [impress/impress.js](https://github.com/impress/impress.js) | 38,151 | MIT | 可访问 |
| [gotenberg/gotenberg](https://github.com/gotenberg/gotenberg) | 13,550 | MIT | 可访问 |
| [gnab/remark](https://github.com/gnab/remark) | 13,003 | MIT | 可访问 |
| [marp-team/marp](https://github.com/marp-team/marp) | 12,738 | MIT | 可访问 |
| [pymupdf/PyMuPDF](https://github.com/pymupdf/PyMuPDF) | 11,098 | AGPL-3.0 | 可访问 |
| [FormidableLabs/spectacle](https://github.com/FormidableLabs/spectacle) | 10,190 | MIT | 可访问 |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 6,369 | MIT | 可访问 |
| [quarto-dev/quarto-cli](https://github.com/quarto-dev/quarto-cli) | 6,165 | NOASSERTION | 可访问 |
| [shower/shower](https://github.com/shower/shower) | 4,879 | NOASSERTION | 可访问 |
| [LibreOffice/core](https://github.com/LibreOffice/core) | 4,624 | GPL-3.0 | 可访问 |
| [marp-team/marp-cli](https://github.com/marp-team/marp-cli) | 3,911 | MIT | 可访问 |
| [webpro/reveal-md](https://github.com/webpro/reveal-md) | 3,909 | MIT | 已归档 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | 3,585 | MIT | 可访问 |
| [ArtifexSoftware/mupdf](https://github.com/ArtifexSoftware/mupdf) | 3,044 | AGPL-3.0 | 可访问 |
| [unoconv/unoconv](https://github.com/unoconv/unoconv) | 2,741 | GPL-2.0 | 已归档 |
| [deckgo/deckdeckgo](https://github.com/deckgo/deckdeckgo) | 1,674 | 未识别 | 已归档 |

### Design / type / images（31）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [lovell/sharp](https://github.com/lovell/sharp) | 32,836 | Apache-2.0 | 可访问 |
| [microsoft/cascadia-code](https://github.com/microsoft/cascadia-code) | 27,957 | NOASSERTION | 可访问 |
| [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons) | 26,193 | CC0-1.0 | 可访问 |
| [feathericons/feather](https://github.com/feathericons/feather) | 26,038 | MIT | 可访问 |
| [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | 25,679 | NOASSERTION | 可访问 |
| [svg/svgo](https://github.com/svg/svgo) | 22,804 | MIT | 可访问 |
| [tabler/tabler-icons](https://github.com/tabler/tabler-icons) | 22,596 | MIT | 可访问 |
| [google/fonts](https://github.com/google/fonts) | 20,748 | 未识别 | 可访问 |
| [rsms/inter](https://github.com/rsms/inter) | 20,053 | OFL-1.1 | 可访问 |
| [catppuccin/catppuccin](https://github.com/catppuccin/catppuccin) | 19,930 | MIT | 可访问 |
| [ImageMagick/ImageMagick](https://github.com/ImageMagick/ImageMagick) | 17,832 | NOASSERTION | 可访问 |
| [adobe-fonts/source-han-sans](https://github.com/adobe-fonts/source-han-sans) | 17,456 | NOASSERTION | 可访问 |
| [JetBrains/JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) | 13,163 | OFL-1.1 | 可访问 |
| [IBM/plex](https://github.com/IBM/plex) | 11,764 | OFL-1.1 | 可访问 |
| [gka/chroma.js](https://github.com/gka/chroma.js) | 10,601 | NOASSERTION | 可访问 |
| [twbs/icons](https://github.com/twbs/icons) | 8,173 | MIT | 可访问 |
| [nordtheme/nord](https://github.com/nordtheme/nord) | 6,911 | MIT | 可访问 |
| [iconify/iconify](https://github.com/iconify/iconify) | 6,390 | MIT | 可访问 |
| [jakearchibald/svgomg](https://github.com/jakearchibald/svgomg) | 6,213 | MIT | 可访问 |
| [harfbuzz/harfbuzz](https://github.com/harfbuzz/harfbuzz) | 6,212 | NOASSERTION | 可访问 |
| [i-tu/Hasklig](https://github.com/i-tu/Hasklig) | 5,711 | OFL-1.1 | 可访问 |
| [fonttools/fonttools](https://github.com/fonttools/fonttools) | 5,315 | MIT | 可访问 |
| [opentypejs/opentype.js](https://github.com/opentypejs/opentype.js) | 5,045 | MIT | 可访问 |
| [Qix-/color](https://github.com/Qix-/color) | 4,934 | MIT | 可访问 |
| [evanw/thumbhash](https://github.com/evanw/thumbhash) | 4,238 | MIT | 可访问 |
| [notofonts/noto-cjk](https://github.com/notofonts/noto-cjk) | 4,145 | 未识别 | 可访问 |
| [vercel/geist-font](https://github.com/vercel/geist-font) | 3,750 | OFL-1.1 | 可访问 |
| [color-js/color.js](https://github.com/color-js/color.js) | 2,319 | MIT | 可访问 |
| [svg-sprite/svg-sprite](https://github.com/svg-sprite/svg-sprite) | 1,990 | MIT | 可访问 |
| [chriskempson/base16](https://github.com/chriskempson/base16) | 975 | MIT | 可访问 |
| [phosphor-icons/core](https://github.com/phosphor-icons/core) | 399 | MIT | 可访问 |

### Graphics / diagrams（37）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | 135,432 | MIT | 可访问 |
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | 118,017 | MIT | 可访问 |
| [d3/d3](https://github.com/d3/d3) | 113,894 | ISC | 可访问 |
| [3b1b/manim](https://github.com/3b1b/manim) | 96,308 | MIT | 可访问 |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | 91,060 | MIT | 可访问 |
| [chartjs/Chart.js](https://github.com/chartjs/Chart.js) | 67,787 | MIT | 可访问 |
| [apache/echarts](https://github.com/apache/echarts) | 67,699 | Apache-2.0 | 可访问 |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | 51,443 | NOASSERTION | 可访问 |
| [pixijs/pixijs](https://github.com/pixijs/pixijs) | 48,662 | MIT | 可访问 |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim) | 42,386 | MIT | 可访问 |
| [xyflow/xyflow](https://github.com/xyflow/xyflow) | 38,955 | MIT | 可访问 |
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | 33,623 | MIT | 可访问 |
| [fabricjs/fabric.js](https://github.com/fabricjs/fabric.js) | 31,554 | MIT | 可访问 |
| [recharts/recharts](https://github.com/recharts/recharts) | 27,694 | MIT | 可访问 |
| [processing/p5.js](https://github.com/processing/p5.js) | 24,329 | LGPL-2.1 | 可访问 |
| [rough-stuff/rough](https://github.com/rough-stuff/rough) | 21,371 | MIT | 可访问 |
| [bokeh/bokeh](https://github.com/bokeh/bokeh) | 20,472 | BSD-3-Clause | 可访问 |
| [plotly/plotly.js](https://github.com/plotly/plotly.js) | 18,377 | MIT | 可访问 |
| [paperjs/paper.js](https://github.com/paperjs/paper.js) | 15,191 | NOASSERTION | 可访问 |
| [konvajs/konva](https://github.com/konvajs/konva) | 14,931 | NOASSERTION | 可访问 |
| [plouc/nivo](https://github.com/plouc/nivo) | 14,133 | MIT | 可访问 |
| [plantuml/plantuml](https://github.com/plantuml/plantuml) | 13,409 | LGPL-3.0 | 可访问 |
| [antvis/G2](https://github.com/antvis/G2) | 12,657 | MIT | 可访问 |
| [highcharts/highcharts](https://github.com/highcharts/highcharts) | 12,500 | NOASSERTION | 可访问 |
| [antvis/G6](https://github.com/antvis/G6) | 12,384 | MIT | 可访问 |
| [vega/vega](https://github.com/vega/vega) | 12,038 | BSD-3-Clause | 可访问 |
| [svgdotjs/svg.js](https://github.com/svgdotjs/svg.js) | 11,911 | NOASSERTION | 可访问 |
| [cytoscape/cytoscape.js](https://github.com/cytoscape/cytoscape.js) | 11,278 | MIT | 可访问 |
| [rough-stuff/rough-notation](https://github.com/rough-stuff/rough-notation) | 9,735 | MIT | 可访问 |
| [jgraph/drawio](https://github.com/jgraph/drawio) | 9,287 | Apache-2.0 | 可访问 |
| [antvis/Infographic](https://github.com/antvis/Infographic) | 7,083 | MIT | 可访问 |
| [antvis/X6](https://github.com/antvis/X6) | 6,757 | MIT | 可访问 |
| [dagrejs/dagre](https://github.com/dagrejs/dagre) | 5,852 | MIT | 可访问 |
| [vega/vega-lite](https://github.com/vega/vega-lite) | 5,549 | BSD-3-Clause | 可访问 |
| [observablehq/plot](https://github.com/observablehq/plot) | 5,423 | ISC | 可访问 |
| [antonioru/beautiful-react-diagrams](https://github.com/antonioru/beautiful-react-diagrams) | 2,725 | MIT | 可访问 |
| [graphology/graphology](https://github.com/graphology/graphology) | 1,772 | MIT | 可访问 |

### Motion / transitions（34）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [animate-css/animate.css](https://github.com/animate-css/animate.css) | 82,977 | NOASSERTION | 可访问 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 81,982 | Apache-2.0 | 可访问 |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | 74,478 | MIT | 可访问 |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 72,137 | NOASSERTION | 可访问 |
| [motiondivision/motion](https://github.com/motiondivision/motion) | 35,046 | MIT | 可访问 |
| [airbnb/lottie-web](https://github.com/airbnb/lottie-web) | 32,394 | MIT | 可访问 |
| [greensock/GSAP](https://github.com/greensock/GSAP) | 30,399 | 未识别 | 可访问 |
| [IanLunn/Hover](https://github.com/IanLunn/Hover) | 29,408 | NOASSERTION | 可访问 |
| [pmndrs/react-spring](https://github.com/pmndrs/react-spring) | 29,271 | MIT | 可访问 |
| [michalsnik/aos](https://github.com/michalsnik/aos) | 28,047 | MIT | 可访问 |
| [Popmotion/popmotion](https://github.com/Popmotion/popmotion) | 20,155 | 未识别 | 可访问 |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | 19,755 | MIT | 可访问 |
| [mojs/mojs](https://github.com/mojs/mojs) | 18,894 | MIT | 可访问 |
| [Chalarangelo/30-seconds-of-css](https://github.com/Chalarangelo/30-seconds-of-css) | 15,963 | CC-BY-4.0 | 已归档 |
| [formkit/auto-animate](https://github.com/formkit/auto-animate) | 13,966 | MIT | 可访问 |
| [reactjs/react-transition-group](https://github.com/reactjs/react-transition-group) | 10,212 | NOASSERTION | 可访问 |
| [tweenjs/tween.js](https://github.com/tweenjs/tween.js) | 10,149 | NOASSERTION | 可访问 |
| [miniMAC/magic](https://github.com/miniMAC/magic) | 8,592 | MIT | 可访问 |
| [sghall/react-move](https://github.com/sghall/react-move) | 6,542 | MIT | 可访问 |
| [motiondivision/motionone](https://github.com/motiondivision/motionone) | 2,859 | MIT | 已归档 |
| [jh3y/whirl](https://github.com/jh3y/whirl) | 1,837 | MIT | 可访问 |
| [jeremyckahn/shifty](https://github.com/jeremyckahn/shifty) | 1,553 | MIT | 可访问 |
| [codrops/ParticleEffectsButtons](https://github.com/codrops/ParticleEffectsButtons) | 1,264 | 未识别 | 可访问 |
| [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime) | 1,254 | MIT | 可访问 |
| [LottieFiles/dotlottie-web](https://github.com/LottieFiles/dotlottie-web) | 941 | MIT | 可访问 |
| [codrops/OffCanvasMenuEffects](https://github.com/codrops/OffCanvasMenuEffects) | 696 | 未识别 | 可访问 |
| [codrops/FullscreenForm](https://github.com/codrops/FullscreenForm) | 541 | 未识别 | 可访问 |
| [codrops/StackMotionHoverEffects](https://github.com/codrops/StackMotionHoverEffects) | 501 | 未识别 | 可访问 |
| [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) | 351 | MIT | 可访问 |
| [codrops/AnimatedFrameSlideshow](https://github.com/codrops/AnimatedFrameSlideshow) | 283 | 未识别 | 可访问 |
| [codrops/ScrollingLettersAnimation](https://github.com/codrops/ScrollingLettersAnimation) | 229 | 未识别 | 可访问 |
| [codrops/FullImageReveal](https://github.com/codrops/FullImageReveal) | 165 | 未识别 | 可访问 |
| [codrops/ScrollAnimationsGrid](https://github.com/codrops/ScrollAnimationsGrid) | 119 | MIT | 可访问 |
| [codrops/AnimatedImageColumns](https://github.com/codrops/AnimatedImageColumns) | 118 | 未识别 | 可访问 |

### Visual QA / delivery（14）

| 项目 | GitHub ★ | 仓库许可 | 状态 |
|---|---:|---|---|
| [microsoft/playwright](https://github.com/microsoft/playwright) | 99,734 | Apache-2.0 | 可访问 |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | 95,815 | Apache-2.0 | 可访问 |
| [storybookjs/storybook](https://github.com/storybookjs/storybook) | 91,512 | MIT | 可访问 |
| [GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse) | 31,034 | Apache-2.0 | 可访问 |
| [dequelabs/axe-core](https://github.com/dequelabs/axe-core) | 7,790 | MPL-2.0 | 可访问 |
| [garris/BackstopJS](https://github.com/garris/BackstopJS) | 7,198 | MIT | 可访问 |
| [mapbox/pixelmatch](https://github.com/mapbox/pixelmatch) | 7,021 | ISC | 可访问 |
| [americanexpress/jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) | 3,917 | Apache-2.0 | 可访问 |
| [testing-library/dom-testing-library](https://github.com/testing-library/dom-testing-library) | 3,342 | MIT | 可访问 |
| [lost-pixel/lost-pixel](https://github.com/lost-pixel/lost-pixel) | 1,677 | MIT | 已归档 |
| [w3c/wcag](https://github.com/w3c/wcag) | 1,523 | NOASSERTION | 可访问 |
| [reg-viz/reg-suit](https://github.com/reg-viz/reg-suit) | 1,307 | MIT | 可访问 |
| [image-js/image-js](https://github.com/image-js/image-js) | 1,094 | MIT | 可访问 |
| [reg-viz/storycap](https://github.com/reg-viz/storycap) | 757 | MIT | 可访问 |
