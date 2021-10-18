const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newArray = [];
const ingredientsRef = document.querySelector('#ingredients');
ingredients.forEach((ingredient) => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = ingredient;
  ingredientsItemRef.classList.add('item');
  newArray.push(ingredientsItemRef);
});
ingredientsRef.append(...newArray);
