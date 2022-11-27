const span = document.querySelector("#name-output");
span.textContent = "Anonymous";

const input = document.querySelector("#name-input");

const userName = (event) => {
  console.log(event);
  console.log("currentTarget: ", event.currentTarget.value);

  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else span.textContent = event.currentTarget.value;
};

input.addEventListener("input", userName);
