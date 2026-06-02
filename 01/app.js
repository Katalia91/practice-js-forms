const formEl = document.querySelector("form");
const firstName = document.querySelector('input[name="firstName"]');
const submitEl = document.querySelector('input[type="submit"]');
const lastName = document.querySelector('input[name="lastName"]');
const usersList = document.querySelector(".users-list");
const userEl = usersList.querySelector(".users-list__person");
formEl.addEventListener("submit", addUser);

function addUser(e) {
  e.preventDefault();
  const fullName = `${firstName.value} ${lastName.value}`;
  const newListEl = userEl.cloneNode();

  if (firstName.value && lastName.value) {
    usersList.appendChild(newListEl);
    newListEl.innerText = fullName;
  } else {
    alert("The fields are empty!");
  }

  formEl.reset();
}
