const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
