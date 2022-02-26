// Use this Algorithm
// 1. Scissors cuts Paper
// 2. Paper covers Rock
// 3. Rock crushes Scissors


let containerOfIcons = document.querySelector(".container-of-player-icons");
let computerResponse = document.querySelector(".computer");
let playerMove = document.querySelector("#player-move");
let playerScore = document.querySelector("#player-score");
let result = document.querySelector("h3");
let computer = document.querySelector("#computer-move");
let reset = document.querySelector(".reset-icon");

let dataset = [{
        name: "rock",
        beats: "scissors"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "lizard",
        beats: "paper"
    },
    {
        name: "spock",
        beats: "paper"
    }
]

let userSelected = {},
    computerSelected = {};

let score = 0;

function getRandomNumber(max = 5) {
    return Math.floor(Math.random() * max);
}

function getWinner(user, computer) {
    if (user.name === computer.name) {
        result.innerText = "It's a tie "
    } else if (user.name === computer.beats) {
        result.innerText = "You lost 😞"

    } else {
        result.innerText = "You win 👑"
        playerScore.innerText = score + 1;
    }
}



function createUserLayout() {
    containerOfIcons.innerHTML = "";
    dataset.forEach((icon) => {
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;

        if (userSelected.name === icon.name) {
            i.classList.add("selected");
        }

        i.addEventListener("click", () => {
            userSelected = icon;
            playerMove.innerText = `-- ${icon.name}`;

            computerSelected = dataset[getRandomNumber()];
            computer.innerText = ` -- ${computerSelected.name}`
            getWinner(userSelected, computerSelected);

            createUserLayout();
            createComputerLayout();
        });

        containerOfIcons.append(i);
    });
}

createUserLayout();

function createComputerLayout() {
    computerResponse.innerHTML = "";
    dataset.forEach((icon) => {
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;
        if (computerSelected.name === icon.name) {
            i.classList.add("selected");
        }
        computerResponse.append(i);

    })
}

createComputerLayout();

let allI = document.querySelectorAll("i");

reset.addEventListener("click", function() {
    playerMove.innerText = "";
    computer.innerText = "";
    result.innerText = "";

    userSelected = {};
    computerSelected = {};
    createComputerLayout();
    createUserLayout();

})
























// let computerChildren = Array.from(computerResponse.children);

// // let arrayOfI = Array.from(containerOfIcons.children);


// function autoClickOnRock() {
//     return computerResponse.children[0].addEventListener("click", function() {
//         playerScore.innerText = 1;
//     });
// }

// let userSelected, computerSelected;
// let computerChildren1 = computerChildren[1];



// function handleClick(event) {
//     if (event.target.attributes.id.value == "scissors") {
//         event.target.style.color = "black";
//         playerMove.innerText = "-- " + event.target.dataset.set;
//         computerChildren1.style.color = "black";
//         playerScore.innerText = -1;

//     }

// }


// arrayOfI.forEach((element) => {
//     element.addEventListener("click", handleClick)
// })