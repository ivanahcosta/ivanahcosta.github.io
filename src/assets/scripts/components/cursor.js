import { gsap } from 'gsap';
import { isDesktop } from '../helpers/utils';

let posX = 0;
let posY = 0;

let mouseX = 0;
let mouseY = 0;

const cursorPointer = $('[data-cursor-pointer]');
const cursorTrail = $('[data-cursor-trail]');
const projects = $('[data-project]');

const fadeInCursor = () => {
  cursorPointer.add(cursorTrail).addClass('active');
};

const fadeOutCursor = () => {
  cursorPointer.add(cursorTrail).removeClass('active');
};

const setCursorPosition = () => {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;

  gsap.set(cursorTrail, {
    css: {
      left: posX - 12,
      top: posY - 12,
    },
  });

  gsap.set(cursorPointer, {
    css: {
      left: mouseX,
      top: mouseY,
    },
  });
};

const setProjectCursorText = function () {
  const available = $(this).find('[data-project-heading]').data('cursor-text');
  cursorPointer.addClass('active');
  cursorTrail.addClass('active project').find('[data-cursor-text]').text(available);
};

const resetProjectCursorText = function () {
  cursorPointer.removeClass('active');
  cursorTrail.removeClass('active project').find('[data-cursor-text]').text('');
};

export default () => {
  console.log('Cursor');

  if (isDesktop) {
    $(document).on('mouseenter', () => {
      cursorPointer.fadeIn();
      cursorTrail.fadeIn();
    });

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: setCursorPosition,
    });

    $(document).on('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    $('a:not([data-project-heading]), button').on('mouseenter', fadeInCursor);
    $('a, button').on('mouseleave', fadeOutCursor);

    projects.on('mouseenter', setProjectCursorText);
    projects.on('mouseleave', resetProjectCursorText);
  }
};
