# Decisions

## Repository root

Mantive o repositório Git na raiz `Job Application Tracker`.

Fiz isso porque o projeto não é só o app Angular. Também preciso versionar a documentação e o frontend em Svelte. Se o Git ficasse só dentro do Angular, eu perderia a visão do projeto inteiro.

## CSS em vez de SCSS

Decidi usar CSS puro no Angular.

O motivo é simples: quero praticar CSS moderno de forma direta e entender melhor layout, responsividade e organização visual antes de adicionar mais uma camada de abstração.

## Sem SSR/SSG agora

Não vou usar SSR ou SSG nesta fase.

O projeto tem perfil de dashboard/aplicação interna, então o valor disso agora é baixo. Prefiro focar em componentes, rotas, dados, formulários e experiência de uso no front.

## Projeto front-end only

Decidi tirar Java, Spring Boot, PostgreSQL e o restante da trilha de backend do plano ativo.

Neste momento faz mais sentido concentrar energia em entregar um site funcional e apresentável com HTML, CSS, TypeScript, Angular e Svelte, que são justamente as tecnologias da vaga.

## Backend fora do fluxo principal do repositório

Deixei `backend/` fora do fluxo de versionamento ativo.

Hoje ele não faz parte da entrega principal nem do plano da entrevista. Ignorar essa área local evita ruído no Git e mantém o foco no que realmente preciso mostrar.

## Mock data antes de qualquer integração externa

Comecei pelos frontends com model + service/store + dados mockados.

Essa decisão ajudou a validar estrutura, fluxo de dados e a interface inteira antes de depender de API, banco ou autenticação.

## Persistência local no Angular

Transformei o Angular de mock estático em um fluxo funcional com `BehaviorSubject` e `localStorage`.

Isso permite cadastrar novas candidaturas, voltar para a lista e abrir os detalhes do item criado, tudo sem backend. Para o objetivo atual, isso entrega mais valor do que começar uma API.

## Svelte lendo o mesmo localStorage

Fiz o Svelte hidratar do mesmo `localStorage` do Angular, com mock como fallback.

Essa foi a melhor escolha porque os dois frontends agora parecem duas visões do mesmo produto, em vez de dois protótipos desconectados. Também ficou ótimo para explicar arquitetura na entrevista sem envolver backend.

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

## Svelte como dashboard reativo, não como app duplicado

No Svelte eu não repliquei a aplicação inteira do Angular.

Preferi fazer um dashboard mais enxuto, usando stores e estado derivado, porque isso mostra melhor a proposta do framework e evita gastar tempo duplicando páginas que já estavam resolvidas no Angular.

## Linguagem visual consistente entre os dois frontends

Mantive o dashboard em Svelte bem próximo do visual do Angular.

Fiz isso para o projeto parecer um sistema único, mesmo com tecnologias diferentes. Para entrevista, isso ajuda a mostrar critério de produto e não só experimentação técnica solta.

