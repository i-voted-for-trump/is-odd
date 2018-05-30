'use strict';

require('mocha');
const assert = require('assert');
const isOdd = require('./');

describe('isOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(!isOdd('2'));
    assert(isOdd('1'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isOdd(), /expected a number/);
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});
