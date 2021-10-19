let counterValue = 0;
const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  span: document.querySelector('#value'),
};

const onIncrement = () => {
  refs.span.textContent = counterValue += 1;
};
const onDecrement = () => {
  refs.span.textContent = counterValue -= 1;
};
refs.incrementBtn.addEventListener('click', onIncrement);
refs.decrementBtn.addEventListener('click', onDecrement);
