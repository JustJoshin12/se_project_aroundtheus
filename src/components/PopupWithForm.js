import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor( popupSelector, handleFormSubmit) {
      super({popupSelector});
      this._popupForm = this._popupElement.querySelector('.modal__form');
      this._handleFormSubmit = handleFormSubmit;
      this._submitButton = this._popupElement.querySelector('.modal__button')
      this._formInputs = this._popupForm.querySelectorAll(".modal__input");
      this._submitButtonText = this._submitButton.textContent;
    }

    close() {
       super.close();
       this._popupForm.reset()
    }

    _getInputValues() {
        const inputValues = {};
        this._formInputs.forEach( input => {
           inputValues[input.name] = input.value;
        })
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', e => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
}

export default PopupWithForm



