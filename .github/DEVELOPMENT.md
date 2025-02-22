# Development

## Table of Contents

- [Development](#development)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Configuration](#configuration)
  - [Installing the dependencies](#installing-the-dependencies)
  - [Running the project locally](#running-the-project-locally)
  - [Building the project](#building-the-project)
  - [More DX scripts](#more-dx-scripts)
    - [Prettier](#prettier)
    - [Eslint](#eslint)
    - [Check Types](#check-types)
    - [Stylelint](#stylelint)
    - [Markdown](#markdown)
    - [Check package.json](#check-packagejson)
    - [Cspell](#cspell)
    - [PNPM Dedupe](#pnpm-dedupe)

## Prerequisites

Before you get started, you will need to have the following tools installed on
your machine:

- **[Git](https://git-scm.com/)** (recommended for version control)
- **[Node.js](https://nodejs.org/en/)** (see [.nvmrc](../.nvmrc) for the version)
- **[pnpm](https://pnpm.io/)** (latest version)

> This repository includes a list of suggested VS Code extensions. It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Getting Started

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in the root directory of the
project.

<!-- - `GITHUB_TOKEN`(**required**: The GitHub token for releasing the project). -->

## Installing the dependencies

After you have set the environmental variables in the **`.env`** file, you can
run the project locally by

```shell
git clone https://github.com/timelessco/frappe-ui-react
cd frappe-ui-react
pnpm install
```

This will download and install all the required dependencies for the project.

## Running the project locally

```bash
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page
auto-updates as you edit the file

## Building the project

To build the project to a production environment, you can use the

```bash
pnpm build
```

to build the production-ready version of the project. This will create a
**`.next`** directory with the compiled code and static assets.

Run the above built application locally using

```bash
pnpm start
```

## More DX scripts

> Check for all the below errors in one command using [Turbo Repo](https://turbo.build/repo)

`pnpm lint`

> AutoFix all the linting errors in one command using [Turbo Repo](https://turbo.build/repo)

`pnpm fix`

### Prettier

[Prettier](https://prettier.io) is used to format code. It should be applied automatically when
you save files in VS Code or make a Git commit.

> Check the formatting errors

`pnpm lint:prettier`

> AutoFix the formatting errors

`pnpm fix:prettier`

> This package includes several forms of linting to enforce consistent code
> quality and styling. Each should be shown in VS Code, and can be run manually
> on the command-line.

### Eslint

**[ESLint](https://eslint.org)**: Extends all the necessary rulesets from [eslint-config-canonical](https://github.com/gajus/eslint-config-canonical) for the
Next.js project that lints JavaScript and TypeScript source files

> Check for the linting errors

`pnpm lint:eslint`

> AutoFix the linting errors

`pnpm fix:eslint`

### Check Types

**[TypeScript](https://www.typescriptlang.org)**: Type checks all the files

> Check for type errors

`pnpm lint:types`

### Stylelint

**[Stylelint](https://stylelint.io/)**: Checks all css files

> Check the css linting errors

`pnpm lint:css`

> AutoFix the css linting errors

`pnpm fix:css`

### Markdown

**[Markdownlint](https://github.com/DavidAnson/markdownlint)**: Checks all Markdown files

> Check the markdown linting errors

`pnpm lint:md`

> AutoFix the markdown linting errors

`pnpm fix:md`

### Check package.json

**[npm-package-json-lint](https://npmpackagejsonlint.org/)**: Lints the `package.json` file

> Check the package.json linting errors

`pnpm lint:package-json`

### Cspell

**[cspell](https://cspell.org)**: Spell checks across all source files

> Check the spelling errors

`pnpm lint:spelling`

> AutoFix the spelling errors

`pnpm fix:spelling`

### PNPM Dedupe

**[pnpm dedupe --check](https://pnpm.io/cli/dedupe)**: Lints the `pnpm-lock.yml` file

> Check for unnecessarily duplicated packages

- `pnpm lint:packages`
