# Job Application Tracker

Aplicação full-stack para gerenciamento de candidaturas de estágio/júnior, com foco em organização do funil de vagas, acompanhamento de status, próximas ações e visualização de métricas.

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

A proposta é construir uma aplicação realista de portfólio com dois frontends consumindo a mesma API, enquanto o repositório também serve como trilha prática de estudo para banco de dados e backend.

## Escopo

O projeto foi dividido em duas frentes:

- **Entrega principal:** Angular + Svelte + Node.js/Express + PostgreSQL
- **Estudo complementar:** SQL aplicado ao domínio e uma API experimental com Java/Spring Boot

## Stack

- **Frontend principal:** Angular
- **Dashboard complementar:** Svelte
- **Backend principal:** Node.js + Express
- **Banco de dados:** PostgreSQL
- **Consultas e estudos:** SQL
- **Backend complementar:** Java + Spring Boot
- **Estilização:** CSS moderno e responsivo

## Estrutura do repositório

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

A aplicação Angular em `apps/angular-app/job-application-tracker` está em um estado apresentável para portfólio.

O que já foi implementado:

- shell compartilhado com navegação lateral
- rota de lista de candidaturas
- rota de cadastro
- rota de detalhes por id
- model tipado com timeline, notas, contato e datas
- service com mock data mais rico
- filtros e ordenação na tela principal
- página de cadastro com formulário e preview
- página de detalhes com resumo, timeline e contexto
- layout visual alinhado às referências em `src/templates`
- build e testes passando

## Próxima frente

A próxima etapa natural é iniciar `apps/svelte-dashboard` para cobrir o segundo frontend da proposta e mostrar reatividade com stores em Svelte.

## Diferenciais para entrevista

Este projeto foi desenhado para permitir explicações técnicas claras sobre:

- Angular standalone components
- organização entre `models`, `services`, rotas e templates
- uso de TypeScript para mapear estado e apresentação
- separação entre layout de referência e implementação real
- futuro contraste entre Angular e Svelte
- futura integração com API Node/Express e PostgreSQL

## Documentos de continuidade

Para continuar o projeto em outra máquina sem depender do histórico da conversa, use:

- `docs/ai-context.md`
- `docs/session-log.md`
- `docs/next-step.md`
- `docs/decisions.md`

## Status

Projeto com frontend Angular funcional e visualmente refinado, pronto para avançar para a frente de Svelte e depois para backend/API.
