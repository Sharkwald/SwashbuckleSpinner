var theSpinner, theTimer;

function debug(message) {
  $("#debug").text(message);
}

function endTheSpin() {
  $("#image").removeClass('spinning');
  var rotator = Math.floor(Math.random() * 360);
  $("#image").css("text-indent", 0);
  $("#image").animate({  textIndent: rotator + "px" }, { step : function (now) {
    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
  }, duration: 2000, easing: "easeOutQuad" });
}

function resetSpinner() {
  clearTimeout(theTimer);
  theSpinner.removeClass('spinning');
  theSpinner.removeAttr('style');
}

function doTheSpin() {
  resetSpinner();
  theSpinner.addClass('spinning');
  theTimer = setTimeout(endTheSpin, 3000);
}

$(document).ready(function ($) {
  theSpinner = $("#image");
  $("#go").click(doTheSpin);
});