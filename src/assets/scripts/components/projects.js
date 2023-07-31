import { gsap } from 'gsap';
import { isDesktop } from '../helpers/utils';

const animateDesktopProject = (project) => {
  const thumbnail = $(project).find('[data-project-thumbnail]');
  gsap.set(thumbnail, { yPercent: -50, xPercent: -50 });

  const setX = gsap.quickSetter(thumbnail, 'x', 'px');
  const setY = gsap.quickSetter(thumbnail, 'y', 'px');
  const align = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const startFollowing = () => document.addEventListener('mousemove', align);
  const stopFollowing = () => document.removeEventListener('mousemove', align);

  const fade = gsap.to(thumbnail, {
    autoAlpha: 1,
    duration: 0.3,
    paused: true,
    onReverseComplete: stopFollowing,
  });

  ['mouseenter', 'mouseleave'].forEach((event) => {
    project.addEventListener(event, (e) => {
      if (event === 'mouseenter') {
        fade.play();
        startFollowing();
        align(e);
      } else {
        fade.reverse();
      }
    });
  });
};

const animateMobileProject = (project) => {
  const thumbnail = $(project).find('[data-project-thumbnail]');
  const link = $(project).find('[data-project-link]');
  const isActive = project.hasClass('active');

  project.toggleClass('active', !isActive);
  thumbnail.toggle(!isActive);
  link.toggle(!isActive);
};

export default () => {
  if (isDesktop) {
    gsap.utils.toArray('[data-project]').forEach(animateDesktopProject);
  } else {
    $('[data-project]').on('click', function (e) {
      e.preventDefault();
      animateMobileProject($(this));
    });
  }
};
