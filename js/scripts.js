var triangleType = function(side1, side2, side3) {
  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
    var results = "Not a triangle";
  } else if (side1 === side2 && side2 === side3) {
    var results = "Equilateral triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    var results = "Scalene triangle";
  } else {
    var results = "Isosceles triangle";
  }
  return results;
};
