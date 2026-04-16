# Architecture

## Visao geral

O projeto **Job Application Tracker** foi planejado como uma aplicacao full-stack com dois frontends, um backend principal em Node.js/Express, um banco PostgreSQL e um modulo complementar de estudo em Java/Spring Boot.

A proposta e permitir o gerenciamento de candidaturas de emprego, incluindo cadastro de vagas, acompanhamento do status do processo seletivo, organizacao de proximas acoes e visualizacao de metricas.

## Estrutura da aplicacao

A arquitetura esta dividida em cinco partes:

### 1. Angular

O Angular sera utilizado como aplicacao principal do projeto.

Responsabilidades:
- Estruturar as paginas principais
- Implementar formularios e fluxo de cadastro/edicao
- Consumir a API com `HttpClient`
- Organizar a aplicacao com `components`, `services` e `models`
- Trabalhar com TypeScript de forma explicita e estruturada

O uso do Angular neste contexto destaca sua abordagem mais opinativa, robusta e orientada a escalabilidade.

### 2. Svelte

O Svelte sera utilizado para o dashboard interativo da aplicacao.

Responsabilidades:
- Exibir metricas de forma reativa
- Implementar visualizacoes rapidas, como kanban ou paineis de status
- Utilizar `stores` para gerenciamento de estado
- Explorar componentizacao com menos boilerplate

O uso do Svelte neste modulo destaca sua simplicidade, reatividade nativa e velocidade no desenvolvimento de interfaces dinamicas.

### 3. API Node.js + Express

Esta sera a API principal da primeira entrega do projeto.

Responsabilidades:
- Expor endpoints HTTP para Angular e Svelte
- Validar dados recebidos
- Organizar regras de negocio basicas
- Realizar operacoes de leitura e escrita no PostgreSQL

Essa camada desacopla a interface do banco de dados e permite que os dois frontends compartilhem a mesma fonte de dados.

### 4. PostgreSQL + SQL

O PostgreSQL sera utilizado como banco de dados relacional principal.

Responsabilidades:
- Armazenar candidaturas, empresas, status e observacoes
- Garantir consistencia dos dados
- Permitir consultas estruturadas para metricas e filtros
- Servir como base pratica para estudo de SQL

O estudo de SQL ficara ligado ao proprio dominio do sistema, especialmente em:

- filtros por status, empresa, stack e prioridade
- ordenacao por data, etapa ou proximas acoes
- contagens agregadas do dashboard
- consultas analiticas com `GROUP BY`, `COUNT`, `AVG` e `JOIN`

### 5. Java + Spring Boot

O modulo `java-api-study` nao sera o backend principal da primeira fase. Ele funcionara como trilha complementar de estudo.

Responsabilidades:
- Reproduzir alguns endpoints do dominio em Spring Boot
- Estudar arquitetura em camadas com `controller`, `service` e `repository`
- Explorar integracao entre Java e PostgreSQL
- Comparar uma API leve em Express com uma arquitetura mais estruturada em Spring

Essa escolha permite estudar Java/Spring sem comprometer a entrega principal focada em Angular e Svelte.

## Fluxo de dados principal

O fluxo principal da aplicacao sera:

1. O usuario interage com a interface em Angular ou Svelte
2. O frontend faz requisicoes HTTP para a API Node/Express
3. A API processa a requisicao e consulta o PostgreSQL
4. O banco retorna os dados para a API
5. A API devolve a resposta para o frontend
6. A interface atualiza o estado e renderiza os dados

## Fluxo de estudo complementar

Em paralelo a entrega principal, o projeto tambem servira para:

1. Modelar o banco com SQL real
2. Criar queries de filtro e analytics em `database/queries`
3. Reimplementar endpoints selecionados em Spring Boot
4. Comparar escolhas arquiteturais entre Express e Spring

## Organizacao do repositorio

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

## Decisao arquitetural

A escolha por usar Angular e Svelte no mesmo projeto tem dois objetivos principais:

- consolidar conhecimentos praticos em dois frameworks modernos
- permitir comparacao direta entre estilos diferentes de desenvolvimento frontend

A escolha por manter Node/Express como backend principal e Spring Boot como backend complementar tambem tem dois objetivos:

- garantir velocidade de entrega nas primeiras etapas
- estudar uma arquitetura Java mais tradicional sem perder foco nas habilidades principais da vaga

## Ordem recomendada de implementacao

1. Estruturar e documentar o repositorio
2. Iniciar Angular e definir as primeiras telas
3. Iniciar Svelte e montar o dashboard base
4. Criar a API Node/Express
5. Modelar o banco e praticar SQL
6. Implementar uma versao reduzida do backend em Spring Boot
