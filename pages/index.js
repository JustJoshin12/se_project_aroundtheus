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
const profileTitleInput = document.querySelector(selectors.profileNameInput);
console.log(profileTitleInput.value)
const profileDescriptionInput = document.querySelector(
  selectors.profileDescInput
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

// function handleCardClick(imageData) {
//   cardImagePopup.open(imageData);
//   return
// }



// function handleProfileEditSubmit() {
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   profileModal.close()
// }


/////////////////////Event Listeners///////////////



closeProfileBtn.addEventListener("click", () => {
  closeModal(profileEditModal);
});

closeCardBtn.addEventListener("click", () => {
  closeModal(addCardModal);
});

modalImageCloseBtn.addEventListener("click", () => {
  closeModal(cardImagePop);
});



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
  cardImagePop.open(imageData);
} , "#card-template");

  cardSection.addItem(newCard.getView());
  
  addCardFormPopup.close();
  addFormValidator.toggleButtonState();

});

addCardFormPopup.setEventListeners();

addCardFormPopup.close();

// Profile  ================================================================

const userInfo = new UserInfo(selectors.profileTitle, selectors.profileDescription);

const profileModal = new PopupWithForm( selectors.profileModal , () => {
     userInfo.setUserInfo(profileTitleInput.value,profileDescriptionInput.value);
     profileModal.close();
});

profileModal.setEventListeners();

// Edit Profile Form ===========================================================

editBtn.addEventListener("click", () => {
  const profileInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.info;

  editFormValidator.toggleButtonState();

  profileModal.open();

});



profileModal.setEventListeners();

profileModal.close();
