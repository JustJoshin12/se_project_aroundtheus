import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector){
        super({popupSelector});
        this._name = this._popupElement.querySelector('.modal__image-name');
        this._image = this._popupElement.querySelector('.modal__image');
    }

    open(imageData) {
       console.log(imageData)
       this._name.textContent = imageData.title;
       this._image.src = imageData.image;
       this._name.alt = `Photo of ${imageData.title}`;
       super.open();

    }
}

export default PopupWithImage;