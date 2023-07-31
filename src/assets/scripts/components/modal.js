const openModal = () => {
  $('[data-modal-open]').on('click', function () {
    $(`[data-modal="${$(this).data('modal-open')}"]`).show();
  });
};
const closeModal = () => {
  $('[data-action="modal-close"]').on('click', () => $('[data-modal]').hide());
};

export default () => {
  openModal();
  closeModal();
};
