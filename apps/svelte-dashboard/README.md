# Svelte Dashboard

Segundo frontend do projeto **Job Application Tracker**.

## Objetivo

Mostrar o mesmo domínio de candidaturas já implementado em Angular, mas com um recorte mais leve e reativo usando Svelte.

## O que demonstra

- composição de componentes
- reatividade nativa
- uso de `stores`
- derived state para filtros e métricas
- comparação direta com a abordagem do Angular

## Estrutura

```text
src/
  lib/
    components/
      MetricCard.svelte
      RecentApplications.svelte
      StatusFilter.svelte
    data/
      applications.ts
    stores/
      dashboard.ts
    types.ts
  App.svelte
  app.css
  main.ts
```

## Scripts

```bash
npm install
npm run dev
npm run build
```
