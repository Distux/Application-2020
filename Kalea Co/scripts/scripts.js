// 21.3.22
//prevent dragging
$(document).ready(function () {
    $('img').each(function () {
      var $img = $(this);
      $img.attr('draggable', false);
    })
  })