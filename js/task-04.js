const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

counterValue.value = 0;

plusBtn.addEventListener("click", () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
  //   console.log(counterValue.value);
  //   console.log("+Button was clicked");
});
minusBtn.addEventListener("click", () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
  //   console.log(counterValue.value);
  //   console.log("-Button was clicked");
});
// console.log(counterValue.value);
