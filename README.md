# Bundler Examples

This repository shows the differences for both a library and a web app using
different bundlers. The repository is meant for neutral comparison, meaning it
only uses the bare minimum in each bundler to get the example working. Therefore,
none of these examples will focus on bundle size.

Every example has the output committed to it and the input source code is always the same, except minor changes in importing for Web App bundling.

## Basic Library

💻 Base source code written in TypeScript: https://github.com/dkundel/bundler-examples/tree/master/basic-library

Exposes two functions:

- `pandafy(input: string): string`
- `sleep(time: string): Promise<void>`

Consumes one dependency:

- [`ms`](https://npm.im/ms)

### Bundler Examples:

| Bundler                                                                                                                                                |                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars0.githubusercontent.com/u/12554859?s=30&v=4" /><br/> [`rollup`](https://npm.im/rollup)                                        | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/rollup) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/rollup/basic-library/dist)           |
| 📦 <br> [`microbundle`](https://npm.im/microbundle)                                                                                                    | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/microbundle) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/microbundle/basic-library/dist) |
| <img src="https://next.pikapkg.com/static/img/new-logo1.png" height="30"/> <br /> [`@pika/pack`](https://npm.im/@pika/pack)                            | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/pika) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/pika/basic-library/pkg)                |
| <img src="https://assets.zeit.co/image/upload/front/assets/design/zeit-black-triangle.svg" height="30" /> <br> [`@zeit/ncc`](https://npm.im/@zeit/ncc) | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/ncc) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/ncc/basic-library/dist)                 |

## Basic Web App

💻 Base source code: https://github.com/dkundel/bundler-examples/tree/master/basic-webapp

Uses following technology:

- TypeScript
- SASS

Consumes following dependencies:

- [`date-fns`](https://npm.im/date-fns)
- [`milligram`](https://npm.im/milligram)

## Bundler Examples:

| Bundler                                                                                                                           |                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://avatars1.githubusercontent.com/u/2105791?s=30&v=4" /> <br/> [`webpack`](https://npm.im/webpack)                 | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/webpack) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/webpack/basic-webapp/dist) |
| <img src="https://avatars2.githubusercontent.com/u/32607881?s=30&v=4" /> <br /> [`parcel-bundler`](https://npm.im/parcel-bundler) | [🛠Changes Needed](https://github.com/dkundel/bundler-examples/compare/parcel) <br /> [📦 Output](https://github.com/dkundel/bundler-examples/tree/parcel/basic-webapp/dist)   |

# License

MIT

# Contributors

- Dominik Kundel <hi@dominik.dev>
