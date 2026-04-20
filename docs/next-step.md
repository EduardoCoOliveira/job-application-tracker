# Next Step

## Goal

Turn the current raw applications list into the first real page of the product, visually inspired by the reference file:

- `src/templates/candidaturas.html`

## Exact Task

Rebuild `src/app/components/applications/applications.html` and `applications.css` so the Angular page keeps using real mock data but starts to look like the intended final interface.

## What To Do Next

1. Open the reference page `src/templates/candidaturas.html`.
2. Identify the main visual blocks:
   - top header / page intro
   - actions area
   - filters/search area if present
   - applications list/cards/table
3. Rewrite the Angular component template so it contains only component markup.
   - Do not use full-document tags like `html`, `head` or `body` inside the component template.
4. Keep the `@for` loop, but place it inside the real visual structure.
5. Create the base CSS for spacing, typography, cards and layout.
6. Compare the Angular page in the browser with the reference and adjust structure first, details second.

## Technical Focus

This step is mainly about learning:

- component template structure in Angular
- how to mix static layout with dynamic rendering
- how to keep visual reference and real implementation separate
- how to move from “working data” to “working UI”

## Rules

- Keep using mock data.
- Do not connect to backend yet.
- Do not move app logic into `src/templates`.
- Prioritize structure and CSS over advanced logic.
- Fidelity to the reference matters more than adding new features right now.

## Files For Review In The Next Session

- `src/app/components/applications/applications.html`
- `src/app/components/applications/applications.css`
- optionally `src/app/components/applications/applications.ts` if any support property is added
