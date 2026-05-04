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

Essa decisão ajudou a validar estrutura, fluxo de dados e a interface inteira antes de depender de API, banco ou autenticação.

## Valores internos em inglês

Os valores internos de status e modalidade ficaram em inglês.

Fiz isso para evitar problemas de encoding e também para manter o código mais estável. Depois posso mapear tudo para rótulos em português na interface sem mexer no domínio interno.

## Referência visual separada da implementação real

Mantive `src/templates` apenas como referência visual.

Isso evitou misturar HTML estático com o código real da aplicação. A referência serviu como alvo visual, e a implementação real ficou organizada nos componentes Angular.

## Shell compartilhado no Angular

Decidi colocar a navegação lateral e a base visual do app em um shell compartilhado no `app.html`.

Isso deixou as três telas com aparência consistente e evitou repetição desnecessária de layout em cada componente.

## Mock data mais rico para fortalecer a interface

Ampliei o model e os dados mockados com datas, resumo, notas, origem, contato e timeline.

Fiz isso porque a interface de detalhes e a tabela principal ficavam pobres demais com o model inicial. Para uma entrega de portfólio, valia mais ter um domínio mockado convincente do que manter dados mínimos demais.

## Filtros reais na página principal

A lista de candidaturas não ficou só estática. Adicionei busca, filtros e ordenação no próprio front.

Isso melhora a percepção de produto pronto e também mostra melhor uso de TypeScript, Angular forms e transformação de dados na camada de apresentação.

## Próximo passo passou a ser Svelte

Como a interface Angular já ficou em um estado apresentável, o próximo investimento mais valioso é abrir a frente de Svelte.

Isso ajuda a cobrir o requisito da vaga sem mexer no que já está estável no Angular.
