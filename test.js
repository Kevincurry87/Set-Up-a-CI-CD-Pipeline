const assert = require('chai').assert;
const fetch = require('node-fetch');

describe('Server Test', function() {
  it('should return "Hello World" on the main page', async function() {
    const response = await fetch('http://localhost:3000');
    const body = await response.text();
    assert.equal(body, 'Hello World');
  });
});