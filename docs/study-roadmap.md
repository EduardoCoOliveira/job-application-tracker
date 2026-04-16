# Study Roadmap

## Objetivo

Este roadmap organiza o estudo dentro do projeto para que a entrega principal avance sem perder espaco para SQL, Java e Spring Boot.

A regra do projeto sera:

- primeiro consolidar o frontend e a integracao principal
- depois aprofundar banco, SQL e backend
- por fim usar Java/Spring como comparacao arquitetural

## Frentes de estudo

### 1. Frontend principal

Foco inicial:
- Angular com TypeScript
- Components, Services e `HttpClient`
- Svelte com reatividade, stores e componentizacao
- CSS responsivo e consistente

Objetivo:
- construir a parte mais visivel e mais alinhada com a vaga

### 2. Banco e SQL

Foco intermediario:
- modelagem relacional
- criacao de tabelas e seeds
- filtros com `WHERE`, `ORDER BY` e `JOIN`
- metricas com `COUNT`, `GROUP BY` e agregacoes

Objetivo:
- aprender SQL dentro de um problema real do sistema

### 3. Java e Spring Boot

Foco complementar:
- estrutura de projeto Spring Boot
- `controller`, `service`, `repository` e `entity`
- integracao com PostgreSQL
- comparacao entre Express e Spring

Objetivo:
- estudar backend Java sem trocar o backend principal cedo demais

## Plano gradual

### Etapa 1. Base do projeto

Fazer:
- organizar o repositorio
- escrever README e documentacao inicial
- definir o escopo principal e o escopo complementar

Saida esperada:
- repositorio claro e profissional

### Etapa 2. Angular primeiro

Fazer:
- iniciar a aplicacao Angular
- criar as primeiras paginas e componentes
- desenhar a estrutura de `services` e `models`

Foco de entrevista:
- arquitetura
- TypeScript
- organizacao de componentes

### Etapa 3. Svelte depois

Fazer:
- iniciar o dashboard em Svelte
- montar componentes pequenos e reativos
- criar stores para estado compartilhado

Foco de entrevista:
- reatividade nativa
- menos boilerplate
- diferencas para Angular

### Etapa 4. API Node/Express

Fazer:
- criar endpoints iniciais
- organizar rotas, controllers e acesso ao banco
- preparar contrato de dados para os dois frontends

Foco de entrevista:
- integracao cliente-servidor
- separacao de responsabilidades

### Etapa 5. PostgreSQL e SQL

Fazer:
- modelar tabelas
- criar `schema.sql` e `seed.sql`
- escrever queries em `database/queries/filters.sql`
- escrever queries em `database/queries/analytics.sql`

Foco de entrevista:
- modelagem relacional
- consultas reais do dominio
- uso de SQL para filtros e metricas

### Etapa 6. Java/Spring Boot

Fazer:
- iniciar `backend/java-api-study`
- implementar poucos endpoints do dominio
- ligar ao PostgreSQL
- comparar a mesma responsabilidade em Express e Spring

Foco de entrevista:
- arquitetura em camadas
- ecossistema Java
- comparacao de stacks

## Regra de prioridade

Quando houver conflito de tempo, a prioridade sera:

1. Angular
2. Svelte
3. API Node/Express
4. PostgreSQL e SQL
5. Java/Spring Boot

## Resultado esperado ao final

Ao final do projeto, a expectativa e ter:

- um frontend principal em Angular
- um dashboard complementar em Svelte
- uma API principal em Node/Express
- banco PostgreSQL com queries do dominio
- uma base inicial em Java/Spring para estudo comparativo

Esse formato permite entregar algo funcional e, ao mesmo tempo, construir repertorio tecnico para entrevista.
