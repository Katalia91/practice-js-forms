const form = document.querySelector("form");
const emailField = document.getElementById("formLogin");
const passOne = document.getElementById("formPass1");
const passTwo = document.getElementById("formPass2");
const regulations = document.getElementById("formAccept");
const errorSummary = document.querySelector(".error-summary");
const errorElement = document.createElement("li");
const allLabels = form.querySelectorAll("label");

form.addEventListener("submit", checkForm);
form.noValidate = true;

function checkForm(e) {
  const errors = [];
  allLabels.forEach(function (labelEl) {
    labelEl.classList.remove("error");
  });
  e.preventDefault();
  checkEmail(errors, emailField);
  checkPassword(errors, passOne, passTwo);
  checkRegulations(errors, regulations);
  if (errors.length === 0) {
    console.log("done");
  } else {
    errors.forEach(function (errorEl) {
      console.log(errorEl);
      const errorLabel = errorEl.previousElementSibling;
      errorLabel.classList.add("error");
    });
  }
}
function checkEmail(errors, emailField) {
  if (!emailField.value.includes("@")) {
    errors.push(emailField);
  }
}

function checkPassword(errors, passOne, passTwo) {
  if (passOne.value.length < 6) {
    errors.push(passOne);
  } else if (passTwo.value !== passOne.value) {
    errors.push(passTwo);
  }
}

function checkRegulations(errors, regulations) {
  if (!regulations.checked) {
    errors.push(regulations);
  }
}
