const list = document.querySelector("ul");
const listItem = document.querySelectorAll("li");
const form = document.forms["newItem"];
const deleteBtn = document.getElementsByTagName("span");

console.log(deleteBtn);

// Check input lenght
const checkInuptLength = function (x) {
  return x.length;
};

// Create list item
let createListItem = function (subValue) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(subValue));

  let span = document.createElement("span");
  span.classList = "delete";
  span.innerText = "x";

  li.appendChild(span);
  list.appendChild(li);
};

form.onsubmit = function (e) {
  e.preventDefault();
  let value = form.listItem.value;

  if (checkInuptLength(value) > 0) {
    form.listItem.value = "";
    createListItem(value);
  } else {
    alert("You have to enter something");
  }
};

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }

  if (e.target.className === "delete") {
    e.target.parentElement.remove();
  }
});
