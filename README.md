# prettier-config

A sharable Prettier config for the Mann-Conomy Project.

[![npm version](https://img.shields.io/npm/v/@mann-conomy/prettier-config?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/prettier-config)
[![npm downloads](https://img.shields.io/npm/d18m/@mann-conomy/prettier-config?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/prettier-config)
[![Node.js version](https://img.shields.io/node/v/@mann-conomy/prettier-config?style=flat-square&logo=nodedotjs)](https://nodejs.org/en/about/releases/)
[![GitHub actions](https://img.shields.io/github/actions/workflow/status/Mann-Conomy/prettier-config/test.yml?branch=main&style=flat-square&logo=github&label=test)](https://github.com/Mann-Conomy/prettier-config/blob/main/.github/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/Mann-Conomy/prettier-config?style=flat-square&logo=github)](https://github.com/Mann-Conomy/prettier-config/blob/main/LICENSE)

## Installation

Using [npm](https://www.npmjs.com/package/@mann-conomy/prettier-config):

```bash
$ npm install --save-dev @mann-conomy/prettier-config
```

Using [yarn](https://yarnpkg.com/package/@mann-conomy/prettier-config):

```bash
$ yarn add --dev @mann-conomy/prettier-config
```

## Usage

```js
import prettierConfig from "@mann-conomy/prettier-config";

const config = {
    ...prettierConfig,
    singleQuote: true
};

export default config;
```

For reference, you can find the complete [Prettier config here](https://github.com/Mann-Conomy/prettier-config/blob/main/prettier.config.js).

## License

[MIT](LICENSE)

Copyright 2024, The Mann-Conomy Project
