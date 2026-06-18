const imagesList = document.querySelector(".images-list");
const fileInput = document.querySelector("input[type='file']");
const chosenFiles = [];

fileInput.addEventListener("change", displayImages);

function checkDuplicate(file, chosenFile) {
  if (chosenFile.name !== file.name && chosenFile.size !== file.size) {
    return false;
  }
}
function displayImages(e) {
  const files = e.target.files;
  for (const file of files) {
    chosenFiles.push({
      name: file.name,
      size: file.size,
    });
    createNewListElement(file);
  }
}

function createNewListElement(file) {
  console.log(chosenFiles);
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

// function displayImageDetails(e) {
//   const files = e.target.files;
//   const fileSize = e.target.files[0].size;
//   const fileSizeInMB = (fileSize * 0.000001).toFixed(2);
//   for (const file of files) {
//     console.log(`File name: ${file.name}, File size: ${fileSizeInMB}`);
//     generateImagePreview(file);
//   }
// }

// function generateImagePreview(file) {
//   if (file && file.type.includes("image")) {
//     const reader = new FileReader();
//     reader.onload = function (readerEvent) {
//       const prorotypeEl = document.querySelector(
//         ".images-list__item--prototype",
//       );
//       const prototypeElNew = prorotypeEl.cloneNode(true);
//       imagesList.appendChild(prototypeElNew);
//       const newImg = prototypeElNew.querySelector(".images-list__item-img");
//       const imageHeader = prototypeElNew.querySelector(
//         ".images-list__item-name",
//       );
//       const imageFooter = prototypeElNew.querySelector(
//         ".images-list__item-size",
//       );
//       newImg.src = readerEvent.target.result;
//       imageHeader.innerText = file.name;
//       imageFooter.innerText = file.size * (0.000001).toFixed(2);
//       prototypeElNew.classList.remove("images-list__item--prototype");
//     };
//     reader.readAsDataURL(file);
//   }
// }

// function displayImages(e) {
//   displayImageDetails(e);
// }
