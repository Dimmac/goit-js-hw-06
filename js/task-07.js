const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

const handleInput = (event) => {
  event.target.value;
  console.log(event.target.value);
  refs.spanText.setAttribute('style', `font-size: ${event.target.value}px`);
};

refs.fontSizeControl.addEventListener('input', handleInput);
