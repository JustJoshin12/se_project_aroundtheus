//      Modules     //
import '../pages/index.css'
import Card from "../components/Card.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import {
  closeModal,
  openModal,
  addClickCloseListener,
} from "../utils/utils.js";
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
const profileTitleInput = document.querySelector(selectors.profileNameInput);
const profileDescriptionInput = document.querySelector(
  selectors.profileDescInput
);
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const addCardBtn = document.querySelector(".profile__add-button");

// card list elements //

const addCardModal = document.querySelector("#add-card-modal");
const closeCardBtn = document.querySelector("#card-modal-close");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardImagePop = document.querySelector("#card-image-modal");

// card image elements //
const modalImageCloseBtn = document.querySelector("#image-modal-close");


// Functions //


// Event Listeners =============================================================

closeProfileBtn.addEventListener("click", () => {
  closeModal(profileEditModal);
});

closeCardBtn.addEventListener("click", () => {
  closeModal(addCardModal);
});

modalImageCloseBtn.addEventListener("click", () => {
  closeModal(cardImagePop);
});

addCardBtn.addEventListener("click", () => {
  addCardFormPopup.open();
});


editBtn.addEventListener("click", () => {
  const profileInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.info;

  editFormValidator.disableButton();

  profileModal.open();
});

//     Form =====================================================================

const editFormValidator = new FormValidator(settings, profileEditForm);
const addFormValidator = new FormValidator(settings, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//        Modal Image       ===============================================

const cardImagePopup = new PopupWithImage(selectors.cardImageModal);

cardImagePopup.setEventListeners();
cardImagePopup.close();

// Card Section ================================================================

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = new Card(
        data,
        (imageData) => {
          console.log(data)
          cardImagePopup.open({data});
        },
        selectors.cardTemplate
      );

      cardSection.addItem(cardElement.getView());
    },
  },

  selectors.cardList
);

cardSection.renderItems(initialCards);

// Add Card Form ===============================================================


const addCardFormPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = new Card(
    data,
    (formData) => {
      cardImagePop.open(formData);
    },
    selectors.cardTemplate
  );

  cardSection.addItem(newCard.getView());

  addCardFormPopup.close();
  addFormValidator.toggleButtonState();
});

addCardFormPopup.setEventListeners();

addCardFormPopup.close();

// Profile  ================================================================

const userInfo = new UserInfo(
  selectors.profileTitle,
  selectors.profileDescription
);

const profileModal = new PopupWithForm(selectors.profileModal, (data) => {
  userInfo.setUserInfo(data.title, data.description);
  profileModal.close();
});

profileModal.setEventListeners();

profileModal.close();
