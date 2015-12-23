var request = require('superagent');
var expect = require('expect.js');

describe('Server Test', function () {
  it (function(done){
    request.post('localhost:8080').end(function(res){
      expect(res).to.exist;
      expect(res.status).to.equal(200);
      done();
    });
  });
});
