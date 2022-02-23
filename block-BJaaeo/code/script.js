// all function
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

// container-of-operations

let containerOfOperations = document.querySelector(".container-of-operations");
let h2 = document.querySelector("h2");

containerOfOperations.addEventListener("click", function(event) {
    let text = event.target;
    h2.innerText = text.innerText;
});

// container-of-numbers

let containerOfNumbers = document.querySelector(".container-of-numbers");
let clear = document.querySelector(".CCC");


containerOfNumbers.addEventListener("click", function numbers(event) {
    let text = event.target;
    h2.innerText = text.innerText;
    if (text === clear) {
        h2.innerText = Number("");
    }
});