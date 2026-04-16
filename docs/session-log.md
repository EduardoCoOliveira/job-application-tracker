# Session Log

## 2026-04-14

- Definido o projeto **Job Application Tracker**.
- Definida a estrategia com Angular como app principal e Svelte como dashboard complementar.
- Supabase foi considerado, mas a decisao mudou para PostgreSQL + API propria.
- Definido Node.js + Express como backend principal.
- Definido Java/Spring Boot como trilha complementar de estudo.
- Criada organizacao inicial do repositorio.
- Atualizados `README.md`, `docs/architecture.md` e `docs/study-roadmap.md`.

## 2026-04-15

- Escolhido CSS como stylesheet do Angular.
- Decidido nao usar SSR/SSG no inicio.
- Criadas rotas Angular para candidaturas, cadastro e detalhes.
- Identificados erros em `app.routes.ts`: imports, virgulas e import ausente de `Details`.
- Orientado o uso de `components`, `services` e `models`.
- Usuario criou arquivos de service e model.
- Definido proximo passo: renderizar lista mockada de candidaturas com Angular.
- Definido fluxo hibrido GPT + Qwen via Continue.
- Criados documentos obrigatorios de continuidade:
  - `docs/ai-context.md`
  - `docs/session-log.md`
  - `docs/next-step.md`
- Definido protocolo PC/Mac: no inicio de cada sessao, informar plataforma; no fim, atualizar docs e preparar commit.
- Verificado Git: a raiz `Job Application Tracker` ainda nao e repositorio Git; existe `.git` apenas em `apps/angular-app/job-application-tracker`, sem remote configurado.
- Iniciada correcao da estrategia Git: a raiz do projeto deve ser o repositorio principal para incluir docs, backend, database e apps.
- Removido o `.git` aninhado do app Angular e inicializado Git na raiz `Job Application Tracker` com branch `main`.
- Criado `.gitignore` raiz para ignorar dependencias, caches, outputs de build, arquivos locais e backup de metadados Git antigos.
- GitHub CLI (`gh`) nao esta instalado; criacao/publicacao do repositorio remoto precisa ser feita por outro metodo.
- Remote GitHub configurado: `https://github.com/EduardoCoOliveira/job-application-tracker.git`.
- Branch `main` enviada para `origin/main`.
