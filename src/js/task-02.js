const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientsList = [];

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;
  ingredientsList.push(ingredientsItem);
});

ingredientsListEl.append(...ingredientsList);