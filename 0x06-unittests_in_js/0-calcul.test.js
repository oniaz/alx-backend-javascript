const assert = require('assert');
const { calculateNumber } = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(2.5, 3.4), 6);
    assert.strictEqual(calculateNumber(1.2, 4.7), 6);
    assert.strictEqual(calculateNumber(0.9, 0.1), 1);
  });

  it('should handle negative numbers', function () {
    assert.strictEqual(calculateNumber(-1.5, -2.6), -4);
    assert.strictEqual(calculateNumber(-0.4, -0.6), -1);
  });

  // Basic tests
  it('should return 3 for 2.3 and 0.7', function () {
    assert.strictEqual(calculateNumber(2.3, 0.7), 3);
  });

  it('should return 0 for -1.3 and 0.7', function () {
    assert.strictEqual(calculateNumber(-1.3, 0.7), 0);
  });

  // Edge cases
  it('should return 0 for 0 and 0', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 1 for 0.5 and -0.5', function () {
    assert.strictEqual(calculateNumber(0.5, -0.5), 1);
  });

  it('should return 11 for 9.5 and 0.5', function () {
    assert.strictEqual(calculateNumber(9.5, 0.5), 11);
  });

  it('should return -9 for -9.5 and -0.5', function () {
    assert.strictEqual(calculateNumber(-9.5, -0.5), -9);
  });

  // Special cases
  it('should return 5 for 4.7 and 0.3', function () {
    assert.strictEqual(calculateNumber(4.7, 0.3), 5);
  });

  it('should return -5 for -4.7 and -0.3', function () {
    assert.strictEqual(calculateNumber(-4.7, -0.3), -5);
  });

  // Very large numbers
  it('should handle very large numbers', function () {
    assert.strictEqual(calculateNumber(1e+100, 1e+100), 2e+100);
  });

  // Very small numbers
  it('should handle very small numbers', function () {
    assert.strictEqual(calculateNumber(1e-100, 1e-100), 0);
  });
});

