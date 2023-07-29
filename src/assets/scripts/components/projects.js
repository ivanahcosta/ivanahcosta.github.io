import { gsap } from 'gsap';

export default () => {
  console.log('projects');

  // if in mobile, open content and thumnbnail
  if ($(document).width() < 1024) {
    $('[data-project]').on('click', function (e) {
      e.preventDefault();
      const project = $(this);
      const thumbnail = $(this).find('[data-project-thumbnail]');
      const content = $(this).find('[data-project-content]');
      if ($(this).hasClass('active')) {
        $(project).removeClass('active');
        $(thumbnail).hide();
        $(content).hide();
      } else {
        $(project).addClass('active');
        $(thumbnail).show();
        $(content).show();
      }
    });
  }
};
