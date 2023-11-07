import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");
const galleryMurkup = insertGalleryHTML(galleryItems);

galleryElement.insertAdjacentHTML("beforeend", galleryMurkup);

function insertGalleryHTML(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
              </li>`;
    })
    .join("");
}

const options = {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  enableKeyboard: true,
  docClose: true,
  doubleTapZoom: 2,
};

const lightbox = new SimpleLightbox(".gallery a", options);
