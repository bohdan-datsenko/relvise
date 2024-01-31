let backdrop = document.getElementById("burgerMenuBackdrop");
let menu = document.getElementById("burgerMenu");
let body = document.body;
let html = document.documentElement;

backdrop.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("lock");
    html.classList.toggle("lock");
});