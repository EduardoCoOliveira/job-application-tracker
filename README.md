# Job Application Tracker

Aplicacao full-stack para gerenciamento de candidaturas de estagio/junior, com foco em organizacao do funil de vagas, acompanhamento de status, proximas acoes e visualizacao de metricas.

## Objetivo

Este projeto existe para consolidar conhecimentos em:

- HTML
- CSS
- JavaScript
- TypeScript
- Angular
- Svelte
- Node.js
- Express
- PostgreSQL
- SQL
- Java
- Spring Boot

A proposta e construir uma aplicacao realista de portfolio com dois frontends consumindo a mesma API, enquanto o repositorio tambem serve como trilha pratica de estudo para banco de dados e backend.

## Escopo

O projeto foi dividido em duas frentes:

- **Entrega principal:** Angular + Svelte + Node.js/Express + PostgreSQL
- **Estudo complementar:** SQL aplicado ao dominio e uma API experimental com Java/Spring Boot

## Stack

- **Frontend principal:** Angular
- **Dashboard complementar:** Svelte
- **Backend principal:** Node.js + Express
- **Banco de dados:** PostgreSQL
- **Consultas e estudos:** SQL
- **Backend complementar:** Java + Spring Boot
- **Estilizacao:** CSS moderno e responsivo

## Arquitetura

- **Angular:** aplicacao principal com rotas, componentes, services e futuramente `HttpClient`
- **Svelte:** dashboard reativo complementar para comparacao de abordagens
- **Node/Express:** API principal da primeira entrega
- **PostgreSQL:** banco relacional principal
- **Java/Spring Boot:** modulo de estudo para comparar arquitetura backend

## Estrutura do repositorio

```text
job-application-tracker/
  README.md
  docs/
    ai-context.md
    architecture.md
    decisions.md
    next-step.md
    session-log.md
    study-roadmap.md
  apps/
    angular-app/
    svelte-dashboard/
  backend/
    api/
    java-api-study/
  database/
    schema.sql
    seed.sql
    queries/
      analytics.sql
      filters.sql
```

## Estado atual

Ja existe uma base Angular iniciada em:

- `apps/angular-app/job-application-tracker`

O que ja foi feito no Angular:

- rotas para candidaturas, cadastro e detalhes
- model real em `src/app/models/application.model.ts`
- service com mock data em `src/app/services/application.service.ts`
- lista de candidaturas sendo renderizada com Angular `@for`
- referencia visual estatica em `src/templates`

O que ainda falta na fase atual:

- reconstruir a tela de candidaturas com layout fiel ao template de referencia
- estilizar a pagina real com CSS
- implementar as telas reais de cadastro e detalhes
- depois substituir mock por API

## Ordem de desenvolvimento

1. Documentacao e estrutura do repositorio
2. Frontend principal em Angular
3. Dashboard complementar em Svelte
4. API principal em Node.js + Express
5. Modelagem e consultas em PostgreSQL/SQL
6. API complementar em Java/Spring Boot

## Diferenciais para entrevista

Este projeto foi desenhado para permitir explicacoes tecnicas claras sobre:

- diferencas entre Angular e Svelte
- separacao entre layout de referencia e implementacao real
- fluxo `model -> service -> component -> template`
- consumo de API por frontends diferentes
- modelagem relacional com PostgreSQL
- queries SQL de filtros e metricas
- comparacao entre Express e Spring Boot

## Documentos de continuidade

Para continuar o projeto em outra maquina sem depender do historico da conversa, use:

- `docs/ai-context.md`
- `docs/session-log.md`
- `docs/next-step.md`
- `docs/decisions.md`

## Status

Projeto em fase inicial de implementacao do frontend Angular, com dados mockados funcionando e proximo foco na reconstrucao visual da pagina de candidaturas.
