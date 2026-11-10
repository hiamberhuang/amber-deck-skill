# Amber Deck Skill · Feishu to HTML

**给 AI 一个飞书文档链接，交付一份可以打开、翻页和演示的 HTML deck。** 默认是 HTML；只有明确要求才做 PowerPoint。

[下载最新版](https://github.com/hiamberhuang/amber-deck-skill/releases/latest) · [离线演示样例](examples/demo.html) · [视觉稿到 HTML 样例](examples/workbench.html)

## 怎么用

把最新版解压后的目录交给能读文件的 AI，或安装到 Codex / Claude Code：

```bash
git clone https://github.com/hiamberhuang/amber-deck-skill.git
cd amber-deck-skill
python3 scripts/install.py --host codex
# Claude Code: python3 scripts/install.py --host claude
```

在新对话里说：

> 用 amber-deck-skill，把这个飞书文档做成 Amber 同款 HTML deck：〈飞书链接〉

也可以给框架、截图或原来的 HTML。飞书资料由你当前的授权读取；同事必须有相应访问权限。如果已经有同系列的旧稿，提供旧稿链接或源码能更准确地复用画布、证据组件和控场。

## AI 怎么做

1. **读源**：抓取飞书正文，记录版本，拆出主张和证据。
2. **定视觉**：优先打开同类历史 HTML；新页面需要探索时，用 Image 2 或已授权图像模型先做视觉稿。
3. **还原网页**：用真实 DOM、CSS、可编辑文字和素材还原；按需加入交互、导航和动效。
4. **实播验收**：对照视觉稿逐页看实际浏览器结果，检查 16:9、移动端、键盘和离线。交付 HTML 和源码包。

[飞书入口](references/feishu-to-html.md) · [设计稿到 HTML 与前端技能组合](references/design-to-html.md) · [120 张排版与动效配方](references/effect-recipes.md) · [GitHub 选型索引](references/github-index.md)

[查看样例视觉稿](assets/workbench-design.jpg)（用图像先定构图，网页重建文字、选中态和交互）。

## 公司历史材料

公开包提供方法与虚构样例。授权原件可按[本地资产库指南](references/local-vault.md)检索和复制；原始客户案例、内部代码和真实交付稿保留在各自的授权空间。公开反馈请使用虚构示例。原创代码与说明使用 [MIT License](LICENSE)；外链资源遵循各自许可。
