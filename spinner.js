var theSpinner, theTimer;

function debug(message) {
  $("#debug").text(message);
}

function slowDownStep(now) {
  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
}

function endTheSpin() {
  theSpinner.removeClass('spinning');
  var rotator = Math.floor(Math.random() * 360);
  theSpinner.css("text-indent", 0);
  theSpinner.animate({textIndent: rotator + "px" }, {step : slowDownStep, duration: 2000, easing: "easeOutQuad" });
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