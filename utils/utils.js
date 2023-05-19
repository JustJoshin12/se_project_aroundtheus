const handleEscClose = (e) => {
    const escKeycode = 27;
    if (e.which === escKeycode) {
      const activeModal = document.querySelector(".modal_opened");
      closeModal(activeModal);
    }
  };
  
  function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscClose);
  }
  
  function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscClose);
  }


  
  

  export { handleEscClose, closeModal, openModal}