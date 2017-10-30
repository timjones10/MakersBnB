$(document).ready(function() {

  $(".w3-green").click(function() {
    var propertyTitle = $(".propertyTitle").val();
    $("#property_title").text(propertyTitle);
    var propertyDescription = $(".propertyDescription").val();
    $("#property_description").text(propertyDescription);
    event.preventDefault();
  });
  
});
