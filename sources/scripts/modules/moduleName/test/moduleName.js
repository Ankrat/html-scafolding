var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('test setup', function() {
  it('should work', function() {
    expect(true).to.be.true;
  });
});

describe('moduleName', function() {

    process.env.dev = true;
    var moduleName = require('../moduleName.js');

    it('Navigation properties Existence:', function(){
        expect(moduleName).to.exist;
    });
});