const toggle = document.querySelector(".header__button-toggle");
const toggleClose = document.querySelector(".header__button-toggle--close");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
  nav.classList.add("visible");
  toggleClose.classList.add("visible");
});

toggleClose.addEventListener("click", () => {
  nav.classList.remove("visible");
  toggleClose.classList.remove("visible");
});
