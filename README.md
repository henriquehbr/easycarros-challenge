# easycarros-challenge

> Desafio técnico para desenvolvedor Front-End na Easy Carros

## Índice

- [easycarros-challenge](#easycarros-challenge)
  - [Índice](#índice)
  - [Instalação](#instalação)
  - [Execução](#execução)
  - [Funcionalidades](#funcionalidades)
  - [Detalhes técnicos](#detalhes-técnicos)
    - [Por que?](#por-que)

## Instalação

Antes de tudo, é necessário clonar o repositório do GitHub

**HTTPS:**

```
$ git clone https://github.com/henriquehbr/up-challenge.git
```

**SSH:**

```
$ git clone git@github.com:henriquehbr/up-challenge.git
```

Após instalado, navegue até o diretório do repositório recém-clonado, e instale as dependências do projeto

Yarn:

```
$ yarn
```

npm:

```
$ npm install
```

## Execução

Para inicializar o servidor de desenvolvimento, execute o comando `start` presente no `package.json`

Yarn:

```
$ yarn start
```

npm:

```
$ npm run start
```

## Funcionalidades

- ➕ Adicionar → permite a adição de serviços, incluindo o nome, data de registro e placa do veículo
- ➖ Remover → oferece suporte a remoção de serviços préviamente adicionados
- 📰 Visualizar → possue um painel no qual todos os serviços adicionados podem ser gerenciados, contendo todos os seus dados, juntamente a capacidade de editá-los e finalizá-los
- 💾 Armazenamento → a aplicação persiste os dados entre sessões fazendo o uso da API `localStorage` do browser
- ✏️ Editar → permite a edição dos serviços, podendo definir a data de execução do serviço em questão
- 📱 Mobile → a página é completamente responsiva e pode ser acessada na grande maioria dos dispositivos móveis
- 📝 Documentação → o projeto contém uma descrição detalhada contando mais sobre o CRUD em si, como fazer build, executá-lo, e sobre as estratégias usadas durante o desenvolvimento da página.

## Detalhes técnicos

A stack utilizada para o desenvolvmento do projeto é composta pelo framework [Svelte](https://svelte.dev), e pelo bundler [Snowpack](https://www.snowpack.dev/)
### Por que?

- Svelte

> *"Aplicações web cibernéticamente otimizadas"* - https://svelte.dev

O Svelte é uma nova abordagem radical para criar interfaces de usuário. Enquanto estruturas tradicionais como React e Vue realizam a maior parte de seu trabalho no navegador, o Svelte muda esse trabalho para uma etapa de compilação que acontece quando você cria seu aplicativo.

Em vez de usar técnicas como a diferenciação virtual do DOM, o Svelte escreve um código que atualiza cirurgicamente o DOM quando o estado do seu aplicativo é alterado.

- Snowpack

> *"A ferramenta de criação de front-end mais rápida"* - https://www.snowpack.dev/

Snowpack é uma ferramenta de criação de front-end ultrarrápida, projetada para a web moderna. É uma alternativa a bundlers mais pesados ​​e complexos como webpack ou Parcel em seu fluxo de trabalho de desenvolvimento. O Snowpack aproveita o sistema de módulo nativo do JavaScript (conhecido como ESM) para evitar trabalho desnecessário e permanecer rápido, independentemente do tamanho do seu projeto.
