function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.getElementById('boxes');
const inputElement = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let boxSize = 30;

// ============ FUNCTIONS START

const createBoxes = amount => {
  if (amount === '') {
    alert('Podaj liczbę boxów do utworzenia');
  } else {
    for (let i = 0; i < amount; i++) {
      const listItem = document.createElement('div');
      listItem.style.width = `${boxSize}px`;
      listItem.style.height = `${boxSize}px`;
      listItem.style.backgroundColor = getRandomHexColor();
      boxes.append(listItem);
      boxSize += 10;
    }
    // console.log(boxNumber);
  }
};

// ============ on delay START =============

// const doDelay = i => {
//   setTimeout(() => {
//     const listItem = document.createElement('div');
//     listItem.style.width = `${boxSize}px`;
//     listItem.style.height = `${boxSize}px`;
//     listItem.style.backgroundColor = getRandomHexColor();
//     boxes.append(listItem);
//     boxSize += 10;
//   }, 1000);
// };

// const createBoxes = amount => {
//   if (amount === '') {
//     alert('Podaj liczbę boxów do utworzenia');
//   } else {
//     for (let i = 0; i < amount; i++) {
//       doDelay(i);
//     }
//   }
// };

// ============ on delay END =============

const destroyBoxes = () => {
  boxes.innerHTML = '';
  boxSize = 30;
  inputElement.value = '';
};
// ============ FUNCTIONS END

// ============ EVENT LISTENERS START

createBtn.addEventListener('click', () => {
  createBoxes(inputElement.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

// ============ EVENT LISTENERS END
