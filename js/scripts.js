$(document).ready(function() {
  $("form#order").submit(function(event) {
      event.preventDefault();
      var fullName = $("#name").val();
      var streetAddress = $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip = $("#zip").val();
      var country = $("#country").val();
      var completeAddress = streetAddress + "<br>" + city + "<br>" + state + "<br>" + zip + "<br>" + country;
      $("#output-name").text("Thank you for your purchase, " + fullName);
      $("#output-address").html("We will ship your order to:<br>" + completeAddress);
  });
});
