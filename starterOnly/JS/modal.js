function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelector('span.close');
const form = document.getElementById('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

modalClose.addEventListener('click', closeModal);

function closeModal() {
  const error = document.querySelectorAll('.error');
  error.forEach(function (element) {
    element.style.display = 'none';
  });
  formFirst.classList.remove('error-border');
  formLast.classList.remove('error-border');
  formEmail.classList.remove('error-border');
  formBirthdate.classList.remove('error-border');
  formQuantity.classList.remove('error-border');

  modalbg.removeAttribute('style');
  form.reset();
}
