var theSpinner, theTimer, source;

function debug(message) {
  $("#debug").text(message);
}

function slowDownStep(now) {
  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
}

function endTheSpin(target) {
  theSpinner.removeClass('spinning');
  var rotator = Math.floor(Math.random() * 120);
  if (target === 'cook') {
    rotator += 120;
  } else if (target === 'sinker') {
    rotator += 240;
  }
  theSpinner.css("text-indent", 0);
  theSpinner.animate({textIndent: rotator + "px" }, {step : slowDownStep, duration: 2000, easing: "easeOutQuad" });
}

function resetSpinner() {
  clearTimeout(theTimer);
  theSpinner.removeClass('spinning');
  theSpinner.removeAttr('style');
}

function doTheSpin() {
  var source = this.id;
  resetSpinner();
  theSpinner.addClass('spinning');
  theTimer = setTimeout(function () {
    endTheSpin(source);
  }, 3000);
}

$(document).ready(function ($) {
  theSpinner = $("#wheel");
  $("button").click(doTheSpin);
});