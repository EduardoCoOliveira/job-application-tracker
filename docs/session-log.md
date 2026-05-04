# Session Log

## 2026-04-14

- Defined the **Job Application Tracker** project.
- Chose Angular as the main frontend and Svelte as the secondary dashboard frontend.
- Replaced the original Supabase idea with PostgreSQL plus a custom API.
- Chose Node.js + Express as the main backend path.
- Added Java/Spring Boot as a complementary study track.
- Created the initial repository structure and updated core planning docs.

## 2026-04-15

- Chose CSS instead of SCSS for Angular.
- Decided not to use SSR/SSG in the initial version.
- Created Angular routes for applications, register and details.
- Fixed route/import issues in `app.routes.ts`.
- Defined the hybrid mentoring flow with GPT + Qwen.
- Created repository continuity docs:
  - `docs/ai-context.md`
  - `docs/session-log.md`
  - `docs/next-step.md`
- Reorganized Git so the repository root is `Job Application Tracker`.
- Configured remote GitHub repository and pushed `main`.

## 2026-04-16

- Reviewed the old generated template folder and confirmed structural problems.
- Replaced it with a clean static visual reference in `src/templates`.
- Added reference pages:
  - `index.html`
  - `candidaturas.html`
  - `cadastro.html`
  - `detalhes.html`
  - `reference.css`
- Updated `angular.json` to serve `src/templates` under `/templates/...`.
- Cleaned parts of the Angular base so the project compiled and tests passed.

## 2026-04-20

- Continued the real Angular implementation using the reference design as the target.
- Confirmed the main app route points to the applications page.
- Created the real domain model in `src/app/models/application.model.ts` with:
  - `ApplicationStatus`
  - `ModalityStatus`
  - `JobApplication`
- Standardized internal status/modality values in English to avoid encoding issues in code.
- Implemented `JobApplicationService` with four mock applications and an observable return method.
- Connected the `Applications` component to the service through dependency injection.
- Loaded mock data in `ngOnInit()` and stored it in `applications: JobApplication[] = []`.
- Rendered the applications list in the browser using Angular `@for`.
- Clarified that the current list works functionally, but is still visually raw.
- Updated continuity docs to reflect the real current state.
- Created the missing mandatory file `docs/decisions.md`.

## 2026-05-04

- Finished the Angular visual implementation using the `templates` pages and `reference.css` as the design baseline.
- Added a shared application shell with sticky sidebar navigation in `app.html`.
- Moved the main visual system into `src/styles.css` for consistent tokens, panels, cards and responsive layout.
- Extended the application domain model with richer fields for dates, notes, recruiter data and timeline entries.
- Rebuilt the mock service with six coherent application records.
- Reworked the applications page into a real filtered table with:
  - live search
  - status filter
  - modality filter
  - sort control
  - mapped status/modality labels
- Implemented the register page as a structured form with live preview using `ngModel`.
- Implemented the details page with route-param loading, timeline, summary cards and fallback state.
- Updated the details route to `details/:id` and added a redirect from `details` to `details/1`.
- Fixed all related tests after introducing router dependencies.
- Validated the Angular app successfully with:
  - `npm run build`
  - `npm run test`
