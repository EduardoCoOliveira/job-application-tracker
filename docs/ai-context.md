# AI Context

## Objetivo do projeto

O projeto **Job Application Tracker** e uma aplicacao full-stack para gerenciar candidaturas de estagio/junior.

O sistema deve permitir acompanhar vagas, empresas, status do processo seletivo, proximas acoes, detalhes da candidatura e metricas do funil.

O projeto tambem funciona como trilha de aprendizado pratica para consolidar:

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

## Processo de aprendizado

O fluxo de trabalho e hibrido entre GPT e um modelo local via Continue/Qwen.

Regras do fluxo:

- GPT atua como mentor tecnico e guia do processo.
- GPT deve iniciar cada etapa dando um norte claro, sem entregar codigo completo cedo demais.
- O usuario tenta implementar sozinho.
- Se travar, GPT aprofunda a explicacao com dicas mais especificas.
- Se ainda assim travar, GPT fornece um prompt claro para enviar ao Qwen.
- O usuario volta com o codigo gerado ou implementado.
- GPT revisa, explica se funciona e sugere melhorias.

## Protocolo de sessoes PC/Mac

Ao iniciar uma nova sessao de programacao, GPT deve lembrar o usuario de informar em qual plataforma esta trabalhando:

- PC/Windows
- Mac/macOS

Ao finalizar uma sessao de programacao, GPT deve:

- revisar o que foi alterado
- atualizar `docs/ai-context.md` quando houver mudanca de estado relevante
- atualizar `docs/session-log.md` com um resumo curto da sessao
- atualizar `docs/next-step.md` com a proxima acao concreta
- verificar o estado do Git
- preparar commit das mudancas quando o usuario confirmar que a sessao acabou

O objetivo e permitir continuar o projeto em outra maquina sem depender do historico da conversa.

## Arquitetura planejada

A arquitetura principal sera:

- Angular como frontend principal.
- Svelte como dashboard complementar e reativo.
- Node.js + Express como API principal.
- PostgreSQL como banco de dados principal.
- SQL como estudo aplicado sobre filtros e metricas.
- Java + Spring Boot como backend complementar de estudo.

O Spring Boot nao e backend principal da primeira entrega. Ele sera usado depois para comparar arquitetura Java com Express.

## Estado atual

Ja existe documentacao inicial em:

- `README.md`
- `docs/architecture.md`
- `docs/study-roadmap.md`

Ja existem pastas planejadas para:

- `apps/angular-app`
- `backend/api`
- `backend/java-api-study`
- `database/queries`

O projeto Angular foi iniciado em:

- `apps/angular-app/job-application-tracker`

No Angular, ja foram criadas tres paginas/rotas:

- candidaturas
- cadastro
- detalhes

Tambem ja foram criados arquivos de service e model pelo usuario, mas o conteudo ainda precisa ser revisado.

## Decisoes tecnicas tomadas

- Usar CSS em vez de SCSS no Angular para praticar CSS moderno diretamente.
- Nao usar SSR/SSG no inicio, pois o projeto e mais parecido com dashboard/app interna.
- Usar PostgreSQL em vez de Supabase para praticar backend e banco relacional real.
- Usar Node/Express como API principal para manter velocidade de entrega.
- Usar Java/Spring Boot como estudo complementar, nao como caminho critico.
- Comecar com dados mockados no Angular antes de criar API real.

## O que falta

- Revisar `application.model.ts`.
- Revisar `application.service.ts`.
- Criar dados mockados no service.
- Renderizar a lista de candidaturas no componente `Applications`.
- Implementar formulario em `Register`.
- Implementar detalhes em `Details`.
- Criar API Node/Express.
- Modelar PostgreSQL.
- Escrever queries SQL.
- Criar dashboard Svelte.
- Criar API complementar em Spring Boot.

## Prioridade atual

A prioridade atual e consolidar o fluxo Angular:

```text
Component -> Service -> Model -> Template
```

O proximo passo concreto esta em `docs/next-step.md`.

## Estrategia Git

O repositorio correto deve ser a raiz `Job Application Tracker`.

Motivo:

- precisa versionar `README.md`
- precisa versionar `docs/`
- precisa versionar `database/`
- precisa versionar `backend/`
- precisa versionar `apps/angular-app`
- futuramente precisa versionar `apps/svelte-dashboard`

Nao usar o app Angular isolado como unico repositorio, pois isso deixa documentacao e backend fora do Git.
