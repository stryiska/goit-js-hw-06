const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const placeForIngrs = document.querySelector("ul#ingredients");
// console.log(placeForIngrs);
const listEls = [];
ingredients.forEach((element) => {
  const ingredient = document.createElement("li");
  ingredient.class = "item";
  ingredient.textContent = element;
  listEls.push(ingredient);
  console.log(ingredient);
});

placeForIngrs.append(...listEls);
