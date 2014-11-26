// In this file, create your Square constructor
var Rectangle = require('./rectangle.js');

var Square = function(height, width) {
  this.height = height; 
  this.width  = width;
};

Square.prototype = Rectangle.prototype;


// Do not modify any code beneath this line
module.exports = Square;