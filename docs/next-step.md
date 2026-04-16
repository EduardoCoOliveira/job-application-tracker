# Next Step

## Objetivo

Fazer a pagina **Applications** exibir uma lista mockada de candidaturas usando Angular.

O objetivo tecnico e praticar o fluxo:

```text
Component -> Service -> Model -> Template
```

## Tarefas

1. Abrir `src/app/models/application.model.ts`.
2. Definir uma interface TypeScript para representar uma candidatura.
3. Abrir `src/app/services/application.service.ts`.
4. Criar uma lista mockada privada com 3 ou 4 candidaturas.
5. Criar um metodo publico `getApplications()` no service.
6. Abrir o componente `Applications`.
7. Injetar o `ApplicationService` no componente.
8. Criar uma propriedade para guardar as candidaturas.
9. Exibir as candidaturas no template `applications.html` usando `@for`.

## Conceitos para pesquisar

- Angular dependency injection com `inject()`.
- Angular control flow com `@for`.
- TypeScript `interface`.
- Diferenca entre component, service e model.

## Regras

- Nao conectar com API ainda.
- Nao criar backend ainda.
- Nao usar PostgreSQL ainda.
- Usar dados mockados por enquanto.
- Manter o foco em Angular e TypeScript.

## Ao finalizar

Enviar para revisao:

- `application.model.ts`
- `application.service.ts`
- `applications.ts`
- `applications.html`

O mentor deve revisar se a estrutura esta correta, se o TypeScript esta bem usado e se o fluxo Angular esta claro.
