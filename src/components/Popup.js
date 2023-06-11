
export default class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector('.modal__close');
    }

    open() {
      this._popupElement.classList.add("modal_opened");
      document.addEventListener("keydown", (e) => {this._handleEscClose(e)})
    }

    close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", (e) => {this._handleEscClose(e)})
    }

    _handleEscClose(e) {
        const escKeycode = 27;
        if (e.which === escKeycode) {
          this.close();
        }
    }

    setEventListeners() {
         this._popupElement.addEventListener("mousedown", (e) => {
            if(
                e.target.classList.contains("modal") ||
                e.target.classList.contains("modal__close")
            ) {
                this.close();
            }
         })
    }
}