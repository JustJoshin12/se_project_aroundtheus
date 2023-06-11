//      Modules     //
import '../pages/index.css'
import Card from "../components/Card.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, selectors } from "../utils/constants.js";



  // profile elements ==========================================================

const editBtn = document.querySelector(selectors.profileEditBtn);
const profileEditModal = document.querySelector(selectors.profileModal);
const profileTitleInput = document.querySelector(selectors.profileNameInput);
const profileDescriptionInput = document.querySelector(
  selectors.profileDescInput
);
const profileEditForm = profileEditModal.querySelector(selectors.profileForm);
const addCardBtn = document.querySelector(selectors.profileAddBtn);

 // card list elements =========================================================

const addCardModal = document.querySelector(selectors.addCardModal);
const addCardForm = addCardModal.querySelector(selectors.addCardForm);


// Event Listeners =============================================================


addCardBtn.addEventListener("click", () => {
  addFormValidator.disableButton();
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

// Functions ===================================================================

  function renderCard(card) {
    const cardElement = new Card(
      card,
      (imageData) => {
        cardImagePopup.open(imageData);
      },
      selectors.cardTemplate
    );
    return cardElement.getView();
  }
 




//        Modal Image       ===============================================

const cardImagePopup = new PopupWithImage(selectors.cardImageModal);

cardImagePopup.setEventListeners();

// Card Section ================================================================

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {

      const card = renderCard(data)

      cardSection.addItem(card);
    },
  },

  selectors.cardList
);

cardSection.renderItems(initialCards);

// Add Card Form ===============================================================


const addCardFormPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = renderCard(data)

  cardSection.addItem(newCard);

  addCardFormPopup.close();
  addFormValidator.toggleButtonState();
});

addCardFormPopup.setEventListeners();



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


