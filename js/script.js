const menuToggle = document.querySelector(".nav-wrapper__toggle");
const menuList = document.querySelector(".nav-wrapper__list");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    menuList.classList.toggle("active");
    document.body.classList.toggle("active");
});