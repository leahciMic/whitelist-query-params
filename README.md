# Whitelist query params [![Build Status](https://travis-ci.org/leahciMic/whitelist-query-params.svg?branch=master)](https://travis-ci.org/leahciMic/set-query-params)

> Filter url query parameters with a whitelist

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
npm i whitelist-query-params

# Or with Yarn
yarn add whitelist-query-params
```

## Usage

```js

import whitelistQueryParams from 'whitelist-query-params';

const url = whitelistQueryParams('http://www.example.org/?foo=bar&baz=qux', ['foo']);

console.log(url); // http://www.example.org/?foo=bar
```

## Contributing

See [the contribute file](CONTRIBUTING.md)!

PRs accepted.

## License

[MIT © Michael Leaney](LICENSE)
