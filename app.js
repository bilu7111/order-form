'use strict';






var formEl = document.getElementById('form');

// event handlers
function handleAdd(event) {
  event.preventDefault();
  console.log('hello');

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
  localStorage.formData = JSON.stringify(formData);
  console.log(localStorage.formData);

}

formEl.addEventListener('submit', handleAdd);
