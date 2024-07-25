const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let theSpy;

  beforeEach(function () {
    theSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    theSpy.restore();
  });

  it('should log "The total is: 120" with 100 and 20 as arguments', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(theSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" with 10 and 10 as arguments', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(theSpy, 'The total is: 20');
  });
});
