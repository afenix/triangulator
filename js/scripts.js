var triangleType = function(side1, side2, side3) {

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)){
    return "ERROR: You must input three sides";
  }

  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
    var results = "Not a triangle";
  } else if (side1 === side2 && side2 === side3) {
    var results = "Equilateral triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    var results = "Isosceles triangle";
  } else {
    var results = "Scalene triangle";
  }

  return results;
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var results = triangleType(side1, side2, side3);

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);
    $(".results").text(results);

    $("#result").show();
    event.preventDefault();
  });
});
