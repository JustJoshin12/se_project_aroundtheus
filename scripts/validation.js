// enabling validation by calling enableValidation()
// pass all the settings on call
function showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
  const errorMesageEl = formEl.querySelector(`#${inputEl.id}-error`);
  console.log(errorMesageEl)
  inputEl.classList.add(inputErrorClass)
  errorMesageEl.classList.add(errorClass)
  errorMesageEl.textContent = inputEl.validationMessage;
  console.log(inputEl.validationMessage)
};

function hideInputError (formEl, inputEl, {inputErrorClass, errorClass}) {
    const errorMesageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass)
    errorMesageEl.classList.remove(errorClass)
    errorMesageEl.textContent = ""
};



function checkInputValidity (formEl, inputEl, options) {
   if(!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
   } else {
    hideInputError(formEl, inputEl, options)
   }
}


function setEventListeners(formEl, options) {
    const {inputSelector} = options
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (e) => {
           checkInputValidity(formEl, inputEl, options) 
        });
    });

}
function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
        });

       setEventListeners(formEl, options);

    });
}

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__input__error_visible"
  }

enableValidation(config);