# Fancy Countdown [![Test Status][test-image]][test-url] [![Build Status][build-image]][build-url]

## Install dependencies

> this project is using [pnpm](https://pnpm.io/) as package manager but it should work with npm as well

```bash
pnpm install
```

## Run it locally

```bash
pnpm start
```

## The stack

- WebApp scaffolded via [Vite](https://vitejs.dev/)
- Typecheck and superset of JS by [Typescript](https://www.typescriptlang.org/)
- Check the syntax and formatting of the JS, via [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/)
- Unit tests with [Vitest](https://vitest.dev/)
- CI using [Github Actions](https://github.com/features/actions)
- Styling [Tailwind CSS](https://tailwindcss.com/)
- UI Components [Shadcn/ui](https://ui.shadcn.com)
- Hosted on [Netlify](https://netlify.com)

It's possible to [check out the v1 of the project](https://github.com/sirLisko/countdown/tree/v0.1), running Create React App, Jest, Emotion and Babel Macros.

### Example

<https://countdown.sirlisko.com/?f=h,m,s&m=new%20year%27s%20eve%202020&t=2020-01-01T00%3A00>

[test-image]: https://github.com/sirlisko/countdown/workflows/Test%20CI/badge.svg
[test-url]: https://github.com/sirLisko/countdown/actions
[build-image]: https://api.netlify.com/api/v1/badges/fbe6d19d-38dd-4cac-ba31-a39bc9fa5a07/deploy-status
[build-url]: https://app.netlify.com/sites/fancy-countdown/deploys
