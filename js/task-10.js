function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
// console.log(btnCreate);
// console.log(btnDestroy);
// console.log(boxes);

const createBoxes = (amount) => {
  amount = input.value;
  // console.log(input.value);
  for (let index = 0; index < amount; index += 1) {
    const baseSize = 30;
    const biggestSize = baseSize + index * 10;

    const box = document.createElement('div');
    box.setAttribute(
      'style',
      `width: ${biggestSize}px; height: ${biggestSize}px; background: ${getRandomHexColor()}`
    );
    boxes.append(box);
  }
};

const destroyBoxes = () => {
  // console.log('destroy');
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
// btnCreate.addEventListener('click', function (e) {
//   console.log('create');
// });
// btnDestroy.addEventListener('click', function (e) {
//   console.log('destroy');
// });
