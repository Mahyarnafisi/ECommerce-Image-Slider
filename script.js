"use strict";
const containerProduct = [...document.querySelectorAll(".product__container")];
const btnLeft = [...document.querySelectorAll(".btn--left")];
const btnRight = [...document.querySelectorAll(".btn--right")];

containerProduct.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWith = containerDimension.width;
  btnLeft[i].addEventListener("click", () => {
    item.scrollLeft -= containerWith;
  });

  btnRight[i].addEventListener("click", () => {
    item.scrollLeft += containerWith;
  });
});
