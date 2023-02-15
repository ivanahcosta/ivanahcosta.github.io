import './components/loader.js';

console.log('Hello world!');

$(document).ready(function () {
  const lenis = new Lenis({
    wrapper: $('[data-content-overflow]')[0], // element which has overflow
    content: $('[data-content]')[0], // usually wrapper's direct child
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
});

$(document).ready(function () {
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
    activePage();
  });
  function activePage() {
    $('[data-menu] li').removeClass('active');
    $('[data-menu] li a[href="' + window.location.pathname + '"]')
      .parent()
      .addClass('active');
  }
  activePage();
});
