
var line1__bars = document.querySelector(".menu-bars__line1");
var line2__bars = document.querySelector(".menu-bars__line2");
var line3__bars = document.querySelector(".menu-bars__line3");

let nav = document.querySelector(".menu-nav");
let navFlex = document.querySelector(".nav-flex");
let navFlexItem = document.querySelector(".nav-flex__item");
let navFlexLink = document.querySelector(".nav-flex__link");
function animateBars(){
    line1__bars.classList.toggle("activemenu-bars__line1");
    line2__bars.classList.toggle("activemenu-bars__line2");
    line3__bars.classList.toggle("activemenu-bars__line3");
}
function showNav(){
    nav.classList.toggle("menu-nav--active");
    navFlex.classList.toggle("nav-flex--active");
    navFlexItem.classList.toggle("nav-flex__item--active");
    navFlexLink.classList.toggle("nav-flex__link--active");
}

document.querySelector(".menu-bars").addEventListener("click", animateBars);
document.querySelector(".menu-bars").addEventListener("click", showNav);
