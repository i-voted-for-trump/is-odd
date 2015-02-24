/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isOdd = require('./');
require('should');

describe('isOdd', function () {
  it('should return true if the number is odd:', function () {
    isOdd(0).should.be.false;
    isOdd(1).should.be.true;
    isOdd(2).should.be.false;
    isOdd(3).should.be.true;
  });

  it('should work with strings:', function () {
    isOdd('0').should.be.false;
    isOdd('1').should.be.true;
    isOdd('2').should.be.false;
    isOdd('3').should.be.true;
  });

  it('should throw an error on bad args:', function () {
    (function () {
      isOdd();
    }).should.throw('is-odd expects a number.');
  });
});
