console.log('loader');

$(document).ready(function () {
  var contact = gsap.timeline({ paused: true });
  contact
    .to('[data-content-wrapper]', {
      y: $(window).height() - $('[data-header]').innerHeight(),
      duration: 1,
    })
    .reverse();
  $('[data-action="toggle-contact"]').on('click', function () {
    contact.reversed(!contact.reversed());
  });
  $('[data-contact]').css('padding-bottom', $('[data-header]').innerHeight() + 'px');
});
