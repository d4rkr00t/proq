# proq

[![npm](https://img.shields.io/npm/v/proq.svg)](https://www.npmjs.com/package/proq)
[![license](https://img.shields.io/npm/l/proq.svg)](http://opensource.org/licenses/MIT)
[![github-issues](https://img.shields.io/github/issues/d4rkr00t/proq.svg)](https://github.com/d4rkr00t/proq/issues)
[![travis-status](https://img.shields.io/travis/d4rkr00t/proq.svg)](https://travis-ci.org/d4rkr00t/proq)
[![coveralls](https://img.shields.io/coveralls/d4rkr00t/proq.svg)](https://coveralls.io/github/d4rkr00t/proq)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Promise Sequence Module.

Terse and simple promise sequences for thouse who don't want to reinvent the wheel like i did :rocket: :whale: :boom:.

## Install

```
npm i proq
npm i --save proq // to put it into your package.json
```

## Usage

```js
import proq from 'proq';

function magic1(params) {
  // make some magic here ...
  return new Promise(resolve => resolve(/* some result of our magic above */));
}

/* params is result of magic from magic1 */
function magic2(params) {
  // more magic here ...
  return new Promise(resolve => resolve(/* some result of our magic2 */));
}

proq([magic1, magic2], { unicorns: 10 } /* initial params */)
  .then(resultOfAllMagic => console.log(resultOfAllMagic));

```

Functions ```magic1``` and ```magic2``` will be called sequentially and result of each one will be passed to next one.

## Author

Stanislav Sysoev d4rkr00t@gmail.com https://github.com/d4rkr00t

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributing are highly welcome! This repos is commitizen friendly — please read about it [here](http://commitizen.github.io/cz-cli/).
