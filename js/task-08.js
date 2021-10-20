const loginForm = document.querySelector('.login-form');
console.dir(loginForm.elements);
const onSubmit = (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (!email || !password) return alert('все поля должны быть заполнены!');

  console.log({ email, password });
  loginForm.reset();
};

loginForm.addEventListener('submit', onSubmit);
