// enabling validation by calling enableValidation()
// pass all the settings on call
function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMesageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMesageEl.classList.add(errorClass);
  errorMesageEl.textContent = inputEl.validationMessage;
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMesageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMesageEl.classList.remove(errorClass);
  errorMesageEl.textContent = "";
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options);
  }

  hideInputError(formEl, inputEl, options);
}

function disableBtn(element, options) {
  element.classList.add(options.inactiveButtonClass);
  element.disabled = true;
}

function enableBtn(element, options) {
  element.classList.remove(options.inactiveButtonClass);
  element.disabled = false;
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

function toggleButtonState(inputEls, submitBtn, options) {
  if (hasInvalidInput(inputEls)) {
    disableBtn(submitBtn, options);
    return;
  }
  enableBtn(submitBtn, options);
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitBtn = formEl.querySelector(options.submitButtonSelector);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitBtn, options);
    });
  });
}
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
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
  errorClass: "modal__input__error_visible",
};

enableValidation(config);
