const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should add two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 3.4, 4.5), 8);
  });

  it('should subtract two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 5.5), -5);
  });

  it('should divide two numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, 4.5), 0.4);
  });

  it('should return Error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 6.7, 0), 'Error');
  });

});