import './components/loader.js';

console.log('Hello world!');

// $(document).ready(function () {
//   const lenis = new Lenis({
//     // wrapper: $('[data-content-overflow]')[0], // element which has overflow
//     // content: $('[data-content]')[0], // usually wrapper's direct child
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     direction: 'vertical',
//     gestureDirection: 'vertical',
//     smooth: true,
//     mouseMultiplier: 1,
//     smoothTouch: false,
//     touchMultiplier: 2,
//     infinite: false,
//   });
//   var lastscroll = 0;
//   // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//   //   if (direction !== 0 && direction !== lastscroll) {
//   //     lastscroll = direction;
//   //     if (lastscroll === -1) {
//   //       $('[data-header]').css('transform', 'translateY(0%)').css('gap', '1rem');
//   //     } else {
//   //       $('[data-header]').css('transform', 'translateY(-100%)');
//   //     }
//   //   }
//   // });
//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);

//   barba.init({
//     transitions: [
//       {
//         name: 'opacity-transition',
//         leave(data) {
//           return gsap.to(data.current.container, {
//             opacity: 0,
//           });
//         },
//         enter(data) {
//           return gsap.from(data.next.container, {
//             opacity: 0,
//           });
//         },
//       },
//     ],
//   });
//   barba.hooks.enter(() => {
//     // activePage();
//     // $('[data-content-overflow]')[0].scrollTop = 0;
//   });
//   // function activePage() {
//   //   $('[data-menu] li').removeClass('active');
//   //   $('[data-menu] li a[href="' + window.location.pathname + '"]')
//   //     .parent()
//   //     .addClass('active');
//   //   lastscroll = 0;
//   //   $('[data-header]').css('transform', 'translateY(0%)').css('gap', '2.5rem');
//   // }
//   // activePage();
// });
