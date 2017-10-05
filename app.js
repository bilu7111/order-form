'use strict';

BusMall.all = [];
BusMall.deleteItem = document.getElementById('delete'); // this should be an option for each item!
BusMall.addItem = document.getElementById('add')

BusMall.olEl = document.getElementById('unfilled-orders');

function BusMall(name, filePath, altText) {
  this.name = name;
  this.filePath = filePath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  BusMall.all.push(this);
}

function formData(name, street, city, state, zip, phone, cc) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.cc = cc;
}

new BusMall('luggage', 'img/bag.jpg', 'luggage');
new BusMall('banana cutter', 'img/banana.jpg', 'banana cutter');
new BusMall('bathroom stand', 'img/bathroom.jpg', 'bathroom stand');
new BusMall('rain boots', 'img/boots.jpg', 'rain boots');
new BusMall('breakfast maker', 'img/breakfast.jpg', 'breakfast maker');
new BusMall('meatball gum', 'img/bubblegum.jpg', 'meatball gum');
new BusMall('chair', 'img/chair.jpg', 'chair');
new BusMall('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new BusMall('dog beak', 'img/dog-duck.jpg', 'dog beak');
new BusMall('dragon meat', 'img/dragon.jpg', 'dragon meat');
new BusMall('utensil pen', 'img/pen.jpg', 'utensil pen');
new BusMall('sweeper dog', 'img/pet-sweep.jpg', 'sweeper dog');
new BusMall('pizza scissors', 'img/scissors.jpg', 'pizza scissors');
new BusMall('shark sleeper', 'img/shark.jpg', 'shark sleeper');
new BusMall('sweeper baby', 'img/sweep.png', 'sweeper baby');
new BusMall('tauntaun sleeper', 'img/tauntaun.jpg', 'tauntaun sleeper');
new BusMall('unicorn meat', 'img/unicorn.jpg'), 'unicorn meat';
new BusMall('usb tail', 'img/usb.gif', 'usb tail');
new BusMall('water can', 'img/water-can.jpg', 'water can');
new BusMall('wine glass', 'img/wine-glass.jpg', 'wine glass');

// event handlers
function handleAdd(event) {
  var liEl = document.createElement('li');
  liEl.textContent = // text content is the item name and filepath from all array
  BusMall.addItem.appendChild('li');

  event.target.formName.value = '';
  event.target.formStreet.value = '';
  event.target.formCity.value = '';
  event.target.formState.value = '';
  event.target.formZip.value = '';
  event.target.formPhone.value = '';
  event.target.formCC.value = '';
}




// event listeners
