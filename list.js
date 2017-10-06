'use strict';

var formData = JSON.parse(localStorage.getItem('data'));
console.log(formData);

var ulEl = document.getElementById('ordered');

var liEl = document.createElement('li');
liEl.textContent = formData.product + '  >>img here<<   >>delete button here<<' ;
ulEl.appendChild(liEl);

// new Busmall ('Bag', 'img/bag.jpg', 'bag');
// new Busmall ('Banana', 'img/banana.jpg', 'banana');
// new Busmall ('Bathroom', 'img/bathroom.jpg', 'bathroom');
// new Busmall ('Boots', 'img/boots.jpg', 'boots');
// new Busmall ('Breakfast', 'img/breakfast.jpg', 'breakfast');
// new Busmall ('Bubblegum', 'img/bubblegum.jpg', 'bubblegum');
// new Busmall ('Chair', 'img/chair.jpg', 'chair');
// new Busmall ('Cthulhu', 'img/cthulhu.jpg','cthulhu');
// new Busmall ('Dogduck', 'img/dog-duck.jpg', 'dogduck');
// new Busmall ('Dragon', 'img/dragon.jpg', 'dragon');
// new Busmall ('Pen', 'img/pen.jpg', 'pen');
// new Busmall ('Petsweep', 'img/pet-sweep.jpg', 'petsweep');
// new Busmall ('Scissors', 'img/scissors.jpg', 'scissors');
// new Busmall ('Shark', 'img/shark.jpg', 'shark');
// new Busmall ('Sweep', 'img/sweep.png', 'sweep');
// new Busmall ('Tauntaun', 'img/tauntaun.jpg', 'tauntaun');
// new Busmall ('Unicorn', 'img/unicorn.jpg','unicorn');
// new Busmall ('Usb', 'img/usb.gif', 'usb');
// new Busmall ('Watercan', 'img/water-can.jpg', 'watercan');
// new Busmall ('Wineglass', 'img/wine-glass.jpg', 'wineglass');
