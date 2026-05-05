# Job Application Tracker

Aplicação de portfólio para gerenciamento de candidaturas de estágio/júnior, com foco em organização do funil de vagas, acompanhamento de status, próximas ações e visualização de métricas.

## Objetivo

Este projeto existe para consolidar conhecimentos em:

- HTML
- CSS
- JavaScript
- TypeScript
- Angular
- Svelte

A proposta é construir uma aplicação realista com dois frontends no mesmo domínio, permitindo comparar abordagens de interface, reatividade e organização de estado.

## Stack atual

- **Frontend principal:** Angular
- **Dashboard complementar:** Svelte
- **Estilização:** CSS moderno e responsivo
- **Linguagem de modelagem da aplicação:** TypeScript

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
```

## Estado atual

### Angular

A aplicação Angular em `apps/angular-app/job-application-tracker` está funcional e apresentável.

O que já foi implementado:

- shell compartilhado com navegação lateral
- rota de lista de candidaturas
- rota de cadastro
- rota de detalhes por id
- model tipado com timeline, notas, contato e datas
- service reativo com `BehaviorSubject`
- persistência local com `localStorage`
- filtros e ordenação na tela principal
- página de cadastro com formulário e preview
- página de detalhes com resumo, timeline e contexto
- build e testes passando

### Svelte

O dashboard Svelte em `apps/svelte-dashboard` já foi criado e validado.

O que já foi implementado:

- app com Vite + Svelte + TypeScript
- mock data alinhado ao domínio do Angular
- store central com estado derivado
- filtro reativo por status
- métricas gerais
- painel de candidaturas recentes
- leitura do mesmo `localStorage` do Angular com fallback para seed local
- linguagem visual coerente com o Angular
- build passando

## Próxima frente

A próxima etapa natural é refinar a experiência de uso e melhorar a consistência entre Angular e Svelte sem sair do escopo front-end only.

## Diferenciais para entrevista

Este projeto foi desenhado para permitir explicações técnicas claras sobre:

- Angular standalone components
- organização entre `models`, `services`, rotas e templates
- uso de TypeScript para mapear estado e apresentação
- Svelte stores e reatividade com pouco boilerplate
- comparação direta entre Angular e Svelte no mesmo domínio
- construção de um produto funcional sem depender de backend

## Documentos de continuidade

Para continuar o projeto em outra máquina sem depender do histórico da conversa, use:

- `docs/ai-context.md`
- `docs/session-log.md`
- `docs/next-step.md`
- `docs/decisions.md`

## Status

Projeto com Angular funcional, cadastro real no front-end e dashboard inicial em Svelte, pronto para refinamento e alinhamento entre os dois frontends.
