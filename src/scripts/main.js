 let burger = document.querySelector(".main-nav__toggle");

if (burger) {
    let burgerMenu = document.querySelector(".toggle__list");
    burger.addEventListener("click", function(e) {
        e.preventDefault();
        burger.classList.toggle("main-nav__toggle--active");
        burgerMenu.classList.toggle("toggle__list--active");
    });
}
