# Job Application Tracker

Aplicacao full-stack para gerenciamento de candidaturas de estagio/junior, com foco em organizacao do funil de vagas, acompanhamento de status, proximas acoes e visualizacao de metricas.

## Objetivo

Este projeto foi criado para consolidar conhecimentos em:

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

A proposta principal e construir uma aplicacao realista de portfolio com dois frontends consumindo a mesma API. Em paralelo, o repositorio tambem serve como trilha de estudo aplicada para SQL e para uma API secundaria em Java/Spring.

## Escopo do projeto

O projeto foi dividido em duas frentes para manter a entrega viavel em ate 2 semanas:

- **Entrega principal:** Angular + Svelte + Node.js/Express + PostgreSQL
- **Estudo complementar:** SQL aplicado ao dominio e uma API experimental com Java/Spring Boot

Essa divisao evita que o escopo cresca cedo demais e permite priorizar primeiro as habilidades mais diretamente cobradas para a vaga.

## Stack

- **Frontend principal:** Angular
- **Dashboard interativo:** Svelte
- **Backend principal:** Node.js + Express
- **Banco de dados:** PostgreSQL
- **Estudo de consultas:** SQL em scripts e queries do dominio
- **Backend complementar de estudo:** Java + Spring Boot
- **Estilizacao:** CSS moderno e responsivo

## Arquitetura

O projeto esta dividido em quatro camadas principais e uma trilha paralela de estudo:

- **Angular:** responsavel pela aplicacao principal, paginas, formularios, servicos e consumo da API com `HttpClient`.
- **Svelte:** responsavel por uma interface mais reativa, orientada a dashboard, kanban e metricas.
- **API Node/Express:** backend principal da primeira entrega, centralizando endpoints e comunicacao com o banco.
- **PostgreSQL:** base relacional compartilhada por todo o sistema.
- **Java/Spring Boot:** modulo complementar para estudar arquitetura em camadas e comparar abordagens de backend.

Essa arquitetura foi escolhida para comparar, na pratica:

- Angular e Svelte no frontend
- Node/Express e Spring Boot no backend
- uso de SQL tanto para operacoes basicas quanto para consultas analiticas

## Estrutura do repositorio

```text
job-application-tracker/
  README.md
  docs/
    architecture.md
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

## Ordem de desenvolvimento

Para manter foco e profundidade, a evolucao do projeto segue esta ordem:

1. Estrutura do repositorio e documentacao
2. Frontend principal em Angular
3. Dashboard reativo em Svelte
4. API principal em Node.js + Express
5. Modelagem e consultas em PostgreSQL/SQL
6. API complementar em Java/Spring Boot

## Diferenciais para entrevista

Este projeto foi desenhado para permitir explicacoes tecnicas claras sobre:

- diferencas entre Angular e Svelte
- consumo de API por frontends diferentes
- organizacao full-stack em camadas
- modelagem relacional com PostgreSQL
- escrita de queries SQL voltadas para filtros e metricas
- comparacao entre um backend leve em Express e uma arquitetura mais enterprise com Spring Boot

## Proximos passos

- [x] Criar a estrutura inicial do repositorio
- [x] Definir a arquitetura e a trilha de estudo
- [ ] Inicializar a aplicacao Angular
- [ ] Inicializar o dashboard em Svelte
- [ ] Criar a API principal com Node.js e Express
- [ ] Modelar o banco PostgreSQL
- [ ] Escrever queries SQL de filtros e metricas
- [ ] Integrar frontends com a API
- [ ] Criar a API complementar em Java/Spring Boot
- [ ] Refinar layout, responsividade e apresentacao do projeto

## Status

Projeto em fase de estruturacao e planejamento da primeira implementacao.
