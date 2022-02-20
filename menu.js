// button = document.querySelector(".openBtn");

function openNav() {
    document.getElementsByClassName("left")[0].style.width = "10%";
    button = document.querySelector(".openBtn")
    button.classList.add("rotate");
    button.setAttribute('onclick', 'closeNav()');
}

function closeNav() {
    document.getElementsByClassName("left")[0].style.width = "0%";
    button = document.querySelector(".openBtn")
    button.classList.remove("rotate");
    button.setAttribute('onclick', 'openNav()');
}