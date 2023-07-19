export default () => {
  console.log('cursor');

  const cursor = $('[data-cursor]');

  // show cursor only when mouse enter the viewport
  $(document).on('mouseenter', () => {
    $(cursor).fadeIn();
  });

  // change cursor position on mouse move
  $(document).on('mousemove', (e) => {
    $(cursor).css({ left: e.clientX, top: e.clientY });
  });

  // when hovering a link, button or project add active class to cursor
  $('body').on('mouseenter', 'a, button, [data-project]', function () {
    cursor.addClass('active').find('[data-cursor-trail] span').text($(this).data('cursor-text'));
  });
  $('body').on('mouseleave', 'a, button, [data-project]', () => {
    cursor.removeClass('active');
  });
};
