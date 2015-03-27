function debug(message) {
  $("#debug").text(message);
}

function randomSelect() {
  var rotator = Math.floor(Math.random() * 360);
  $(".image").css("text-indent", 0);
  $(".image").animate({  textIndent: rotator + "px" }, { step : function (now) {
    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
  }, duration: 2000, easing: "easeOutQuad" });
}

function doTheSpin() {
  var theSpinner = $(".image");
  theSpinner.removeClass('spinning');
  theSpinner.toggleClass('spinning');
  setTimeout(function () {
    $(".image").toggleClass('spinning');
    randomSelect();
  }, 3000);
}

$(document).ready(function ($) {
  $("#go").click(doTheSpin);
});