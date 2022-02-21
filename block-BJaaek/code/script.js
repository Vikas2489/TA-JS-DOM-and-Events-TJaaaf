let clickMe = document.querySelector('.banner');
let firstBox = document.querySelector(".first");


function handler1() {
    firstBox.style.background = "red";
}

function handler2() {
    firstBox.style.background = "yellow";
}

clickMe.addEventListener("click", handler1);

clickMe.addEventListener("click", function() {
    firstBox.style.background = "blue";
})