describe("triangleType", function() {
  it("will determine if the entered parameters do not equate to a triangle", function() {
    expect(triangleType(3, 5, 15)).to.equal("Not a triangle");
  });

  it("will determine if any two sides are equal to each other", function() {
    expect(triangleType(3, 3, 5)).to.equal("Scalene triangle");
  });

  it("will determine if all sides are equal to each other", function() {
    expect(triangleType(5, 5, 5)).to.equal("Equilateral triangle");
  })
});
