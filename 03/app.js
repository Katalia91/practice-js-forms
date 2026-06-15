const imagesList = document.querySelector(".images-list");
const fileInput = document.querySelector("input[type='file']");

fileInput.addEventListener("change", displayImages);

function displayImageDetails(e) {
  const files = e.target.files;
  const fileSize = e.target.files[0].size;
  const fileSizeInMB = fileSize * 0.000001;
  for (file of files) {
    console.log(
      `File name: ${file.name}, File size: ${(file.size * 0.000001).toFixed(2)}`,
    );
    generateImagePreview(e);
  }
}

function generateImagePreview(e) {
  if (file && file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      const prorotypeEl = document.querySelector(
        ".images-list__item--prototype",
      );
      const prototypeElNew = prorotypeEl.cloneNode(true);
      imagesList.appendChild(prototypeElNew);
      const newImg = prototypeElNew.querySelector(".images-list__item-img");
      newImg.src = readerEvent.target.result;
      prototypeElNew.classList.remove("images-list__item--prototype");
    };
    reader.readAsDataURL(file);
  }
}

function displayImages(e) {
  displayImageDetails(e);
}
