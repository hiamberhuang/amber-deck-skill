# Image-first art direction and faithful HTML

## Skills and when to use them

| Stage | Useful capability | What it should deliver |
|---|---|---|
| Read and frame | Feishu Docs reader, this skill, a consulting storyboard skill | Source version, audience, slide beats and evidence |
| Design a new composition | Image 2 / native Image Gen, visual direction | Image reference for the 16:9 cover, one evidence or mechanism page, and the ending when useful |
| Recreate the image | Frontend design, image-to-code, HTML deck authoring, pixel-restore techniques | Real HTML/CSS, design tokens, local media and browser captures |
| Add behavior | CSS / Web Animations for simple reveals; GSAP timeline if sequences actually need one; a slide shell for navigation | Predictable next/prev, deep links, overview, readable mobile and no-motion modes |
| Verify and deliver | Browser rendering, Playwright and visual QA | Same-state comparisons, offline HTML and source package |

Prefer tools available and authorized in the current environment; do not treat this table as a request to install tools. [Frontend Slides](https://github.com/zarazhangrui/frontend-slides), [Reveal.js](https://github.com/hakimel/reveal.js), [GSAP](https://github.com/greensock/GSAP) and [Playwright](https://github.com/microsoft/playwright) are optional upstream examples.

## Reference-first workflow

- For an established house style, render 3–5 pages from the closest approved HTML first. Use the cover’s typographic hierarchy, the evidence page’s composition and the actual motion behavior as constraints. Take the relevant CSS, original assets and isolated components into a new working copy.
- For a new composition, give Image 2 / native Image Gen a single-page brief: 16:9, headline and purpose, safe text, focal region, brand palette, layout limits and the kind of evidence it must accommodate. Prefer a single selected result. Do not use generated logos, invented product screens, client evidence or figures. If the generator cannot be used, work from approved screenshots and originals.
- Measure the visual target: relative x/y positions, edges, type scale, ratios, and whitespace. Recreate it in semantic HTML/CSS. Keep text, diagrams, tab state and data independent from the background image. Label any placeholder illustration as such.
- Render the HTML in the same aspect ratio, selected tab and motion state as the reference; inspect them together. Correct hierarchy, density and clipping before polishing animation. If an adjustment improves readability or supports an interaction, make it deliberately and record it.
- Place source imagery or recordings behind a click to reveal when the presenter needs a clean initial state. Keep the meaning legible before and after motion. Default to local assets, no external font fetch on first open, and no autoplay with audio.

A finished deck is the working browser experience, not the visual mockup. Do not substitute a full-slide screenshot for the HTML implementation.
