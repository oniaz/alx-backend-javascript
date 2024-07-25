const sinon = require('sinon');
// const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber with SUM type', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    const calculateNumberSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWith(calculateNumberSpy, 'The total is: 10');
    // expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    calculateNumberStub.restore();
    calculateNumberSpy.restore();
  });
});
