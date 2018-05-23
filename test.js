/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var isOdd = require('./');

describe('isOdd', function() {

  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(isOdd(1));
    assert(!isOdd(2));
    assert(isOdd(3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(isOdd('1'));
    assert(!isOdd('2'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error on bad args:', function() {
    assert.throws(function() {
      isOdd();
    }, /is-odd expects a number\./);
  });

  it('should throw an error on not-integers:', function() {
    assert.throws(function() {
      isOdd('1.1e0');
    }, /is-odd expects an integer\./);
  });
});
