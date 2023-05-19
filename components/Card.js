import { openModal } from "../utils/utils.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".card__like-button");
    const deleteButton = this._element.querySelector(".card__delete-button");
    const cardImage = this._element.querySelector(".card__image");

    likeButton.addEventListener("click", () => this._handleLikeIcon());

    deleteButton.addEventListener("click", this._handleDelete.bind(this));

    cardImage.addEventListener("click", this._handlePreview.bind(this));
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
      console.log("should be dark heart")
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _handlePreview() {
    const cardImagePop = document.querySelector("#card-image-modal");
    console.log(cardImagePop);
    cardImagePop.querySelector(".modal__image").src = this._link;
    cardImagePop.querySelector(".modal__image-name").textContent = this._name;
    openModal(cardImagePop);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").alt = this._name;
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
