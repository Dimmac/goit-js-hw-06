const refs = {
  nameInput: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', (event) => {
  refs.span.textContent = event.target.value;
});
