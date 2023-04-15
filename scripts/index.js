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



const editBtn = document.querySelector(".profile__edit-button");      
const closeProfileBtn = document.querySelector("#profile-modal-close");     
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const addCardBtn = document.querySelector(".profile__add-button");


 
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const addCardModal = document.querySelector("#add-card-modal");
const closeCardBtn = document.querySelector("#card-modal-close");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTitleInput = document.querySelector("#card-title-input");
const cardImageInput = document.querySelector("#card-image-input");
const cardImagePop = document.querySelector("#card-image-modal");

/////////////////////Functions///////////////////////

function closeModal(modal) {
  modal.classList.remove("modal_opened")
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}



function createCard (data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const card = cardElement.querySelector(".card");


  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  })
  
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove(card);
  });

  cardImageEl.src = data.link;
  cardImageEl.alt = `Photo of ${data.name}`;
  cardTitleEl.textContent = data.name;
  return cardElement;
}

function renderCard(data) {
  const cardElement = createCard(data);
  cardsWrap.prepend(cardElement);
}

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

/////////////////////Event Handlers/////////////////

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value
  profileDescription.textContent = profileDescriptionInput.value
  profileEditModal.classList.remove("modal__opened");
}

function handleCardAddSubmit(event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  
  const cardElement = createCard({
    name,
    link,
  });

  cardsWrap.prepend(cardElement);
  addCardModal.classList.remove("modal__opened");
  
}

/////////////////////Event Listeners///////////////


cardTemplate.addEventListener("click", () => {
  
  cardImagePop.classList.add("modal__opened");
})


editBtn.addEventListener("click",function revealModal () {
   profileTitleInput.value = profileTitle.textContent;
   profileDescriptionInput.value = profileDescription.textContent;
   profileEditModal.classList.add("modal__opened");
})

addCardBtn.addEventListener("click",  () => {
  addCardModal.classList.add("modal__opened");
})


closeProfileBtn.addEventListener("click", () => {
  profileEditModal.classList.remove("modal__opened");
});

closeCardBtn.addEventListener("click", () => {
  addCardModal.classList.remove("modal__opened");
});

 

profileEditForm.addEventListener('submit', handleProfileEditSubmit)

addCardForm.addEventListener('submit', handleCardAddSubmit)




