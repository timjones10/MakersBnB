

$(document).ready(function() {

  $(".w3-green").click(function() {


    var propertyTitle = $(".propertyTitle").val();
    var propertyDescription = $(".propertyDescription").val();
    var propertyPrice = $(".propertyPrice").val();

var property = new Property(propertyTitle, propertyDescription, propertyPrice);
    // var property = new Property (propertyTitle, propertyDescription, );

    $("#property_title").text(propertyTitle);

    $("#property_description").text(propertyDescription);

    $("#property_price").text(propertyPrice);
    console.log(property);
    event.preventDefault();
  });

});
