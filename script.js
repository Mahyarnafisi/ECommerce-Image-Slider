"use strict";
const productContainer = [...document.querySelectorAll(".product__container")];

const btnLeft = [...document.querySelectorAll(".btn--left")];
const btnRight = [...document.querySelectorAll(".btn--right")];

productContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;
  btnRight[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  btnLeft[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
