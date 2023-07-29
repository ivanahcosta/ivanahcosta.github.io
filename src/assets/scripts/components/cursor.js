import { gsap } from 'gsap';

let posX = 0;
let posY = 0;
let pos2X = 0;
let pos2Y = 0;

let mouseX = 0;
let mouseY = 0;

const cursorPointer = $('[data-cursor-pointer]');
const cursorTrail = $('[data-cursor-trail]');
const cursorThumbnail = $('[data-project-thumbnail]');

export default () => {
  console.log('cursor');

  if ($(document).width() > 1024) {
    // show cursor only when mouse enter the viewport
    $(document).on('mouseenter', () => {
      cursorPointer.fadeIn();
      cursorTrail.fadeIn();
    });

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        pos2X += (mouseX - pos2X) / 18;
        pos2Y += (mouseY - pos2Y) / 18;

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

        gsap.set(cursorThumbnail, {
          css: {
            left: pos2X - 12,
            top: pos2Y - 12,
          },
        });
      },
    });

    // change cursor position on mouse move
    $(document).on('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // change cursor when it hovers links or buttons
    $('a:not([data-project-heading]), button').on('mouseenter', function () {
      cursorPointer.addClass('active');
      cursorTrail.addClass('active');
    });
    $('a, button').on('mouseleave', function () {
      cursorPointer.removeClass('active');
      cursorTrail.removeClass('active');
    });

    $('[data-project]').on('mouseenter', function () {
      const available = $(this).find('[data-project-heading]').data('cursor-text');
      cursorPointer.addClass('active');
      cursorTrail.addClass('active project').find('[data-cursor-text]').text(available);
      const thumbnail = $(this).find('[data-project-thumbnail]');
      $(this).addClass('active');
      thumbnail.fadeIn();
    });
    $('[data-project]').on('mouseleave', function () {
      cursorPointer.removeClass('active');
      cursorTrail.removeClass('active project').find('[data-cursor-text]').text('');
      $('[data-project]').removeClass('active');
      $('[data-project-thumbnail]').fadeOut('fast');
    });
  }
};
