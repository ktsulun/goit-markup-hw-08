(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-button]'),
    closeModalBtn: document.querySelector('[data-menu-button]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-visible');
  }
})();
