import Card from "../components/Card.js";

import { FormValidator, settings} from "../components/FormValidator.js";

import { handleEscClose, closeModal, openModal, addClickCloseListener} from "../utils/utils.js";
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
  {
    name: "Milky Way",
    link: "https://images.unsplash.com/photo-1671863991352-3fc2281cccbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80",
  },
  {
    name: "Moraine Lake",
    link: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80",
  },
  {
    name: "Emerald Lake",
    link: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "llandwyn Island",
    link: "https://images.unsplash.com/photo-1515612148533-6247582c12c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Kilauea Hawaii",
    link: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Tromso Norway",
    link: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Carpathian",
    link: "https://images.unsplash.com/photo-1575126473661-877a8acf15a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Colonia Tovar",
    link: "https://images.unsplash.com/photo-1596679593779-2c965ea8f25b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    name: "Cuyagua Aragua",
    link: "https://images.unsplash.com/photo-1581260502159-c9204828728c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "San Juan",
    link: "https://images.unsplash.com/photo-1625642471723-12744e6e4211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];



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
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const addCardModal = document.querySelector("#add-card-modal");
const closeCardBtn = document.querySelector("#card-modal-close");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardImageInput = document.querySelector("#card-image-input");
const cardInputs = [...addCardModal.querySelectorAll('.modal__input')];
const cardAddBtn = addCardModal.querySelector(".modal__button");
const cardImagePop = document.querySelector("#card-image-modal");
console.log()
// card image elements //
const modalImage = cardImagePop.querySelector(".modal__image");
const modalCaption = cardImagePop.querySelector(".modal__image-name");
const modalImageCloseBtn = document.querySelector("#image-modal-close");

// modalELement //
const modalArray = document.querySelectorAll(".modal");

// Functions // 



modalArray.forEach(addClickCloseListener);


function renderCard(data) {
  const card = new Card(data,  "#card-template")
  cardsWrap.prepend(card.getView());
}

initialCards.forEach(renderCard);


function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleCardAddSubmit(event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  const data = {name,link};
  const cardElement = renderCard(data);
  event.target.reset();
  closeModal(addCardModal);
  addFormValidator.toggleButtonState();
}

/////////////////////Event Listeners///////////////

editBtn.addEventListener("click", function revealModal() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

addCardBtn.addEventListener("click", () => {
  openModal(addCardModal);
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

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardForm.addEventListener("submit", handleCardAddSubmit);


const editFormValidator = new FormValidator(settings, profileEditForm);
const addFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();