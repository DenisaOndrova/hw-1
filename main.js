//ukol 1 

function left() {
  const car = document.querySelector('.car');
  car.classList.remove('moveRight');
  car.classList.add('moveLeft');
}

function right() {
  const car = document.querySelector('.car');
  car.classList.remove('moveLeft');
  car.classList.add('moveRight');
}

