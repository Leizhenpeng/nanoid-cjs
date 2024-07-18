# nanoid-cjs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

> Latest nanoid, but support CJS for Node.js

Nanoid made breaking changes in version 4 and [no longer supports CJS imports](https://github.com/ai/nanoid/issues/365).

This is a disaster for developers using older versions of Node.js, especially those working with NestJS.

Here, we use the Vercel NCC compiler to compile it, perfectly supporting CJS syntax.


```javascript
import { nanoid } from 'nanoid-cjs'
model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
```

```javascript
const { nanoid } = require('nanoid-cjs');
nanoid()  //=> "V1StGXR8_Z5jdHi6B-myT"
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [leizhenpeng](https://github.com/leizhenpeng)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nanoid-cjs?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/nanoid-cjs
[npm-downloads-src]: https://img.shields.io/npm/dm/nanoid-cjs?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/nanoid-cjs
[bundle-src]: https://img.shields.io/bundlephobia/minzip/nanoid-cjs?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=nanoid-cjs
[license-src]: https://img.shields.io/github/license/leizhenpeng/nanoid-cjs.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/leizhenpeng/nanoid-cjs/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/nanoid-cjs
