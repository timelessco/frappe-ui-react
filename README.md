<div align="center">
 <h1 align="center"><a aria-label="Frappe UI React" href="https://github.com/timelessco/frappe-ui-react">Frappe UI React</a></h1>
 <p align="center">A React component library implementing Frappe's Espresso UI design system.</p>
</div>

<p align="center">
 <a href="https://github.com/timelessco/frappe-ui-react/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
 </a>
 <img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
 <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
 <a href="#contributors" target="_blank">
  <!-- prettier-ignore-start -->
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 3" src="https://img.shields.io/badge/all_contributors-3-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  <!-- prettier-ignore-end -->
 </a>
</p>

## Overview

frappe-ui-react is a comprehensive React component library that implements Frappe's Espresso UI design system. While Frappe officially uses Vue.js internally, this library bridges the gap for React developers in the Frappe ecosystem who want to maintain consistent design language across their applications.

## Why This Library?

### Community Need

The Frappe ecosystem provides excellent tools including a [React SDK](https://github.com/The-Commit-Company/frappe-react-sdk) for backend interactions, but lacks official React UI components. This forces React developers to either:

- Build UI components from scratch
- Use inconsistent UI libraries that don't match Frappe's design language
- Switch to Vue.js (which might not be feasible for existing React projects)

### Design Consistency

This library ensures React applications can maintain the same look and feel as official Frappe products which used [frappe-ui](https://github.com/frappe/frappe-ui) like:

- Gameplan
- Frappe Cloud
- Helpdesk

## Features

- Complete set of base components (Buttons, Inputs, etc.)
- Fully typed with TypeScript
- Responsive and accessible components
- Comprehensive documentation and examples

### Developer Experience

- Type-safe components with TypeScript
- Follows [Frappe's Espresso UI](https://www.figma.com/community/file/1407648399328528443) specifications
- Drop-in components matching Frappe's Vue components

## Technical Details

### Built With

- React 18+
- TypeScript
- Tailwind CSS
- Radix UI (for accessible primitives)

### Design System

Components are built following the [Espresso UI Design System](https://www.figma.com/community/file/1407648399328528443) specifications, ensuring:

- Consistent spacing
- Color schemes
- Typography
- Component behavior
- Accessibility patterns

## Structure

```txt
.
└── apps
    └── registry (shadcn component registry with nextjs website)
```

## Apps

- [apps/registry](./apps/registry): Next.js, Typescript [README](./apps/registry/README.md) | [CHANGELOG](./apps/registry/CHANGELOG.md)

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then
[`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md). Thanks! 💖

## License

MIT License - See [LICENSE](LICENSE) for details.

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://navinmoorthy.me/"><img src="https://avatars.githubusercontent.com/u/39694575?v=4?s=100" width="100px;" alt="Navin Moorthy"/><br /><sub><b>Navin Moorthy</b></sub></a><br /><a href="https://github.com/timelessco/frappe-ui-react/commits?author=navin-moorthy" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://mcnaveen.com"><img src="https://avatars.githubusercontent.com/u/8493007?v=4?s=100" width="100px;" alt="Naveen MC"/><br /><sub><b>Naveen MC</b></sub></a><br /><a href="#maintenance-mcnaveen" title="Maintenance">🚧</a> <a href="https://github.com/timelessco/frappe-ui-react/commits?author=mcnaveen" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bento.me/iamkarthik"><img src="https://avatars.githubusercontent.com/u/35562287?v=4?s=100" width="100px;" alt="Karthik"/><br /><sub><b>Karthik</b></sub></a><br /><a href="#maintenance-karthik-b-06" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->
<sub>

> 💙 This package uses template files from
> [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s
> [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package).
