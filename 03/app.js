const imagesList = document.querySelector(".images-list");
const fileInput = document.querySelector("input[type='file']");
const chosenFiles = [];

fileInput.addEventListener("change", displayImages);

function displayImages(e) {
  const files = e.target.files;
  for (const file of files) {
    let duplicateFound = false;
    for (const chosenFile of chosenFiles) {
      if (file.name === chosenFile.name && file.size === chosenFile.size) {
        duplicateFound = true;
      }
    }
    if (!duplicateFound) {
      chosenFiles.push({
        name: file.name,
        size: file.size,
      });
      createNewListElement(file);
    }
  }

  console.log(chosenFiles);
}

function createNewListElement(file) {
  const prototypeEl = document.querySelector(".images-list__item--prototype");
  const clonedPrototypeEl = prototypeEl.cloneNode(true);
  imagesList.appendChild(clonedPrototypeEl);
  clonedPrototypeEl.classList.remove("images-list__item--prototype");
  const fileHeader = clonedPrototypeEl.querySelector(".images-list__item-name");
  const fileFooter = clonedPrototypeEl.querySelector(".images-list__item-size");

  const fileName = file.name;
  const fileSize = file.size;
  const fileSizeinMB = `File size: ${(fileSize * 0.000001).toFixed(2)} MB`;
  fileHeader.innerText = fileName;
  fileFooter.innerText = fileSizeinMB;
  if (file && file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      const fileImg = clonedPrototypeEl.querySelector(".images-list__item-img");
      fileImg.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  }
}
