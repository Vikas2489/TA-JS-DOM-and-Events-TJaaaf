// container-of-operations

let section = document.body.querySelector("section");
let h2 = document.body.querySelector(".h2");
let allButton = document.body.querySelectorAll(".vv");
let clear = document.body.querySelector(".CCC");
let equal = document.querySelector(".isEqual");

function handler(event) {
    if (event.target === equal) {
        h2.innerText = eval(h2.innerText);
        return h2.innerText;
    }
    if (h2.innerText == 0) {
        h2.innerText = event.target.innerText;
    } else {
        h2.innerText += event.target.innerText;
    }
}

clear.addEventListener("click", function() {
    h2.innerText = Number("");
})


allButton.forEach((element) => {
    element.addEventListener("click", handler)
})