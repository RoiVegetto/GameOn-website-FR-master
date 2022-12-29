const modalBody = document.getElementsByClassName('modal-body');
const modalValidate = document.getElementsByClassName('modal-validate');

// Prénom

const formFirst = document.getElementById('first');
const errorFirst = document.getElementById('errorFirst');

function validationFirst() {
  if (
    formFirst.value.length < 2 ||
    !formFirst.value.match(/^[A-Za-z-éèêàâäiîçô\s]{2,}$/)
  ) {
    errorFirst.style.display = 'block';
    formFirst.classList.add('error-border');
    return false;
  } else {
    errorFirst.style.display = 'none';
    formFirst.classList.remove('error-border');
    return true;
  }
}

// Nom de famille

const formLast = document.getElementById('last');
const errorLast = document.getElementById('errorLast');

function validationLast() {
  if (
    formLast.value.length < 2 ||
    !formLast.value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)
  ) {
    errorLast.style.display = 'block';
    formLast.classList.add('error-border');
    return false;
  } else {
    errorLast.style.display = 'none';
    formLast.classList.remove('error-border');
    return true;
  }
}

// Email

const formEmail = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

function validationEmail() {
  if (
    !formEmail.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
  ) {
    errorEmail.style.display = 'block';
    formEmail.classList.add('error-border');
    return false;
  } else {
    errorEmail.style.display = 'none';
    formEmail.classList.remove('error-border');
    return true;
  }
}

// Birthdate

const formBirthdate = document.getElementById('birthdate');
const errorBirthdate = document.getElementById('errorBirthdate');

function validationBirthdate() {
  if (
    !formBirthdate.value.match(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    errorBirthdate.style.display = 'block';
    formBirthdate.classList.add('error-border');
    return false;
  } else {
    errorBirthdate.style.display = 'none';
    formBirthdate.classList.remove('error-border');
    return true;
  }
}

// Quantity

const formQuantity = document.getElementById('quantity');
const errorQuantity = document.getElementById('errorQuantity');

function validationQuantity() {
  if (formQuantity.value < 0 || formQuantity.value === '') {
    errorQuantity.style.display = 'block';
    formQuantity.classList.add('error-border');
    return false;
  } else {
    errorQuantity.style.display = 'none';
    formQuantity.classList.remove('error-border');
    return true;
  }
}

// Location

const errorLocation = document.getElementById('errorLocation');

function validationLocation() {
  const formlocations = document.querySelectorAll(
    'input[name="location"]:checked'
  );
  if (formlocations.length > 0) {
    errorLocation.style.display = 'none';
    return true;
  } else {
    errorLocation.style.display = 'block';
    return false;
  }
}

// Conditions d'utilisation

const errorCondition = document.getElementById('errorCondition');

function validationCondition() {
  const formCondition = document.querySelectorAll(
    'input[name="condition"]:checked'
  );
  if (formCondition.length > 0) {
    errorCondition.style.display = 'none';
    return true;
  } else {
    errorCondition.style.display = 'block';
    return false;
  }
}

function validate() {
  let checkIsFirstnameValid = validationFirst();
  let checkIsLastnameValid = validationLast();
  let checkIsEmailValid = validationEmail();
  let checkIsBirthdateValid = validationBirthdate();
  let checkIsQuantityValid = validationQuantity();
  let checkIsLocationValid = validationLocation();
  let checkIsConditionValid = validationCondition();

  return (
    checkIsFirstnameValid &&
    checkIsLastnameValid &&
    checkIsEmailValid &&
    checkIsBirthdateValid &&
    checkIsQuantityValid &&
    checkIsLocationValid &&
    checkIsConditionValid
  );
}

/*function changeModal() {
  modalBody.style.display = 'none';
  modalValidate.style.display = 'flex';
}

function combinedFunc() {
  if (validate()) {
    changeModal();
  }
}
combinedFunc();

/*function validateModal() {
  validate
}*/

/* if (!validationFirst(first.value)) {
    return false;
  } else if (!validationLast(last.value)) {
    return false;
  } else if (!validationEmail(email.value)) {
    return false;
  } else if (!validationBirthdate(birthdate.value)) {
    return false;
  } else if (!validationQuantity(quantity.value)) {
    return false;
  } else if (!validationLocation()) {
    return false;
  }
  return true;

function checkLast() {
  if (formLast.value.length >= 2) {
    formValidity.last = true;
  } else {
    formValidity.last = false;
  }
}

function checkEmail() {
  if (value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    formValidity.email = true;
  } else {
    formValidity.email = false;
  }
}

function checkBirthdate() {
  if () {
    formValidity.birthdate = true;
  } else {
    formValidity.birthdate = false;
  }
}

function checkQuantity() {
  if () {
    formValidity.quantity = true;
  } else {
    formValidity.quantity = false;
  }
}*/
