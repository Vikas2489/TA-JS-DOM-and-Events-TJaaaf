let rootElmOfSearchPeople = document.querySelector(".display-flex");
let rootElmOfPeopleCards = document.querySelector(".container-of-people");

let searchBar = document.querySelector(".search-bar");

let allHousesName = got.houses.map((elm) => (
    (elm.name)
));

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

allHousesName.forEach((elm) => {
    let button = document.createElement("button")
    button.type = "submit";
    button.innerText = elm;
    button.className = elm;

    rootElmOfSearchPeople.append(button);
})

function createUI(data = allPeople) {
    rootElmOfPeopleCards.innerHTML = "";
    data.forEach(function(elm) {
        let div1 = document.createElement("div");
        div1.className = "card";
        let img = document.createElement("img");
        img.src = elm.image;
        img.alt = elm.name;

        let h2 = document.createElement("h2");
        h2.innerText = elm.name;

        let p = document.createElement("p");
        p.innerText = elm.description;

        let a = document.createElement("a");
        a.href = elm.wikiLink;
        a.innerText = "Know More!";

        div1.append(img, h2, p, a);

        rootElmOfPeopleCards.append(div1);
    })

}

createUI();


function handleSearch() {
    let value = event.target.value;
    let search = allPeople.filter(function(element) {
        if (element.name.startsWith(`${value}`)) {
            return element;
        }
    })
    if (event.keyCode) {
        createUI(search)
    };
}

searchBar.addEventListener("keyup", handleSearch);



function handleButton() {
    let houseName = event.target.className;
    got.houses.filter(function(element) {
        if (element.name === houseName) {
            let people = element.people;
            createUI(people);
            updateButton(event.target.className);
        }
    })
}

rootElmOfSearchPeople.addEventListener("click", handleButton);




// let root = Array.from(rootElmOfSearchPeople.children);

// function updateButton(elm) {
//     elm.classList.remove("selected");
//     if (elm === "Starks") {
//         Starks.classList.add("selected");
//     }
//     if (elm === "Lannisters") {
//         Lannisters.classList.add("selected");
//     }
//     if (elm === "Baratheons") {
//         Baratheons.classList.add("selected");
//     }
//     if (elm === "Targaryens") {
//         Targaryens.classList.add("selected");
//     }
//     if (elm === "Greyjoys") {
//         Greyjoys.classList.add("selected");
//     }
//     if (elm === "Tyrells") {
//         Tyrells.classList.add("selected");
//     }
//     if (elm === "Tullys") {
//         Tullys.classList.add("selected");
//     }
//     if (elm === "Redwyne") {
//         Redwyne.classList.add("selected");
//     }
//     if (elm === "Freys") {
//         Freys.classList.add("selected");
//     }
//     if (elm === "Arryns") {
//         Arryns.classList.add("selected");
//     }
//     if (elm === "Dothrakis") {
//         Dothrakis.classList.add("selected");
//     }
// }


// root.forEach(updateButton());

let Starks = document.querySelector(".Starks");
let Lannisters = document.querySelector(".Lannisters");
let Baratheons = document.querySelector(".Baratheons");
let Targaryens = document.querySelector(".Targaryens");
let Greyjoys = document.querySelector(".Greyjoys");
let Tyrells = document.querySelector(".Tyrells");
let Tullys = document.querySelector(".Tullys");
let Redwyne = document.querySelector(".Redwyne");
let Freys = document.querySelector(".Freys");
let Arryns = document.querySelector(".Arryns");
let Dothrakis = document.querySelector(".Dothrakis");

function updateButton(btn) {
    Starks.classList.remove("selected")
    Lannisters.classList.remove("selected")
    Baratheons.classList.remove("selected")
    Targaryens.classList.remove("selected")
    Greyjoys.classList.remove("selected")
    Tyrells.classList.remove("selected")
    Tullys.classList.remove("selected")
    Redwyne.classList.remove("selected")
    Freys.classList.remove("selected")
    Arryns.classList.remove("selected")
    Dothrakis.classList.remove("selected")

    if (btn === Starks.className) {
        Starks.classList.add("selected");
    }
    if (btn === Lannisters.className) {
        Lannisters.classList.add("selected");
    }
    if (btn === Baratheons.className) {
        Baratheons.classList.add("selected");
    }
    if (btn === Targaryens.className) {
        Targaryens.classList.add("selected");
    }
    if (btn === Greyjoys.className) {
        Greyjoys.classList.add("selected");
    }
    if (btn === Tyrells.className) {
        Tyrells.classList.add("selected");
    }
    if (btn === Tullys.className) {
        Tullys.classList.add("selected");
    }
    if (btn === Redwyne.className) {
        Redwyne.classList.add("selected");
    }
    if (btn === Freys.className) {
        Freys.classList.add("selected");
    }
    if (btn === Arryns.className) {
        Arryns.classList.add("selected");
    }
    if (btn === Dothrakis.className) {
        Dothrakis.classList.add("selected");
    }

}