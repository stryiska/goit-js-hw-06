const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li class="gallery_item">
      <img class="gallery_image" src="${image.url}" alt="${image.alt}"></img>
    </li>`,
  )
  .join("");
console.log(markup);
gallery.insertAdjacentHTML("afterbegin", markup);

// Styles

gallery.style.display = "flex";
gallery.style.maxWidth = "1600px";
gallery.style.gap = "30px";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "center";

const thumb = document.querySelectorAll(".gallery_item");
thumb.forEach((element) => {
  element.style.display = "flex";
  element.style.maxWidth = "100%";
  element.style.backgroundColor = "green";
});
const imagesEl = document.querySelectorAll(".gallery_image");
imagesEl.forEach((image) => {
  image.style.display = "block";
  image.style.maxWidth = "100%";
});
