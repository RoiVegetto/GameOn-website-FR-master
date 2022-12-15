const formValidity = {
  first: false,
  last: false,
  email: false,
  birthdate: false,
  quantity: false,
};

const formFirst = document.querySelector('first');
const formLast = document.querySelector('last');
const formEmail = document.querySelector('email');
const formBirthdate = document.querySelector('birthdate');
const formQuantity = document.querySelector('quantity');

/**
 *
 * @param {*} name
 */
function checkFirst() {
  if (formFirst.value.length >= 2) {
    formValidity.first = true;
  } else {
    formValidity.first = false;
  }
}

function checkLast() {
  if (formLast.value.length >= 2) {
    formValidity.last = true;
  } else {
    formValidity.last = false;
  }
}

function validate() {
  checkFirst();
  if (formValidity.first == true) {
    return true;
  } else return false;
}
