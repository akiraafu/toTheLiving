// const navBar = document.querySelector(".navbar");
const navBar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navBar.classList.toggle("active");
});
