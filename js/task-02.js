const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRef =
  document.querySelector("#ingredients");

const createListItem = ingredients.map((item) => {
  const itemCreated = document.createElement("li");
  itemCreated.textContent = item;
  itemCreated.classList.add("item");
  return itemCreated;
});

listIngredientsRef.append(...createListItem);
