describe("Property", function() {

  var property;

 beforeEach(function() {
   var title = "Cottage";
  property = new Property(title);
});

  it("has these properties", function() {
    expect(property.title()).toEqual("Cottage");
  });
});
