const input = document.querySelector("input#validation-input");
const givenLength = input.dataset.length;
console.log(givenLength);

const getLength = (event) => {
  console.log(event.target.value.length);
};
input.addEventListener("input", getLength);
const isValid = (event) => {
  const inputLength = event.target.value.length;
  if (inputLength !== 6) {
    // console.log("invalid");
    // console.log(input.classList);
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    // console.log("valid");
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};
input.addEventListener("blur", isValid);
