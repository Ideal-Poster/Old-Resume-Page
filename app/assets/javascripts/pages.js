jQuery(document).ready(function ($) {
  $('#home-hover-trigger').mouseover(
    function() {
      $('#home-hover').css('background-color', '#DDEDF6');
      $('#name').css('color', '#3996CE');

  });
  $('#home-hover-trigger').mouseout(
    function() {
      $('#home-hover').css('background-color', '#FAFAFA');
      $('#name').css('color', 'black');

  });

  setInterval(function() {
    if ($(window).width() < 992) {
      $('#home-container, #home-hover-trigger').css('width', $(window).width());
    }
    else {
      $('#home-container').css('width', ($(window).width() - $('#portrait').width() - 190));
      $('#home-hover-trigger').css('width',($(window).width() - $('#portrait').width()) - 90);
    }
  }, 100);
});
