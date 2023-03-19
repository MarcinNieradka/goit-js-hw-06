const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((elem) => {
  const listItem = document.createElement("li");
  listItem.textContent = elem;
  listItem.classList.add("item");
  // OR
  // listItem.className = "item";
  ingredientsList.append(listItem);
});
