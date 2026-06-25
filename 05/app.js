const firstName = document.querySelector("input[name='firstName']");
const lastName = document.querySelector("input[name='lastName']");
const streetName = document.querySelector("input[name='street']");
const houseNumber = document.querySelector("input[name='houseNumber']");
const flatNumber = document.querySelector("input[name='flatNumber']");
const postCode = document.querySelector("input[name='zip']");
const cityName = document.querySelector("input[name='city']");
const voivodeshipName = document.querySelector("select[name='voivodeship']");

const form = document.querySelector("form");
const messagesList = document.querySelector(".messages");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const streetNameValue = streetName.value;
  const houseNumberValue = houseNumber.value;
  const flatNumberValue = flatNumber.value;
  const postCodeValue = postCode.value;
  const cityNameValue = cityName.value;
  const voivodeshipNameValue = voivodeshipName.value;
  const zipPattern = postCode.pattern;
  console.log(zipPattern);

  if (firstNameValue.length < 3) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Write correct first name, it has to be longer than 2 characters and only contain letters";
  }
  if (lastNameValue.length < 3) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Write correct last name, it has to be longer than 2 characters and only contain letters";
  }
  if (streetNameValue.length < 3) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Write correct street name, it has to be longer than 2 characters and only contain letters";
  }
  if (houseNumberValue <= 0) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "House number cannot be a negative number letters, write correct house number";
  }
  if (flatNumberValue <= 0) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Flat number cannot be a negative number letters, write correct house number";
  }
  if (!postCodeValue.match(zipPattern)) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Zip code has to be numbers and it has to be in XX-XXX format.";
  }
  if (cityNameValue.length < 2) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText =
      "Write correct city name, it has to be longer than 1 character and only contain letters";
  }
  if (!voivodeshipNameValue) {
    const newMessage = document.createElement("li");
    messagesList.appendChild(newMessage);
    newMessage.innerText = "You need to select a voivodeship";
  }
}
