class Card {
  constructor({
    data,
    handleCardClick,
    cardSelector,
    handleDeleteClick,
    handleLikeClick,
    userId
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  logCardData(){
    console.log(this._cardId)
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector(".card__image");

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }


  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }
  setLikes(likes) {
    this._likes = likes;
    this._handleLikeIcon()
    this._renderLikes();
  }

  _displayLikeCount() {
    const likesNum = this._likes;
    return (this._likeCounter.textContent = likesNum.length);
  }

  _renderLikes() {
    if (this.isLiked()) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
    this._displayLikeCount();
  }

  _handleDeleteButton() {
    if (this._userId !== this._owner._id) {
      this._deleteButton.remove();
    }
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
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
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._handleDeleteButton();
    this._deleteButton.addEventListener("click", () =>{ this._handleDeleteClick()});
    this._elementId = this._id;
    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = `Photo of ${this._name}`;
    const cardTitle = this._element.querySelector(".card__title");
    cardTitle.textContent = this._name;
    this._likeCounter = this._element.querySelector(".card__like-number");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._renderLikes();

    this._setEventListeners();
    return this._element;
  }
}

export default Card;
