# Amber Deck Skill

给 AI 一条飞书文档链接，得到一份能直接上屏讲的 16:9 HTML deck：咨询级排版、真正的机制图、克制的动效，交付前在浏览器里逐页验收。

这个仓库把一个人做 deck 的判断蒸馏成了 AI 能照着做的东西：四百多场改稿里反复提的意见、十份真实 deck 实测出的尺寸、可直接改的页型和动效，以及能自动抓常见毛病的验收脚本。

## 安装

```bash
git clone https://github.com/hiamberhuang/amber-deck-skill ~/.claude/skills/amber-deck-skill
```

其他支持 Agent Skills 的工具（Codex、Cursor 等）：放进它的 skills 目录，或把整个文件夹交给能读本地文件的 AI。

然后对 AI 说：

> 用 amber-deck-skill，把这份飞书文档做成 HTML deck：〈链接〉

读飞书需要 [lark-cli](https://github.com/larksuite/cli) 和你自己的文档权限；没有的话把正文贴给 AI 也行。验收脚本需要 Node 和 `npm i playwright`。

## 里面有什么

| 目录 | 内容 |
|---|---|
| `SKILL.md` | 七步流程和硬规则，AI 从这里读起 |
| `taste/` | 61 条审美规则（必须强调 / 不用管 / 一定要删 / 字号 / 配色 / 排版 / 图文 / 动效 / 手机端 / 文案 / 改稿方式）和 30 项验收清单 |
| `style/` | 实测设计变量、39 个页型的几何与密度、28 页可编辑的 HTML 起步工程（`kit-public/`，直接打开 `index.html`） |
| `frontend/` | 融合多个高星前端与设计 skill 的工艺规范：中文排版、网格与密度、SVG 图解、反模式；26 个渲染验证过的片段；81 个核验过的仓库索引 |
| `motion/` | 39 个可运行的单文件动效（原位换屏、分步揭示、齿轮闭环、跨页对象延续、数字滚动等），每个写明什么时候不要用；198 条动效与审美资源索引 |
| `xhs/` | 从 543 条小红书高赞笔记里提炼的 32 条规则，和逐个核验过的 PPT skill 清单 |
| `scripts/` | `feishu_intake.py` 读飞书、`qa_deck.cjs` 逐页渲染验收、`copy_check.py` 查有没有编造数字、`team_pack.py` 拉团队私有源码包 |
| `references/` | 分镜格式、长文档处理、设计图到 HTML、团队私有包的搭法、120 条排版与动效配方 |

## 验收脚本查什么

```bash
node scripts/qa_deck.cjs deck/index.html --out qa
python3 scripts/copy_check.py source.md deck/index.html
```

下半页空、末行不足三字、字太小、文字溢出、单页字太多、各页主副标题大小和位置不一致、缺本地资源、依赖外网；以及 deck 里出现了源文档没有的数字。通过之后仍然要人眼（或 AI 自己）逐张看截图。

## 公司素材不在这里

仓库里没有任何公司的真实页面、客户名或数字，起步工程全是占位文案。真实页面放在团队自己的权限空间里，按 [references/team-pack.md](references/team-pack.md) 配置后由 `team_pack.py` 用每个人自己的权限拉取。你也可以照这个办法给自己的团队建一套。

## 许可

原创代码与文档使用 [MIT License](LICENSE)。融合进来的思路和片段的出处与许可证见 [frontend/ATTRIBUTION.md](frontend/ATTRIBUTION.md)；索引里的外部仓库遵循各自许可。起步工程的 `brand/` 文件夹是 Noumena 的字标和品牌色，做其他品牌时删掉它并在 `index.html` 里去掉对应一行。
