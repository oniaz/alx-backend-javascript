const request = require('request');
const { expect } = require('chai');

describe('GET /', function () {
  it('should return a status code of 200', function (done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response message', function (done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have a content-type of text/html', function (done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
