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
