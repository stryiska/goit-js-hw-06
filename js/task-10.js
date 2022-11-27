function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
let amount = 1;
const getAmount = () => {
  amount = inputEl.value;

  return amount;
};

// console.log(amount);

const createBoxes = (amount) => {
  amount = inputEl.value;
  let boxSize = 30;
  let str = `<div class="box" style="width:${boxSize}px; height:${boxSize}px"></div>`;
  let multiBox = "";

  const items = [];
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    // item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    boxesEl.style.display = "flex";
    boxesEl.style.flexWrap = "wrap";
    item.style.height = "100px";
    item.style.width = "100px";
    item.classList.add("item");
    items.push(item);
  }
  boxesEl.append(...items);
  console.log(items);
};
btnCreate.addEventListener("click", createBoxes);

const destroyBoxes = (e) => {
  boxesEl.innerHTML = "";
};
btnDestroy.addEventListener("click", destroyBoxes);
