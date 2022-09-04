/*
$(function () {
  $('img').each(function (e) {
    var src = $(e).attr('src');
    $(e).hover(function () {
      $(this).attr('src', src.replace('BombBurn.gif', 'CatSuper.png'));
    }, function () {
      $(this).attr('src', src);
    });
  });
});
*/


$(document).ready(function(){
  $('.animated-img').each(function(){
    var $el = $(this),
      staticSrc = $el.attr('src'),
      gifSrc = $el.data('gifSrc');
    $el.hover(
      function(){
        $(this).attr("src", gifSrc);
      },
      function(){
        $(this).attr("src", staticSrc);
      });
  });
});


