var goToEl = function (ele) {
  var scrollTop = $(ele).position().top - 70;
  $('html, body').animate({
    scrollTop: scrollTop + 'px'
  }, 1000);
};

$(document).ready(function () {
  if (window.location.pathname === '/') {
    //$('#show-intern-modal').openModal();
  }
  setTimeout(function () {
    $('.parallax').parallax();
  }, 100);

  $('body').on('click', '.hover-heading', function (e) {
    var text = $(e.currentTarget).siblings('.hover-text');
    if (text.hasClass('in')) {
      text.slideDown(500, function () {
        text.removeClass('in');
        text.addClass('out');
        goToEl(text);
      });
    } else if (text.hasClass('out')) {
      text.slideUp(500, function () {
        text.removeClass('out');
        text.addClass('in');
      });
    }
  });

  $(".button-collapse").sideNav();

  $('.collapsible').collapsible({
    accordion : false
  });

  $('.modal-trigger').leanModal();
});