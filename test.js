const assert = require('chai').assert;
const request = require('request');

describe('Server Test', function() {
  it('should return "Hello World" on the main page', function(done) {
    request('http://localhost:3000', function(error, response, body) {
      assert.equal(body, 'Hello World');
      done();
    });
  });
});