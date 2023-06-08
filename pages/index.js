//      Modules     //

import Card from "../components/Card.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import {
  handleEscClose,
  closeModal,
  openModal,
  addClickCloseListener,
} from "../utils/utils.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, selectors } from "../utils/constants.js";

/////////////// Elements //////////////

//  profile elements //

const editBtn = document.querySelector(".profile__edit-button");
const closeProfileBtn = document.querySelector("#profile-modal-close");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const addCardBtn = document.querySelector(".profile__add-button");

// card list elements //

const addCardModal = document.querySelector("#add-card-modal");
const closeCardBtn = document.querySelector("#card-modal-close");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardImageInput = document.querySelector("#card-image-input");

const cardImagePop = document.querySelector("#card-image-modal");

// card image elements //

const modalImage = cardImagePop.querySelector(".modal__image");
const modalCaption = cardImagePop.querySelector(".modal__image-name");
const modalImageCloseBtn = document.querySelector("#image-modal-close");

// modalELement //
const modalArray = document.querySelectorAll(".modal");

// Functions //

modalArray.forEach(addClickCloseListener);

function handleCardClick(imageData) {
  cardImagePopup.open(imageData);
  return
}

// function renderCard(data) {
//   const card = new Card(data, "#card-template", handleCardClick);
//   const cardElement = card.getView();
//   cardSection.addItem(cardElement);
//   return card;
// }

// initialCards.forEach(renderCard);

function handleProfileEditSubmit() {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileModal.close()
}

function handleCardAddSubmit() {
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  const data = { name, link };
  const cardElement = renderCard(data);
  closeModal(addCardModal);
  addFormValidator.toggleButtonState();
}

/////////////////////Event Listeners///////////////

editBtn.addEventListener("click", function revealModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

closeProfileBtn.addEventListener("click", () => {
  closeModal(profileEditModal);
});

closeCardBtn.addEventListener("click", () => {
  closeModal(addCardModal);
});

modalImageCloseBtn.addEventListener("click", () => {
  closeModal(cardImagePop);
});

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// addCardForm.addEventListener("submit", handleCardAddSubmit);

//     Form =====================================================================

const editFormValidator = new FormValidator(settings, profileEditForm);
const addFormValidator = new FormValidator(settings, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//        Modal Image       ===============================================

const cardImagePopup = new PopupWithImage("#card-image-modal");

cardImagePopup.setEventListeners();
cardImagePopup.close();

// Card Section ================================================================

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {

      const cardElement = new Card(data,  (imageData) => {

        cardImagePopup.open(imageData);

      },"#card-template");

      cardSection.addItem(cardElement.getView());
    },
  },

  ".cards__list"
);

cardSection.renderItems(initialCards);

// Add Card Form ===============================================================

addCardBtn.addEventListener("click", () => {
  openModal(addCardModal)
});


const addCardFormPopup = new PopupWithForm("#add-card-modal", (data) => {

const newCard = new Card( data, (imageData) => {
  console.log(imageData)
  cardImagePop.open(imageData);
}, "#card-template");

  cardSection.addItem(newCard.getView());

  addCardFormPopup.close();

});

addCardFormPopup.setEventListeners();

addCardFormPopup.close();

// Profile Form ================================================================
const profileModalElement = "#profile-edit-modal"

const userInfo = new UserInfo("profile__title","profile__description");

const profileModal = new PopupWithForm( selectors.profileModal , handleProfileEditSubmit);

profileModal.setEventListeners();
