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
    console.log(!contact.reversed());
    if (!contact.reversed()) {
      $('[data-header] .container').css('opacity', 0.5).css('pointer-events', 'none');
    } else {
      $('[data-header] .container').css('opacity', 1).css('pointer-events', 'all');
    }
  });
  $('[data-contact]').css('padding-bottom', $('[data-header]').innerHeight() + 'px');
});
