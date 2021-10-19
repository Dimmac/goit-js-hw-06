const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.dataset.length;

const handleInput = (event) => {
  const userGet = event.target.value.trim().length;

  if (userGet !== parseInt(dataLength)) {
    validationInput.classList.add('invalid');
    return;
  }

  validationInput.classList.remove('invalid');
  validationInput.classList.add('valid');
};

validationInput.addEventListener('blur', handleInput);
