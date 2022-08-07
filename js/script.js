const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu__list");
const body = document.body;
const links = Array.from(menu.children);


hamb.addEventListener("click", hambHandler);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick)
})

function hambHandler (e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

function renderPopup() {
    popup.appendChild(menu);
}