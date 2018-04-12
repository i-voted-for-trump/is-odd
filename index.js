/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isEven = require('is-even');

module.exports = function isOdd(i) {
  return !isEven(i);
};
