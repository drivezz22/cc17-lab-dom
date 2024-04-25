let count = 0;
const addBtn = document.getElementById("add-btn");
const contentDiv = document.getElementById("content");

addBtn.addEventListener("click", createContent);

function createContent() {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const edit = document.createElement("button");
  const del = document.createElement("button");
  span.textContent = `Task ${count}`;
  count++;
  edit.textContent = "Edit";
  del.textContent = "Del";
  div.append(span);
  div.append(edit);
  div.append(del);
  contentDiv.append(div);
  span.addEventListener("click", toggleText);
  edit.addEventListener("click", editText);
  del.addEventListener("click", delText);
}

function toggleText() {
  this.classList.toggle("dash");
  if (this.classList.contains("dash")) {
    this.style.textDecoration = "line-through";
    this.style.color = "green";
  } else {
    this.style.textDecoration = "";
    this.style.color = "";
  }
}

function editText() {
  const span = this.previousElementSibling;
  let newText = prompt("Enter new text", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText;
  }
}
function delText() {
  const div = this.parentElement;
  console.log("div", div);
  div.textContent = "";
}
