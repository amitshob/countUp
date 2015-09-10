describe('countUp', function(){

  it("it is false if multiple is greater than dividend", function(){
    expect(countUp(10,4)).to.equal(false);
  });

  it("it outputs list of numbers up to the dividend", function(){
    expect(countUp(4,20)).to.eql([4, 8, 12, 16, 20]);
  });

  it("it outputs list of numbers up to the dividend ", function(){
    expect(countUp(4,22)).to.eql([4, 8, 12, 16, 20]);
  });

  it("it outputs list of numbers up to the dividend ", function(){
    expect(countUp(3,6)).to.eql([3, 6]);
  });

  // it("it is isoceles if any two sides are equal", function(){
  //   expect(triangleTracker(3,3,5)).to.equal("isoceles");
  // });
  //
  // it("it is scalene if none of the sides are equal", function(){
  //   expect(triangleTracker(2,4,5)).to.equal("scalene");
  // });
  //
  // it("it is not a triangle if the sum of any two sides is smaller the the third side", function(){
  //   expect(triangleTracker(6,12,5)).to.equal("this is not a triangle!");
  // });
  //
});
