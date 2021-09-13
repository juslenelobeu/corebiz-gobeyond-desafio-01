// selecionando todos os itens do carouselProduct
const carouselProduct = document.querySelectorAll('[data-js="products__list"]');

// selecionando os botoes
const nextProduct = document.querySelector('[data-js="product__button--next"]');
const prevProduct = document.querySelector('[data-js="product__button--prev"]');

// identifico o ultimo item do carouselProduct
const lastCarouselProductItem = carouselProduct.length - 1;

// item do carouselProduct atual
let currentCarouselProductItem = 0;

// remove e adiciona classe
const classRemoveProduct = () =>
  carouselProduct.forEach((item) =>
    item.classList.remove("products__list--visible")
  );
const classAddProduct = () =>
  carouselProduct[currentCarouselProductItem].classList.add(
    "products__list--visible"
  );

// escuta os botoes
nextProduct.addEventListener("click", () => {
  currentCarouselProductItem === lastCarouselProductItem
    ? (currentCarouselProductItem = 0)
    : currentCarouselProductItem++;
  console.log(currentCarouselProductItem);
  classRemoveProduct();
  classAddProduct();
});
prevProduct.addEventListener("click", () => {
  currentCarouselProductItem === 0
    ? (currentCarouselProductItem = lastCarouselProductItem)
    : currentCarouselProductItem--;
  classRemoveProduct();
  classAddProduct();
});
