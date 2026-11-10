# One Feishu link → browser deck

The normal user instruction is “Use amber-deck-skill on this Feishu Doc” followed by a URL. No outline or slide count is required when the document already has enough context.

1. Read the exact linked revision with a connected Feishu reader or:
   ```bash
   python3 scripts/feishu_intake.py "<Feishu /docx/ or /wiki/ URL>" --profile "<your profile>" --out ./private-input
   ```
   Use the logged-in user's identity and an explicitly named organization profile where required. The helper only reads and stores a snapshot; the agent performs narrative, design and authoring. It writes source text and the revision privately. Do not follow all links recursively or include the input snapshot in a public deliverable. If the source cannot be opened, ask for access or a copy.
2. Identify audience, argument, actual proof, unverified items and the closest approved HTML reference. Use [long-brief checks](complex-briefs.md) for named frameworks and old results. Reuse verified visual evidence where useful.
3. Make the cover, the mechanism or proof page and the action page first. For genuinely new composition, use [design-to-HTML](design-to-html.md). On a close reference match, working HTML and a browser screenshot are enough to start.
4. Build the remaining sequence. Include a 16:9 stage and readable mobile mode when the audience may review on a phone. Package a standalone HTML where possible, or ship all assets and precise offline startup steps. Use a PDF only as a backup if requested.
5. Confirm the generated HTML launches and its main interactions work. Report which style reference drove the output and distinguish verified evidence from illustrations.

For review: state why a particular page looks different from the reference and whether the change improves reading or control. Remove mock UI or decorative sections that do not help the audience.
