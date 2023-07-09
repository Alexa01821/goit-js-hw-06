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

const listGallery = document.querySelector(".gallery");

// const createImageArray = images.map(({ url, alt }) => {
//   const createImageItem = document.createElement("li");
//   createImageItem.classList.add("item");
//   const createImage = document.createElement("img");
//   createImage.classList.add("image");
//   createImage.setAttribute("src", `${url}`);
//   createImage.setAttribute("alt", `${alt}`);
//   createImageItem.append(createImage);
//   return createImageItem;
// });

// listGallery.append(...createImageArray);

// const imageRef = images[1];
// const createImageItem = document.createElement('li');
// createImageItem.classList.add('.item');
// const createImage = document.createElement('img');
// createImage.classList.add('image');
// createImage.setAttribute('src', `${imageRef.url}`);
// createImage.setAttribute('alt', `${imageRef.alt}`);
// createImageItem.append(createImage);
// console.log(createImageItem);

const createImageArray = images.map(image => {
  const createImageItem = `
  <li><img class="image" src = "${image.url}" alt = "${image.alt}"></li>`
  return createImageItem;
});
listGallery.insertAdjacentHTML('beforebegin', createImageArray.join(' '));
