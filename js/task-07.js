const input = document.querySelector("input#font-size-control");
const text = document.getElementById("text");
console.log(text);

input.addEventListener("input", () => {
  text.style.fontSize = input.value + "px";
});
