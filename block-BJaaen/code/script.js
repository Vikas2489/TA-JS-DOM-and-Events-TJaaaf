// Use this Algorithm
// 1. Scissors cuts Paper
// 2. Paper covers Rock
// 3. Rock crushes Scissors


let containerOfIcons = document.querySelector(".container-of-player-icons");
let playerMove = document.querySelector("#player-move");
let playerScore = document.querySelector("#player-score")
let computerResponse = document.querySelector(".computer");


let arrayOfI = Array.from(containerOfIcons.children);

function autoClickOnRock() {
    return computerResponse.children[0].addEventListener("click", function() {
        playerScore.innerText = 1;
    });
}

function handleClick(event) {
    if (event.target.attributes.id.value == "scissors") {
        playerMove.innerText = "-- " + event.target.dataset.set;
        autoClickOnRock();
    }
}



arrayOfI.forEach((element) => {
    element.addEventListener("click", handleClick)
})