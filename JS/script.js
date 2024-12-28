$(document).ready(function () {
  // Mobile menu
  $(".mobile-menu-icon").click(function () {
    $(".header-nav").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 767) {
      $(".header-nav").show();
    } else {
      $(".header-nav").hide();
    }
  });

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $("body").bind("touchstart", function () {});
});
