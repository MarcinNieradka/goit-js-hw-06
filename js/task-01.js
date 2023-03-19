const listItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  // OR
  // console.log(`Category ${elem.firstElementChild.textContent}`);

  console.log(`Elements: ${elem.getElementsByTagName("li").length}`);
  // OR
  // console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
