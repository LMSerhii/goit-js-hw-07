import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");
const galleryMurkup = insertGalleryHTML(galleryItems);

galleryElement.insertAdjacentHTML("beforeend", galleryMurkup);
galleryElement.addEventListener("click", onGalleryElement);

function insertGalleryHTML(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
    })
    .join("");
}

function onGalleryElement(event) {
  const originalUrl = event.target.dataset.source;
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  event.preventDefault();

  if (!isGalleryImageEl) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${originalUrl}" width="1200">`
  );

  instance.show();

  galleryElement.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
