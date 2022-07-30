$(document).ready(function () {
  $('#hamburger').click(function () {
    $('#navigation').toggle();
  });
});

$(document).ready(function () {
  $('#closeButton').click(function () {
    $('#dialog').addClass('hideDialog');
  });

  $('#learnMoreButton').click(function () {
    $('#dialog').removeClass('hideDialog');
  });
});
