$(document).ready(function() {
  $("form#order").submit(function(event) {
      event.preventDefault();
      var fullName = $("#name").val();
      var streetAddress = $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip = $("#zip").val();
      var country = $("#country").val();
      var completeAddress = streetAddress + " " + city + " " + state + " " + zip + " " + country;
      $("#output-name").text(fullName);
      $("#output-address").text(completeAddress);
  });
});
