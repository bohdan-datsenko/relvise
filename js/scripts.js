let menu = document.getElementById("burgerMenuBackdrop");
let body = document.body;
let html = document.documentElement;

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("lock");
    html.classList.toggle("lock");
});