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
});
