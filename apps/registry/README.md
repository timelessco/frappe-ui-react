# Frappe UI React Registry

A design-driven React component collection built with Espresso UI principles and Shadcn compatibility. Offers a distributed library of accessible, beautifully-crafted UI elements.

## Features

- Built on Next.js and TypeScript
- Fully compatible with Shadcn CLI
- Dark/light theme support
- Comprehensive design tokens system
- Component distribution via registry.json
- Built-in documentation and kitchen sink demo

## Getting Started

This is a template for creating a custom registry using Next.js.

```bash
pnpm install
pnpm dev
```

## Project Structure

```bash
.
├── app
│   ├── docs             # Documentation
│   ├── favicon.ico
│   ├── gameplan         # /gameplan block demo
│   ├── kitchen-sink     # /kitchen-sink block demo
│   ├── lms              # /lms block demo
│   ├── page.tsx
├── components
│   └── ui               # Component library
│       ├── avatar-group.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button-group.tsx
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       ├── icon.tsx
│       └── input.tsx
├── icons              # Icon components
├── components/        # React components
├── lib/               # Utility functions
├── public/            # Static files
└── registry.json      # Component registry config
```

## Build and deploy

Build the registry:

```shell
pnpm run registry:build
```

Then build the registry app:

```shell
pnpm run build
```

## Available demos

- [`/gameplan`](https://frappe-ui-react.tmls.dev/gameplan) - showcases the Frappe Gameplan app block
- [`/lms`](https://frappe-ui-react.tmls.dev/lms) - showcases the Frappe LMS app block
- [`/kitchen-sink`](https://frappe-ui-react.tmls.dev/kitchen-sink) - showcases all components

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to learn more about:

- Registry configuration
- Component development
- Distribution setup
- CLI usage

## License

MIT License - See [LICENSE](LICENSE) for details.
