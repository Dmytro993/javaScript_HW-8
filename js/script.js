import galleryList from "./gallery-items.js";

const ulList = document.querySelector("ul.js-gallery");
const overlay = document.querySelector("div.lightbox__overlay");
const divElement = document.querySelector("div.lightbox");
const changeImg = document.querySelector("img.lightbox__image");
const btn = document.querySelector('button[data-action="close-lightbox"]');

console.log(btn);
const createGallery = function ({ preview, original, description }) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
   
  >
    <img
      class="gallery__image"
      src="${original}"
      data-source="${original}"
      alt="${description}"
      width="400px"
    />
  </a>
</li>`;
};

const pushHTML = galleryList.map(createGallery).join("");
ulList.insertAdjacentHTML("beforeend", pushHTML);

ulList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  divElement.classList.add("is-open");
  changeImg.src = event.target.src;
  window.addEventListener("keydown", removeEscape)
});
overlay.addEventListener("click", removeIsOpen);
btn.addEventListener("click", removeIsOpen)

function removeIsOpen(){
  divElement.classList.remove("is-open");
  changeImg.src = "";
  window.removeEventListener("keydown",removeEscape)
};

function removeEscape(event) {
  if (event.code === "Escape") {
    removeIsOpen();
  }
}

