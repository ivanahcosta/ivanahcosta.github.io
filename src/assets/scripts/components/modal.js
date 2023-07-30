export default () => {
  console.log('modal');

  $('[data-modal-open]').on('click', function () {
    const modal = $(this).data('modal-open');
    $(`[data-modal="${modal}"]`).show();
  });
  $('[data-action="modal-close"]').on('click', () => {
    $('[data-modal').hide();
  });
};
