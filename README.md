# Bundler Examples

This repository shows the differences for both a library and a web app using
different bundlers. The repository is meant for neutral comparison, meaning it
only uses the bare minimum in each bundler to get the example working. Therefore,
none of these examples will focus on bundle size.

Every example has the output committed to it and the input source code is always the same.

## Basic Library

💻 Base source code written in TypeScript: https://github.com/dkundel/bundler-examples/tree/master/basic-library

Exposes two functions:

- `pandafy(input: string): string`
- `sleep(time: string): Promise<void>`

Consumes one dependency:

- [`ms`](https://npm.im/ms)

### Bundler Examples:

- [`microbundle`](https://npm.im/microbundle):
  - [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/microbundle)
  - [📦 Output](https://github.com/dkundel/bundler-examples/tree/microbundle/basic-library/dist)
- [`@pika/pack`](https://npm.im/@pika/pack):
  - [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/pika)
  - [📦 Output](https://github.com/dkundel/bundler-examples/tree/pika/basic-library/pkg)
- [`@zeit/ncc`](https://npm.im/@zeit/ncc):
  - [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/ncc)
  - [📦 Output](https://github.com/dkundel/bundler-examples/tree/ncc/basic-library/dist)

## Basic Web App

💻 Base source code: https://github.com/dkundel/bundler-examples/tree/master/basic-webapp

Uses following technology:

- TypeScript
- SASS

Consumes following dependencies:

- [`date-fns`](https://npm.im/date-fns)
- [`milligram`](https://npm.im/milligram)

## Bundler Examples:

- [`parcel-bundler`](https://npm.im/@zeit/ncc):
  - [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/parcel)
  - [📦 Output](https://github.com/dkundel/bundler-examples/tree/parcel/basic-webapp/dist)

# License

MIT

# Contributors

- Dominik Kundel <hi@dominik.dev>
