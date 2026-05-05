# AI Context

## Project

**Job Application Tracker** is a portfolio-grade frontend application for tracking internship/junior job applications.

Core product goals:

- register applications
- track status changes through the hiring funnel
- store next actions and recent updates
- visualize the process through two frontend approaches

Learning goals tied to the project:

- HTML
- CSS
- JavaScript
- TypeScript
- Angular
- Svelte

## Working Protocol

This project must be portable across **PC/Windows** and **Mac/macOS** without depending on chat history.

Mandatory repository context files:

- `docs/ai-context.md`
- `docs/session-log.md`
- `docs/next-step.md`
- `docs/decisions.md`

Session rules:

- At the start of a session, confirm the environment:
  - `PC/Windows`
  - `Mac/macOS`
- Also confirm the working mode:
  - `didactic`
  - `hybrid`
  - `executor`
- At the end of a session, update all four docs before committing.

## Planned Architecture

Current architecture focus:

- **Angular**: main application UI with multi-page flow
- **Svelte**: secondary reactive dashboard / comparative frontend
- **TypeScript domain model**: shared product vocabulary across both frontends
- **Local mock data / local persistence**: front-end only data flow for now

Important scope decision:

- The project is intentionally **front-end only**.
- Java, Spring Boot, PostgreSQL and backend/API work are no longer part of the active plan.

## Current Implementation State

### Repository

The root folder `Job Application Tracker` is the Git repository.

This is intentional so the repo versions:

- documentation
- Angular app
- Svelte app
- optional experiment folders already present in the repo

Remote:

- `origin`: `https://github.com/EduardoCoOliveira/job-application-tracker.git`
- main branch: `main`

### Angular App

Angular app location:

- `apps/angular-app/job-application-tracker`

Current Angular state:

- app shell implemented with persistent sidebar navigation
- routes configured for:
  - `''` -> applications list
  - `'register'` -> register page
  - `'details/:id'` -> details page
- global design system styles are centralized in `src/styles.css`
- rich mock data, filters, sorting, register preview and details timeline are implemented
- register page creates real front-end records through the service
- service uses `BehaviorSubject` + `localStorage` for local persistence
- created applications appear in the list and can be opened in details
- production build passes
- tests pass

### Svelte App

Svelte app location:

- `apps/svelte-dashboard`

Current Svelte state:

- standalone Vite + Svelte + TypeScript app scaffolded
- build passes with `npm run build`
- local mock data reuses the same application domain concepts from Angular
- store-based architecture implemented in `src/lib/stores/dashboard.ts`
- dashboard now hydrates from the same `localStorage` key used by Angular, with mock data as fallback
- derived stores provide:
  - filtered applications
  - metrics
  - recent applications
- dashboard includes:
  - metrics cards
  - reactive status filter
  - recent applications panel
  - summary/compare section
- visual language intentionally matches the Angular app

### Angular Domain Layer

Current model file:

- `apps/angular-app/job-application-tracker/src/app/models/application.model.ts`

Implemented types/interfaces:

- `ApplicationStatus`
- `ModalityStatus`
- `ApplicationTimelineEntry`
- `JobApplication`

Current `JobApplication` shape includes:

- `id`
- `company`
- `position`
- `status`
- `modality`
- `appliedAt`
- `nextAction`
- `updatedAt`
- `city?`
- `source`
- `jobUrl`
- `recruiterEmail?`
- `notes`
- `summary`
- `timeline`

Status/modality values are kept in English internally to avoid encoding issues and keep code values stable.

## Open Work

Next technical priorities:

- polish success feedback after saving a new application
- refine responsive behavior for the Angular table/details flow
- decide whether to extract shared front-end seed data to reduce duplication
- optionally add one extra Svelte comparison panel

## Known Constraints / Notes

- The user prefers CSS instead of SCSS.
- SSR/SSG is intentionally out of scope.
- The project should stay front-end only for now.
- Visual reference must remain separate from production logic.
- Internal code values should prefer ASCII-safe English identifiers when encoding becomes an issue.
- The user wants future support for customizable per-company statuses, but this is a later feature, not current scope.
