var expect    = require('chai').expect;
var should    = require('chai').should();
var Square    = require('../code/square.js');

describe('Square', function() {
  var square = new Square(4,4);

  it('to have the correct height', function() {
    expect(square.height).to.equal(4);
  });

  it('to have the correct width', function() {
    expect(square.width).to.equal(4);
  });

  it('to have a method named #getArea', function() {
    should.exist(square.getArea());
  });

   it('to have the correct area', function() {
    expect(square.getArea()).to.equal(16);
  });

});