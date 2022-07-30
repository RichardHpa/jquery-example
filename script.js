$(document).ready(function () {
  $('#hamburger').click(function () {
    $('#navigation').toggle();
  });
});

// Script to hide/show menu
const button = document.querySelector('#hamburger');
let menu = document.querySelector('#navigation');
button.addEventListener('click', function (event) {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

$(document).ready(function () {
  $('#closeButton').click(function () {
    $('#dialog').addClass('hideDialog');
  });

  $('#learnMoreButton').click(function () {
    $('#dialog').removeClass('hideDialog');
  });
});
