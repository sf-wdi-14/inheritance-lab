// In this file, create your Rectangle constructor

var Rectangle = function(height, width) {
  this.height = height;
  this.width  = width;
};
 
Rectangle.prototype.getArea = function() {
  return this.height * this.width;
};




// Do not modify any code beneath this line
module.exports = Rectangle;