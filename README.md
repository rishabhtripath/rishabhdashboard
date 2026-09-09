# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Rishabh Tripathi Portfolio

A React and Vite portfolio for Rishabh Tripathi, focused on frontend development, digital experiences, and selected live projects.

## Development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
├── components/
│   └── layout/          # Shared shell components such as site navigation
├── config/              # Navigation and app-level configuration
├── data/                # Portfolio content, project links, and skills
├── sections/            # Page-level portfolio sections
├── styles/              # Global CSS and design tokens
├── App.jsx              # App shell and section composition
└── main.jsx             # React entry point
public/
├── favicon.svg
├── logo.svg
├── robots.txt
└── sitemap.xml
```

Portfolio content can be updated in `src/data/` without changing layout components. Shared navigation belongs in `src/components/layout/`, while new portfolio screens should be added to `src/sections/`.
