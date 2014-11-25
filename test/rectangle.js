var expect    = require('chai').expect;
var should    = require('chai').should();
var Rectangle = require('../code/rectangle.js');

describe('Rectangle', function() {
  var rectangle = new Rectangle(4,5);

  it('to have the correct height', function() {
    expect(rectangle.height).to.equal(4);
  });

  it('to have the correct width', function() {
    // write a test here
  });

  it('to have a method named #getArea', function() {
    should.exist(rectangle.getArea());
  });

  // write more tests
  
});