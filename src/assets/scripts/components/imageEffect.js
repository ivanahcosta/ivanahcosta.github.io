import { gsap } from 'gsap';

export default () => {
  console.log('image Effect');

  // thumbnail to follow mouse
  $(document).on('mousemove', (e) => {
    $('[data-project-thumbnail]').css({ left: e.clientX, top: e.clientY });
  });

  // show and hide thumbnail on mouse hover
  $('[data-project]').on('mouseenter', function () {
    $(this).find('[data-project-thumbnail]').show();
  });
  $('[data-project]').on('mouseleave', function () {
    $(this).find('[data-project-thumbnail]').hide();
  });

  // add pixelated filter
  $('body').append(`
    <svg height="0" width="0" style="position:absolute;">
      <defs>
        <filter id="pixelate" x="0" y="0">
          <feFlood x="2" y="2" height="1" width="1"/>
          <feComposite width="10" height="10"/>
          <feTile result="a"/>
          <feComposite in="SourceGraphic" in2="a" operator="in"/>
          <feMorphology operator="dilate" radius="5"/>
        </filter>
      </defs>
    </svg>
  `);
};
