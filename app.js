console.log("début script");

let buttonprojet1 = document.getElementById("popupprojet1");
let windowproject1 = document.getElementById("windowproject1");
let closeprojet1 = document.getElementById("closeprojet1");

let buttonprojet2 = document.getElementById("popupprojet2");
let windowproject2 = document.getElementById("windowproject2");
let closeprojet2 = document.getElementById("closeprojet2");


buttonprojet1.addEventListener("click", function() {

    windowproject1.classList.add("show");

});

closeprojet1.addEventListener("click", function() {

    windowproject1.classList.remove("show");

});

buttonprojet2.addEventListener("click", function() {

    windowproject2.classList.add("show");

});

closeprojet2.addEventListener("click", function() {

    windowproject2.classList.remove("show");

});

let menuHamburger = document.getElementById("menuHamburger");
let barre = document.getElementById("barre");

console.log(menuHamburger);
console.log(barre);

menuHamburger.addEventListener("click", function (){

    barre.classList.remove("barre");

    barre.classList.add("barreAff");

    menuHamburger.classList.add("hamburgerDisp");

    console.log(barre);
});

let croix = document.getElementById("croix");

croix.addEventListener("click", function (){

    barre.classList.remove("barreAff");

    barre.classList.add("barre");

    menuHamburger.classList.remove("hamburgerDisp");
});
