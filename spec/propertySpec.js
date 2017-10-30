<<<<<<< HEAD
describe, function() {
=======
describe("Property", function() {

  var property;

 beforeEach(function() {
   var title = "Cottage";
   var description = "Two up, two down, thatched";
   var price = 100;
  property = new Property(title, description, price);
});

  it("has the property 'title'", function() {
    expect(property.title()).toEqual("Cottage");
  });

  it("has the property 'description'", function() {
    expect(property.description()).toEqual("Two up, two down, thatched");
  });

  it("has the property 'price'", function() {
    expect(property.price()).toEqual(100);
  });
>>>>>>> fa87fe62c0edfef3c8f58d60b72a0b077f8ff304

});
