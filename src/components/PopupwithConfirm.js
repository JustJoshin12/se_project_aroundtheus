import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super({popupSelector});
        this._confirmButton = this._popupElement.querySelector(".modal__button");
    }

    setAction(action) {
        this._handleDeleteAction = action;
    }

    _handleDeleteEvent = () => {
        this.preventDefault;
        this._handleDeleteAction();
    }

    setEventListeners(){
        this._confirmButton.addEventListener('click', this._handleDeleteEvent);
        super.setEventListeners();
    }

    close(){
        this._confirmButton.removeEventListener('click', this._handleDeleteEvent);
        super.close();
    }
}