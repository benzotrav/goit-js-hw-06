const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector("#ingredients");
const separateIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const liItem = document.createElement("li");

    liItem.textContent = ingredient;

    liItem.classList.add("item");

    return liItem;
  })
}
const newIngredients = separateIngredients(ingredients)
listIngredients.append(...newIngredients)