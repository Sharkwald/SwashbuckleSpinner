function doTheSpin(e) {
  var theSpinner = $(".image");
  theSpinner.toggleClass('spinning');
}

function debug(message) {
  $("#debug").text(message);
}

$(document).ready(function ($) {
  $("#go").click(doTheSpin);
});