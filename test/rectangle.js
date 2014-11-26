var expect    = require('chai').expect;
var should    = require('chai').should();
var Rectangle = require('../code/rectangle.js');

describe('Rectangle', function() {
  var rectangle = new Rectangle(4,5);

  it('to have the correct height', function() {
    expect(rectangle.height).to.equal(4);
  });

  it('to have the correct width', function() {
    expect(rectangle.width).to.equal(5);
  });

  it('to have a method named #getArea', function() {
    should.exist(rectangle.getArea());
  });

   it('to have the correct area', function() {
    expect(rectangle.getArea()).to.equal(20);
  });
});