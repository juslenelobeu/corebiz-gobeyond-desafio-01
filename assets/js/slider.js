// selecionando todos os itens do slider
const slider = document.querySelectorAll('[data-js="slider__item"]');

// selecionando os botoes
const nextButton = document.querySelector('[data-js="slider__button--next"]');
const prevButton = document.querySelector('[data-js="slider__button--prev"]');

// identifico o ultimo item do slider
const lastSliderItem = slider.length - 1;

// item do slider atual
let currentSliderItem = 0;

// remove e adiciona classe
const classRemove = () =>
  slider.forEach((item) => item.classList.remove("slider__item--visible"));
const classAdd = () =>
  slider[currentSliderItem].classList.add("slider__item--visible");

// escuta os botoes
nextButton.addEventListener("click", () => {
  currentSliderItem === lastSliderItem
    ? (currentSliderItem = 0)
    : currentSliderItem++;
  classRemove();
  classAdd();
});
prevButton.addEventListener("click", () => {
  currentSliderItem === 0
    ? (currentSliderItem = lastSliderItem)
    : currentSliderItem--;
  classRemove();
  classAdd();
});
