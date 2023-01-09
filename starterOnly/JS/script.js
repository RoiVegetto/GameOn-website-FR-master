const formulary = document.getElementById('form');
const modalValidate = document.getElementById('modal-validate');
const formFirst = document.getElementById('first');
const errorFirst = document.getElementById('errorFirst');
const formLast = document.getElementById('last');
const errorLast = document.getElementById('errorLast');
const formEmail = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');
const formBirthdate = document.getElementById('birthdate');
const errorBirthdate = document.getElementById('errorBirthdate');
const formQuantity = document.getElementById('quantity');
const errorQuantity = document.getElementById('errorQuantity');
const errorLocation = document.getElementById('errorLocation');
const errorCondition = document.getElementById('errorCondition');

// Prénom

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

function validationQuantity() {
  if (formQuantity.value < 1 || formQuantity.value > 100) {
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

formulary.addEventListener('submit', function (ev) {
  ev.preventDefault();
});

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

function checkValidation() {
  if (validate()) {
    // Masquer la modale
    formulary.style.visibility = 'hidden';
    // Afficher l'élément souhaité à la place de la modale

    modalValidate.style.display = 'flex';
  } else {
  }
}
