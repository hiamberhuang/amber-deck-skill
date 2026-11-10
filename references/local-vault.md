# 用你自己的素材

本仓库没有组织的原始材料。私有资产库由持有权限的人保管，另提供包含 inventory.json 的目录。历史版本不构成最新定稿。跨客户、公开版本要重新确认使用范围。

1. 运行 `python3 scripts/vault.py --vault "/path/to/local-vault" find "活动或客户名称"`，优先选与任务匹配、版本明确的项目。
2. 运行 `python3 scripts/vault.py --vault "/path/to/local-vault" entries 003`，列出源项目内文件。先找 index.html、README、母版和相关资源。
3. 运行 `python3 scripts/vault.py --vault "/path/to/local-vault" copy 003 --dest ./working-copy` 将整个源项目解包进一个新子目录；或加 `--member 'assets/example.png'` 只复制一项。需保留可编辑 PPTX 时，先另存副本，再从其中复制页面或母版。
4. 读取新增的 PROVENANCE.json，在设计记录标明使用了哪些对象。保留原目录，不运行来路不明的历史脚本，不把私有源包提交到 GitHub。
5. 未装素材库的同事，可以在受控文档库打开自己有权限的项目文件，下载指定资产或把页面交给 AI。飞书链接本身不会扩大智能体的访问权限。

脚本需要 Python 3.9+，无需依赖或网络。只从指定目录读取，不向外传输，不直接更改原件。
