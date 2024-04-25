const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

function validatePhone(text) {
  if (text.trim() === "") {
    return "Phone Number is required";
  } else if (typeof +text !== "number" || isNaN(+text)) {
    return "Phone Number is invalid";
  } else if (text.length !== 10) {
    return "Invalid length";
  } else {
    return;
  }
}

function formSumbit(e) {
  e.preventDefault();
  const inputValue = input.value;
  const result = validatePhone(inputValue);

  if (result) {
    p.textContent = result;
    p.style.color = "red";
    input.style.borderColor = "red";
    p.hidden = false;
  } else {
    alert("Your number is valid");
    input.style.borderColor = "";
    p.hidden = true;
  }
}

form.addEventListener("submit", formSumbit);
