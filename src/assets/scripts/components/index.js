define(['jquery', 'gsap', 'ScrollTrigger', 'splitting'], function ($, gsap, ScrollTrigger, Splitting) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  return {
    cursor() {
      var cursor = $('.cursor');
      var follower = $('.cursor-follower');

      var posX = 0;
      var posY = 0;

      var mouseX = 0;
      var mouseY = 0;

      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 10;
          posY += (mouseY - posY) / 10;

          gsap.set(follower, {
            css: {
              left: posX - 15,
              top: posY - 15,
            },
            duration: 1,
            ease: 'power4.out',
          });

          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
            duration: 1,
            ease: 'power4.out',
          });
        },
      });

      $(document).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      document.addEventListener('mouseenter', function (event) {
        gsap.to([cursor, follower], {
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
        });
      });
      document.addEventListener('mouseleave', function (event) {
        gsap.to([cursor, follower], {
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
      });
      $('body').on('mouseenter', 'a, button, [data-project]', function () {
        cursor.addClass('active');
        follower.addClass('active').find('span').text($(this).data('cursor'));
        if ($(this).hasClass('disabled')) {
          follower.addClass('disabled');
        }
      });
      $('body').on('mouseleave mousedown', 'a, button, [data-project]', function () {
        cursor.removeClass('active');
        follower.removeClass('active').find('span').text();
        if ($(this).hasClass('disabled')) {
          follower.removeClass('disabled');
        }
      });
    },
    projectsMobile() {
      $('[data-project-heading]').on('click', function (e) {
        e.preventDefault();
      });
      $('[data-project]').on('click', function (e) {
        $('[data-project-content]').hide();
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active').find('[data-project-content]').show();
        }
      });
    },
    animations() {
      // HEADER
      gsap.to('header .container > *', {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1,
        ease: 'power4.out',
      });

      // ABOUT TEXT
      gsap.to('#about p', {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      });

      // PROJECTS
      var projects = gsap.utils.toArray('#selected-projects [data-projects] [data-project] [data-project-heading]');
      projects.forEach((project, i) => {
        gsap.to(project, {
          y: 0,
          scrollTrigger: {
            trigger: project,
            scrub: true,
            end: 'center center',
          },
        });
      });

      // SECTIONS TITLES
      var h2 = Splitting({
        target: 'h2 .split',
        by: 'chars',
      });
      gsap.to('h2', {
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to('h2 .char', {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
      });
    },
    init: function () {
      if ($(window).width() > 1024) {
        this.cursor();
      } else {
        this.projectsMobile();
      }
      this.animations();
    },
  };
});
