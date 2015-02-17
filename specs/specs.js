describe("triangleType", function() {
  it("will determine if the entered parameters do not equate to a triangle", function() {
    expect(triangleType(3, 5, 15)).to.equal("Not a triangle");
  });

  it("will determine if any two sides are equal to each other", function() {
    expect(triangleType(3, 3, 5)).to.equal("Isosceles triangle");
  });

  it("will determine if all sides are equal to each other", function() {
    expect(triangleType(5, 5, 5)).to.equal("Equilateral triangle");
  });

  it("will determine if no sides are equal to each other in the form of a scalene triangle", function() {
    expect(triangleType(3, 4, 6)).to.equal("Scalene triangle");
  });

  it("will not allow NaN to be a valid input in the form", function() {
    expect(triangleType(NaN, 3, 7)).to.equal("ERROR: You must input three sides");
  });S
});
