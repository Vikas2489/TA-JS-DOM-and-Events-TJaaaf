let firstBox = document.querySelector(".first");
let secondBox = document.querySelector('.second');

function genrateColor() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 18);
        color += array[randomNumber];
    }
    return color;
}


function handler1() {
    firstBox.style.background = genrateColor();
}

firstBox.addEventListener("click", handler1);


function handler2() {
    secondBox.style.background = genrateColor();
}


secondBox.addEventListener("mousemove", handler2);