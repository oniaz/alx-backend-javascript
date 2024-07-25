const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputs are -1 and -2.7', () => {
    assert.strictEqual(calculateNumber(1, 2.7), 4);
  });

  it('should return -3 when inputs are -1.7 and -2', () => {
    assert.strictEqual(calculateNumber(-1.7, -1), -3);
  });

  it('should return -3 when inputs are -1.6 and 1.2', () => {
    assert.strictEqual(calculateNumber(-1.6, 1.2), -1);
  });
});