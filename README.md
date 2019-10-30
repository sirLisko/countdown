# Fancy Countdown [![Test Status][test-image]][test-url] [![Build Status][build-image]][build-url]

## Install dependencies

```bash
yarn
```

## Run it locally

```bash
yarn start
```

## The stack

- WebApp scaffolded via [Create React App](https://github.com/facebook/create-react-app)
- Typecheck and superset of JS by [Typescript](https://www.typescriptlang.org/)
- Check the syntax and formatting of the JS, via [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/)
- Unit tests with [Jest](https://jestjs.io)
- Dependencies management using [Yarn](https://yarnpkg.com/lang/en/)
- CI using [Github Actions](https://github.com/features/actions)
- Style components with [Emotion](https://emotion.sh) using [Babel Macros](https://emotion.sh/docs/babel-macros)
- Hosted on [Netlify](https://netlify.com)

### Example

<https://fancy-countdown.netlify.com/?t=2020-01-11T00:00:00&m=to%20the%20next%20year&f=h,m,s>

[test-image]: https://github.com/sirlisko/countdown/workflows/Test%20CI/badge.svg
[test-url]: https://github.com/sirLisko/countdown/actions
[build-image]: https://api.netlify.com/api/v1/badges/fbe6d19d-38dd-4cac-ba31-a39bc9fa5a07/deploy-status
[build-url]: https://app.netlify.com/sites/fancy-countdown/deploys
