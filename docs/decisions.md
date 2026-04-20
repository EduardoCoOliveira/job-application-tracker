# Decisions

## Repository root

Mantive o repositório Git na raiz `Job Application Tracker`.

Fiz isso porque o projeto não é só o app Angular. Também preciso versionar a documentação, o backend, os scripts SQL e o futuro dashboard em Svelte. Se o Git ficasse só dentro do Angular, eu perderia a visão do projeto inteiro.

## CSS em vez de SCSS

Decidi usar CSS puro no Angular.

O motivo é simples: quero praticar CSS moderno de forma direta e entender melhor layout, responsividade e organização visual antes de adicionar mais uma camada de abstração.

## Sem SSR/SSG agora

Não vou usar SSR ou SSG nesta fase.

O projeto tem perfil de dashboard/aplicação interna, então o valor de SSR agora é baixo. Prefiro focar primeiro em componentes, rotas, dados, formulários e integração com API.

## PostgreSQL + API própria

Troquei a ideia inicial de Supabase por PostgreSQL com API própria.

Isso deixa o projeto mais forte para entrevista porque me força a praticar modelagem relacional, SQL de verdade e construção de backend com mais controle da arquitetura.

## Node/Express como caminho principal

A primeira API vai ser em Node.js + Express.

Escolhi isso porque é o caminho mais rápido para sair do mock e chegar em um produto funcional. Depois eu comparo com Java/Spring Boot com mais calma, sem travar a entrega principal.

## Spring Boot como trilha complementar

Java/Spring Boot entrou no projeto como estudo complementar, não como dependência da primeira entrega.

A ideia é usar o mesmo domínio do projeto para estudar uma arquitetura mais enterprise e conseguir explicar diferenças de abordagem em entrevista.

## Mock data antes de backend real

Comecei o Angular com model + service + dados mockados.

Essa decisão ajuda a validar a estrutura da interface e o fluxo entre component, service e template antes de depender de API, banco ou autenticação.

## Valores internos em inglês

Os valores internos de status e modalidade ficaram em inglês.

Fiz isso para evitar problemas de encoding e também para manter o código mais estável. Se eu quiser, depois posso mapear esses valores para rótulos em português na interface sem mexer no domínio interno.

## Referência visual separada da implementação real

Mantive `src/templates` apenas como referência visual.

Isso evita misturar HTML estático com o código real da aplicação. A referência serve como alvo de design; a implementação real acontece nos componentes Angular.

## Próxima direção visual primeiro, lógica depois

A partir do ponto atual, a prioridade imediata é transformar a lista crua de candidaturas em uma página visualmente fiel ao template de referência.

A lógica básica já prova que o fluxo de dados funciona. Agora faz mais sentido evoluir layout, estrutura e CSS antes de partir para backend.
