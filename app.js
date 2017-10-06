'use strict';

var formEl = document.getElementById('form');

function handleAdd(event) {
  event.preventDefault();

  var formData = {
    name: event.target.formName.value,
    street: event.target.formStreet.value,
    city: event.target.formCity.value,
    state: event.target.formState.value,
    zip: event.target.formZip.value,
    phone: event.target.formPhone.value,
    product: event.target.formProduct.value,
    quantity: event.target.formQuantity.value,
    cc: event.target.formCC.value,
  };
  // localStorage.formData = JSON.stringify(formData);
  localStorage.setItem('data', JSON.stringify(formData));

  window.location.href = 'cart.html';
}

formEl.addEventListener('submit', handleAdd);
