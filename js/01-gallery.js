import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");

galleryElement.insertAdjacentHTML("beforeend", insertGalleryHTML(galleryItems));

galleryElement.addEventListener("click", onGalleryElement);

function insertGalleryHTML(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <img src="${preview}" alt="${description}" data-original="${original}" class="gallery__image" />
            </li>`;
    })
    .join("");
}

function onGalleryElement(event) {
  const originalUrl = event.target.dataset.original;
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  console.log(originalUrl);

  const instance = basicLightbox.create(
    `<img src="${originalUrl}" width="1200">`
  );

  instance.show();
}
