// Prénom

const formFirst = document.getElementById('first');
const errorFirst = document.getElementById('errorFirst');

function succesfullFirst() {
  errorFirst.style.display = 'none';
  formFirst.classList.remove('error-border');
  return true;
}

function failedFirst() {
  errorFirst.style.display = 'block';
  formFirst.classList.add('error-border');
  return false;
}

function emptyFirst() {
  if (
    formFirst.value.length < 2 ||
    !formFirst.value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)
  ) {
    return failedFirst();
  } else {
    return succesfullFirst();
  }
}

function validationFirst() {
  if (!emptyFirst()) {
    return false;
  } else {
    return true;
  }
}

// Nom de famille

const formLast = document.getElementById('last');
const errorLast = document.getElementById('errorLast');

function succesfullLast() {
  errorLast.style.display = 'none';
  formLast.classList.remove('error-border');
  return true;
}

function failedLast() {
  errorLast.style.display = 'block';
  formLast.classList.add('error-border');
  return false;
}

function emptyLast() {
  if (
    formLast.value.length < 2 ||
    !formLast.value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)
  ) {
    return failedLast();
  } else {
    return succesfullLast();
  }
}

function validationLast() {
  if (!emptyLast()) {
    return false;
  } else {
    return true;
  }
}

// Email

const formEmail = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

function succesfullEmail() {
  errorEmail.style.display = 'none';
  formEmail.classList.remove('error-border');
  return true;
}

function failedEmail() {
  errorEmail.style.display = 'block';
  formEmail.classList.add('error-border');
  return false;
}

function emptyEmail() {
  if (
    !formEmail.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    return failedEmail();
  } else {
    return succesfullEmail();
  }
}

function validationEmail() {
  if (!emptyEmail()) {
    return false;
  } else {
    return true;
  }
}

// Birthdate

const formBirthdate = document.getElementById('birthdate');
const errorBirthdate = document.getElementById('errorBirthdate');

function succesfullBirthdate() {
  errorBirthdate.style.display = 'none';
  formBirthdate.classList.remove('error-border');
  return true;
}

function failedBirthdate() {
  errorBirthdate.style.display = 'block';
  formBirthdate.classList.add('error-border');
  return false;
}

function emptyBirthdate() {
  if (
    !formBirthdate.value.match(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    return failedBirthdate();
  } else {
    return succesfullBirthdate();
  }
}

function validationBirthdate() {
  if (!emptyBirthdate()) {
    return false;
  } else {
    return true;
  }
}

// Quantity

const formQuantity = document.getElementById('quantity');
const errorQuantity = document.getElementById('errorQuantity');

function succesfullQuantity() {
  errorQuantity.style.display = 'none';
  formQuantity.classList.remove('error-border');
  return true;
}

function failedQuantity() {
  errorQuantity.style.display = 'block';
  formQuantity.classList.add('error-border');
  return false;
}

function emptyQuantity() {
  if (!formQuantity.value.match(/^[0-9]$/)) {
    return failedQuantity();
  } else {
    return succesfullQuantity();
  }
}

function validationQuantity() {
  if (!emptyQuantity()) {
    return false;
  } else {
    return true;
  }
}

// Location

const errorLocation = document.getElementById('errorLocation');

function successfullLocation() {
  errorLocation.style.display = 'none';
  return true;
}

function failedLocation() {
  errorLocation.style.display = 'block';
  return false;
}

function validationLocation() {
  const formlocations = document.querySelectorAll(
    'input[name="location"]:checked'
  );
  if (formlocations.length > 0) {
    return successfullLocation();
  } else {
    return failedLocation();
  }
}

// Conditions d'utilisation

const errorCondition = document.getElementById('errorCondition');

function successfullCondition() {
  errorCondition.style.display = 'none';
  return true;
}

function failedCondition() {
  errorCondition.style.display = 'block';
  return false;
}

function validationCondition() {
  const formCondition = document.querySelectorAll(
    'input[name="condition"]:checked'
  );
  if (formCondition.length > 0) {
    return successfullCondition();
  } else {
    return failedCondition();
  }
}

/*function () {
  if (!emptyLocation()) {
    return false;
  } else {
    return true;
  }
}*/

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
