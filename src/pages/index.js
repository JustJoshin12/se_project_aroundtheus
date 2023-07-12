//      Modules     //
import "../pages/index.css";
import Card from "../components/Card.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { selectors } from "../utils/constants.js";
import PopupWithConfirmation from "../components/PopupwithConfirm.js";
import Api from "../components/Api.js";

// profile elements ==========================================================

const editBtn = document.querySelector(selectors.profileEditBtn);
const profileEditModal = document.querySelector(selectors.profileModal);
const profileModalSubmitBtn = profileEditModal.querySelector(selectors.modalBtn);
const profileTitleInput = document.querySelector(selectors.profileNameInput);
const profileDescriptionInput = document.querySelector(
  selectors.profileDescInput
);
const profileImageBtn = document.querySelector(selectors.profileImageBtn);
const profileImage = document.querySelector(selectors.profileImage);
const profileImageModal = document.querySelector(selectors.profileImageModal);
const profileImageSubmitBtn = profileImageModal.querySelector(selectors.modalBtn)
const addCardBtn = document.querySelector(selectors.profileAddBtn);

// card list elements =========================================================

const addCardModal = document.querySelector(selectors.addCardModal);
const addCardSubmitBtn = addCardModal.querySelector(selectors.modalBtn);
const cardModalSubmitBtn = document.querySelector(selectors.modalBtn);
const addCardForm = addCardModal.querySelector(selectors.addCardForm);
const deleteCardModal = document.querySelector(selectors.deleteCardModal);
const deleteCardModalBtn = deleteCardModal.querySelector(selectors.modalBtn);



//    API    =======================================================================

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "97418fb8-739d-4cf9-9ff8-0802d43c1e0d",
    "Content-Type": "application/json",
  },
});


//     Form Validation   =====================================================================

const formValidators = {};
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);

// Functions ===================================================================

function setSubmitButtonText(buttonElement, text) {
  buttonElement.textContent = text;
}


function renderCard(card, userId) {
  const cardElement = new Card(
   card, //data 
    (imageData) => {
      console.log(card)
      cardImagePopup.open(imageData);
    }, //handleCardClick function
    selectors.cardTemplate, // cardSelector
    () => {
      deleteCardPopup.setAction(() => {
        setSubmitButtonText(deleteCardModalBtn, "Deleting...");
        api
          .deleteCard(card._id)
          .then(() => {
            cardElement._handleDelete();
            deleteCardPopup.close();
          })
          .finally(() => {
            setSubmitButtonText(deleteCardModalBtn, "Yes");
          });
      });
      deleteCardPopup.open();
    }, //handleDeleteClick function
    () => {
      if (cardElement.isLiked()) {
        api
          .likeCountRemove(card._id)
          .then((card) => {
            cardElement.setLikes(card.likes);
          })
          .catch((err) => {
            console.error(err.status);
          });
      } else {
        api
          .likeCountAdd(card._id)
          .then((card) => {
            cardElement.setLikes(card.likes);
          })
      }
    },// handleLikeClick function 
    userId
  );

  return cardElement.getView();
}

//   Card Image Modal  =================================================

const cardImagePopup = new PopupWithImage(selectors.cardImageModal);

cardImagePopup.setEventListeners();

// Delete Card Modal  ====================================================

const deleteCardPopup = new PopupWithConfirmation(selectors.deleteCardModal);
deleteCardPopup.setEventListeners();

// Add Card  ===============================================================

const addCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  setSubmitButtonText(addCardSubmitBtn, "Creating...");

  api
    .addCard(data)
    .then((data) => {
      const newCard = renderCard(data, userId);
      sectionInstance.addItem(newCard);
    })
    .then(() => {
      addCardPopup.close();
    })
    .finally(() => {
      setSubmitButtonText(addCardSubmitBtn, "Create");
    });
});

addCardBtn.addEventListener("click", () => {
  addCardPopup.open();
  addCardPopup.setEventListeners();
});

// Profile  ================================================================

const userInfo = new UserInfo(
  selectors.profileTitle,
  selectors.profileDescription,
  selectors.profileImage
);

let sectionInstance;
let userId;

const editProfilePopup = new PopupWithForm(selectors.profileModal, (data) => {
  setSubmitButtonText(profileModalSubmitBtn, "Saving...");

  api
    .editProfile(data)
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about);
      editProfilePopup.close();
    })
    .finally(() => {
      setSubmitButtonText(profileModalSubmitBtn, "Save");
    });
});

editBtn.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  profileTitleInput.value = profileData.name;
  profileDescriptionInput.value = profileData.info;
  editProfilePopup.open();
  editProfilePopup.setEventListeners();
});

// Card Section ================================================================

api
  .loadData()
  .then(([cards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);

    sectionInstance = new Section(
      {
        items: cards,
        renderer: (data) => {
          const card = renderCard(data, userId);
          sectionInstance.addItem(card);
        },
      },
      selectors.cardList,
      // userId
    );
    sectionInstance.renderItems(cards);
  })
 

const profileModal = new PopupWithForm(selectors.profileModal, (data) => {
  userInfo.setUserInfo(data.title, data.description);
  profileModal.close();
});

profileModal.setEventListeners();

//Profile Image ===============================================================

const profileImagePopup = new PopupWithForm(
  selectors.profileImageModal,
  (data) => {
    setSubmitButtonText(profileImageSubmitBtn, "Saving...");

    api
      .editProfileImage(data)
      .then((data) => {
        userInfo.setUserImage(data.avatar);
      })
      .then(() => {
        profileImagePopup.close();
      })
      .finally(() => {
        setSubmitButtonText(profileImageSubmitBtn, "Save");
      });
  }
);

profileImageBtn.addEventListener("click", () => {
  profileImagePopup.open();
  profileImagePopup.setEventListeners();
});

