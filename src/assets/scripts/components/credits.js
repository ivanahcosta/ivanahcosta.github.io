import { gsap } from 'gsap';

export default () => {
  console.log('credits');

  $('[data-action="credits-open"]').on('click', () => {
    $('[data-modal="credits"]').show();
  });
  $('[data-action="credits-close"]').on('click', () => {
    $('[data-modal="credits"]').fadeOut('fast');
  });
};
