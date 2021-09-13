const toggle = document.querySelector(".header__button-toggle");
const toggleClose = document.querySelector(".header__button-toggle--close");
const nav = document.querySelector(".header__nav");
const linkDropdown = document.querySelector(".nav__dropdown--content");
const dropdownContent = document.querySelector(".nav__link--dropdown");

toggle.addEventListener("click", () => {
  nav.classList.add("visible");
  toggleClose.classList.add("visible");
});

toggleClose.addEventListener("click", () => {
  nav.classList.remove("visible");
  toggleClose.classList.remove("visible");
});

linkDropdown.addEventListener("click", () => {
  dropdownContent.classList.add("visible");
});
