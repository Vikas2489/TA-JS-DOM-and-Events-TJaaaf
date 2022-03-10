const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
let moves = 0;


playerLivesCount.textContent = playerLives;


const getData = () => [
    { imgSrc: "../img/1up.png", name: "1up" },
    { imgSrc: "../img/coin.png", name: "coin" },
    { imgSrc: "../img/mario.png", name: "mario" },
    { imgSrc: "../img/peach.png", name: "peach" },
    { imgSrc: "../img/mushroom.png", name: "mushroom" },
    { imgSrc: "../img/thwomp.png", name: "thwomp" },
    { imgSrc: "../img/wario.png", name: "wario" },
    { imgSrc: "../img/luigi.png", name: "luigi" },
    { imgSrc: "../img/1up.png", name: "1up" },
    { imgSrc: "../img/coin.png", name: "coin" },
    { imgSrc: "../img/mario.png", name: "mario" },
    { imgSrc: "../img/peach.png", name: "peach" },
    { imgSrc: "../img/mushroom.png", name: "mushroom" },
    { imgSrc: "../img/thwomp.png", name: "thwomp" },
    { imgSrc: "../img/wario.png", name: "wario" },
    { imgSrc: "../img/luigi.png", name: "luigi" },
]



const randomize = () => {
    const cardData = getData();
    cardData.sort(() => 0.5 - Math.random());
    return cardData;
}

randomize();

// Card Generator

const cardGenrator = () => {
    const cardData = randomize();
    cardData.forEach((eachCard) => {
        let card = document.createElement("div");
        card.className = "card";
        card.setAttribute("name", eachCard.name);

        card.addEventListener("click", (event) => {
            event.target.parentElement.classList.add("toggleCard");
            checkCards(event);
        })

        let face = document.createElement("img");
        face.src = eachCard.imgSrc;
        face.className = "face";
        face.alt = eachCard.name;
        let back = document.createElement("div");
        back.className = "back";

        card.append(face, back);
        section.append(card);
    })

}

const checkCards = (event) => {
    event.target.parentElement.classList.add("flipped");
    let flippedCards = document.querySelectorAll(".flipped");
    let toggleCards = document.querySelectorAll(".toggleCard");
    console.log(toggleCards);
    if (flippedCards.length == 2) {
        moves = ++moves;
        console.log(moves);
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach((item) => {
                item.classList.remove("flipped");
                item.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach(function(item) {
                item.classList.remove("flipped");
                setTimeout(() => { item.classList.remove("toggleCard") }, 1000)
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("You Loose 🥲🥲🥲");
            }
        }
    }
    if (toggleCards.length === 16) {
        restart("You Won 🤩🤩🤩");
    }
}

const restart = (text) => {
    let cardData = randomize();
    let allCards = document.querySelectorAll(".card");
    let allFaces = document.querySelectorAll(".face");
    section.style.pointerEvents = "none";
    cardData.forEach((card, index) => {
        allCards[index].classList.remove("toggleCard");
        setTimeout(() => {
            allCards[index].style.pointerEvents = "all";
            allFaces[index].src = card.imgSrc;
            allCards[index].setAttribute("name", card.name);
            section.style.pointerEvents = "all";

        }, 1500)

    })
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => { alert(text) }, 1500);
}

cardGenrator();