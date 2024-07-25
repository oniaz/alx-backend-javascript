const assert = require('assert');
const { calculateNumber } = require('./1-calcul.js');

describe('calculateNumber', function () {
  // Test SUM operation
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.3), 3);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
    });

    it('should return the correct sum with mixed signs', function () {
      assert.strictEqual(calculateNumber('SUM', -1.5, 2.5), 2);
    });
  });

  // Test SUBTRACT operation
  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.4), 4);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.7, -2.4), -4);
    });

    it('should return the correct difference with mixed signs', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.7, 2.4), -8);
    });
  });

  // Test DIVIDE operation
  describe('DIVIDE', function () {
    it('should return the quotient of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.5), 3.3333333333333335);
    });

    it('should handle division by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 0), 'Error');
    });

    it('should handle negative numbers in division', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -9.5, -2.5), 4.5);
    });

    it('should return the correct quotient with mixed signs', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -9.5, 2.5), -3);
    });

    it('should handle division with very large numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1e+10, 1e+5), 100000);
    });

    it('should handle division with very small numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1e-10, 1e-5), 'Error');
    });
  });

  // Test invalid type
  describe('Invalid type', function () {
    it('should return undefined for invalid type', function () {
      assert.strictEqual(calculateNumber('INVALID', 1.2, 2.3), undefined);
    });
  });
});
