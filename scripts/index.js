let initialCards = [
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
    name: "Milky way",
    link: "https://unsplash.com/photos/0zlJK2AxLBc",
  },
  {
    name: "Moraine Lake",
    link: "https://unsplash.com/photos/oMneOBYhJxY",
  },
  {
    name: "Emerald Lake",
    link: "https://unsplash.com/photos/OgcJIKRnRC8",
  },
  {
    name: "llandwyn island",
    link: "https://unsplash.com/photos/r6g4GcD6lP0",
  },
  {
    name: "Kilauea Hawaii",
    link: "https://unsplash.com/photos/Aduh0KXCI1w",
  },
  {
    name: "Tromso Norway",
    link: "https://unsplash.com/photos/LtnPejWDSAY",
  },
  {
    name: "Carpathian",
    link: "https://unsplash.com/photos/sWa8uXRV4_g",
  },
  {
    name: "Colonia Tovar",
    link: "https://unsplash.com/photos/uxG3r73r4WM",
  },
  {
    name: "Cuyagua Aragua",
    link: "https://unsplash.com/photos/fP44mZBa2zQ",
  },
  {
    name: "San Juan",
    link: "https://unsplash.com/photos/Pm8Qaht8kXU",
  },
];

let editBtn = document.querySelector(".profile__edit-button");
let closeBtn = document.querySelector(".modal__close");
let modalPage = document.querySelector(".modal");

editBtn.addEventListener("click",function revealModal () {
   modalPage.classList.add("modal_opened");
})

closeBtn.addEventListener("click",function hideModal () {
  modalPage.classList.remove("modal_opened");
})


