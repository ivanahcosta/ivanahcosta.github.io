console.log('Hello world!');

$(function () {
  function lenis() {
    var lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  function barbaInit() {
    barba.init({
      transitions: [
        {
          name: 'opacity-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
            });
          },
        },
      ],
    });
    barba.hooks.enter(() => {
      window.scrollTo(0, 0);
      activeMenuLink();
    });
  }
  lenis();
  barbaInit();

  // loader
  // header
  // menu
  function activeMenuLink() {
    $('[data-menu]').find('a').removeClass('active');
    $('[data-menu]')
      .find('a[href="' + window.location.pathname + '"]')
      .addClass('active');
  }
  activeMenuLink();
  // contact
});
