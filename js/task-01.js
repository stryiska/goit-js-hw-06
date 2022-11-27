const categories = document.querySelector("#categories");

const numberOfCategories = categories.children.length;
console.log("Number of categories:", numberOfCategories);

const list = document.querySelectorAll("li.item");
console.log(list);

list.forEach((item) => {
  let title = item.firstElementChild;
  let items = item.lastElementChild;

  console.log("Category:", title.textContent);
  console.log("Elements:", items.children.length);
});
