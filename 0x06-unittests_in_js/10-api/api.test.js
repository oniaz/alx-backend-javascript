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


describe('GET /cart/:id', function () {
  it('should return a status code of 200 when id is a number', function (done) {
    request.get('http://localhost:7865/cart/89', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response message', function (done) {
    request.get('http://localhost:7865/cart/89', (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Payment methods for cart 89');
      done();
    });
  });

  it('should have a content-type of text/html', function (done) {
    request.get('http://localhost:7865/cart/89', (err, res, body) => {
      if (err) return done(err);
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });


  it('should return status code 404 when id is not a number', function (done) {
    request.get('http://localhost:7865/cart/notanumber', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});

describe('GET /available_payments', function () {
  it('should return a status code of 200', function (done) {
    request.get("http://localhost:7865/available_payments", (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });


  it("check correct body content for correct url", function () {
    const option = { json: true };
    const obj = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.deep.equal(obj);
      }
    });
  });

});

describe("Login", function () {
  it("check correct status code for request that's sent properly", function (done) {
    const opt = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        user: 'Mimi'
      }
    };
    request.post(opt, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for request that's sent properly", function (done) {
    const opts = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        user: 'Mimi'
      }
    };
    request.post(opts, function (err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome Mimi');
      }
      done();
    });
  });

  it("check correct status code for request that's not sent properly", function (done) {
    const op = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        usr: 'Mimi'
      }
    };
    request.post(op, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});