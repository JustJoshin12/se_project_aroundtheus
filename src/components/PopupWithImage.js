import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector){
        super({popupSelector});
        this._name = this._popupElement.querySelector('.modal__image-name');
        this._image = this._popupElement.querySelector('.modal__image');
    }

    open(imageData) {
       this._name.textContent = imageData.name;
       this._image.src = imageData.link;
       this._image.alt = `Photo of ${imageData.name}`;
       super.open();
    }
}

export default PopupWithImage;