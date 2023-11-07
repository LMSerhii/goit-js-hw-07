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
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
              </li>`;
    })
    .join("");
}

function onGalleryElement(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
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

  lightbox.on("error.simplelightbox", (e) => console.log(e));
}
