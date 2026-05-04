# AI Context

## Project

**Job Application Tracker** is a portfolio-grade full-stack application for tracking internship/junior job applications.

Core product goals:

- register applications
- track status changes through the hiring funnel
- store next actions and recent updates
- visualize the process through multiple frontends

Learning goals tied to the project:

- HTML, CSS, JavaScript
- TypeScript
- Angular
- Svelte
- Node.js + Express
- PostgreSQL + SQL
- Java + Spring Boot

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

Main architecture:

- **Angular**: primary application UI
- **Svelte**: secondary reactive dashboard / comparative frontend
- **Node.js + Express**: main backend API
- **PostgreSQL**: main relational database
- **SQL scripts**: query practice for filtering and analytics
- **Java + Spring Boot**: secondary study backend for architectural comparison

Important architectural decision:

- Spring Boot is **not** the critical path for the first delivery.
- The first working product path is **Angular -> Node/Express -> PostgreSQL**.

## Current Implementation State

### Repository

The root folder `Job Application Tracker` is the Git repository.

This is intentional so the repo versions:

- documentation
- Angular app
- future Svelte app
- backend folders
- database scripts

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
- standalone components are being used
- app shell is rendered in `src/app/app.html`
- global design system styles are centralized in `src/styles.css`
- production build passes
- tests pass

### Angular Domain Layer

Current model file:

- `src/app/models/application.model.ts`

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

### Angular Service Layer

Current service file:

- `src/app/services/application.service.ts`

Implemented:

- richer mock dataset with six applications
- `getAllApplications()`
- `getApplicationById(id)`
- `getFeaturedApplication()`

The app still uses **mock data**, not HTTP/API yet.

### Angular Applications Page

Files:

- `src/app/components/applications/applications.ts`
- `src/app/components/applications/applications.html`
- `src/app/components/applications/applications.css`

Implemented:

- hero/topbar and metrics cards
- search + status/modality/sort filters with `ngModel`
- filtered and sorted table view
- status pill mapping and modality formatting in TypeScript
- details navigation per row

### Angular Register Page

Files:

- `src/app/components/register/register.ts`
- `src/app/components/register/register.html`
- `src/app/components/register/register.css`

Implemented:

- structured form layout based on the visual reference
- live template-driven preview using `ngModel`
- status/modality label formatting in TypeScript
- sidebar/topbar integration through shared shell

### Angular Details Page

Files:

- `src/app/components/details/details.ts`
- `src/app/components/details/details.html`
- `src/app/components/details/details.css`

Implemented:

- route-param based detail loading using `ActivatedRoute`
- status summary card
- contact/context card
- timeline rendering from mock data
- notes/summary sidebar cards
- empty state when an application is not found

### Visual Reference

Static visual reference remains under:

- `apps/angular-app/job-application-tracker/src/templates`

Purpose:

- visual inspiration only
- not part of the real Angular feature flow
- can still be served through Angular assets

### Svelte Status

Svelte dashboard is still planned but not scaffolded yet in the repo.

## Open Work

Frontend next:

- scaffold the Svelte dashboard app
- reuse the same application domain shape in a small reactive dashboard
- compare Angular pages vs Svelte dashboard architecture

Backend later:

- create Node/Express API
- replace Angular mock data with `HttpClient`
- model PostgreSQL schema
- write SQL filters and analytics queries
- build Java/Spring study API

## Known Constraints / Notes

- The user prefers CSS instead of SCSS.
- SSR/SSG is intentionally out of scope for now.
- Mock data first, real API later.
- Visual reference must remain separate from production logic.
- Internal code values should prefer ASCII-safe English identifiers when encoding becomes an issue.
- The user wants future support for customizable per-company statuses, but this is a later feature, not current scope.
