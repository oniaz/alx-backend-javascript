const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  // Test SUM operation
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1.2, 2.3)).to.equal(6);
    });

    it('should handle negative numbers', function () {
      expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);
    });

    it('should return the correct sum with mixed signs', function () {
      expect(calculateNumber('SUM', -1.5, 2.5)).to.equal(2);
    });
  });

  // Test SUBTRACT operation
  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.7, 2.4)).to.equal(4);
    });

    it('should handle negative numbers', function () {
      expect(calculateNumber('SUBTRACT', -5.7, -2.4)).to.equal(-4);
    });

    it('should return the correct difference with mixed signs', function () {
      expect(calculateNumber('SUBTRACT', -5.7, 2.4)).to.equal(-8);
    });
  });

  // Test DIVIDE operation
  describe('DIVIDE', function () {
    it('should return the quotient of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2.5)).to.equal(3.3333333333333335);
    });

    it('should handle division by zero', function () {
      expect(calculateNumber('DIVIDE', 5.7, 0)).to.equal('Error');
    });

    it('should handle negative numbers in division', function () {
      expect(calculateNumber('DIVIDE', -9.5, -2.5)).to.equal(4.5);
    });

    it('should return the correct quotient with mixed signs', function () {
      expect(calculateNumber('DIVIDE', -9.5, 2.5)).to.equal(-3);
    });

    it('should handle division with very large numbers', function () {
      expect(calculateNumber('DIVIDE', 1e+10, 1e+5)).to.equal(100000);
    });

    it('should handle division with very small numbers', function () {
      expect(calculateNumber('DIVIDE', 1e-10, 1e-5)).to.equal('Error');
    });
  });

  // Test invalid type
  describe('Invalid type', function () {
    it('should return undefined for invalid type', function () {
      expect(calculateNumber('INVALID', 1.2, 2.3)).to.equal(undefined);
    });
  });
});
