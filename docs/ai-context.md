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

## Learning Flow

The mentoring flow is intentionally gradual:

1. GPT gives the next technical direction without dumping the full solution too early.
2. The user implements alone when possible.
3. If needed, GPT gives a more detailed explanation.
4. If still needed and the user is on PC, GPT may prepare a prompt for Qwen via Continue.
5. GPT reviews the resulting code and explains why it works and what can improve.

The user requested especially didactic guidance:

- explain why a file exists before asking for changes
- explain syntax, concepts, and responsibility of each file
- make each “north” more specific when requested

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

### Documentation

Present in the repo:

- `README.md`
- `docs/architecture.md`
- `docs/study-roadmap.md`
- `docs/ai-context.md`
- `docs/session-log.md`
- `docs/next-step.md`
- `docs/decisions.md`

### Angular App

Angular app location:

- `apps/angular-app/job-application-tracker`

Current Angular state:

- app exists and runs locally
- routing is configured
- three routes/pages exist:
  - `''` -> applications list
  - `'register'` -> register page
  - `'details'` -> details page
- standalone app structure is being used
- root app imports `RouterOutlet`
- current unit test checks app creation and `router-outlet`

### Angular Domain Layer

Current model file:

- `src/app/models/application.model.ts`

Implemented:

- `ApplicationStatus` type
- `ModalityStatus` type
- `JobApplication` interface

Current `JobApplication` shape:

- `id`
- `company`
- `position`
- `status`
- `modality`
- `nextAction`
- `updatedAt`

Status/modality values are kept in **English** internally to avoid encoding issues and keep code values stable.

### Angular Service Layer

Current service file:

- `src/app/services/application.service.ts`

Implemented:

- service with mock data
- mock list with four applications
- public method returning `Observable<JobApplication[]>`

The app is still using **mock data**, not HTTP/API yet.

### Angular Applications Page

Current component files:

- `src/app/components/applications/applications.ts`
- `src/app/components/applications/applications.html`

Implemented:

- component property `applications: JobApplication[] = []`
- service injection through constructor
- `ngOnInit()` subscription to load mock data
- template loop with Angular `@for`
- applications are already rendering in the browser

Current limitation:

- the page is still mostly raw/unpolished
- rendering is functional, but the final visual structure still needs to be recreated based on the reference template

### Visual Reference

There is a static visual reference under:

- `apps/angular-app/job-application-tracker/src/templates`

Purpose:

- visual inspiration only
- not part of the real Angular feature flow
- can be served through Angular assets

Current reference pages:

- `index.html`
- `candidaturas.html`
- `cadastro.html`
- `detalhes.html`
- `reference.css`

From this point on, the user wants the real app to be rebuilt **as close as possible** to the visual reference, while gradually adding real functionality.

## Open Work

Frontend next:

- transform the raw applications page into the real layout inspired by `candidaturas.html`
- remove any leftover full-document HTML structure from component templates if still present
- add proper CSS and page structure
- then build `register`
- then build `details`

Backend later:

- create Node/Express API
- connect Angular with `HttpClient`
- model PostgreSQL schema
- write SQL filters and analytics queries
- add Svelte dashboard
- build Java/Spring study API

## Known Constraints / Notes

- The user prefers CSS instead of SCSS.
- SSR/SSG is intentionally out of scope for now.
- Mock data first, real API later.
- Visual reference must remain separate from production logic.
- Internal code values should prefer ASCII-safe English identifiers when encoding becomes an issue.
- The user wants future support for customizable per-company statuses, but this is a later feature, not current scope.
