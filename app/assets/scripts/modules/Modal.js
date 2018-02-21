import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }
  
  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    
    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  
   keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }
  
  openModal() {
    this.modal.addClass("modal--isVisible");
    return false; /* prevent the default behaviour of the browser when click on the link*/
  }
  
  closeModal() {
    this.modal.removeClass("modal--isVisible");
  }
}

export default Modal;