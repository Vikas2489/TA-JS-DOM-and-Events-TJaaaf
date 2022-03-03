let rootElmOfSearchPeople = document.querySelector(".display-flex");
let rootElmOfPeopleCards = document.querySelector(".container-of-people");

let allPeopleOfEachHouse = got.houses.map((elm) => (
    (elm.people)
))

// let peopleImage = allPeopleOfEachHouse;
// let peopleName = ;
// let peopleDescription = ;
// let wikiLink = ;

let allHousesName = got.houses.map((elm) => (
    (elm.name)
));

allHousesName.forEach((elm) => {
    let button = document.createElement("button")
    button.type = "submit";
    button.innerText = elm;
    button.className = elm;

    rootElmOfSearchPeople.append(button);
})

// <div class="card">
//   <img src="e-of-thrones-tywin-lannister.jpg" alt="got people image">
//   <h2>Eddard "Ned" Stark</h2>
//   <p>lord of</p>
//   <a href="www.google.com">Know More!</a>
//   </div>


allPeopleOfEachHouse[0].map((p) => (p.name))
allPeopleOfEachHouse[1].map((p) => (p.name))
allPeopleOfEachHouse[2].map((p) => (p.name))
allPeopleOfEachHouse[3].map((p) => (p.name))
allPeopleOfEachHouse[4].map((p) => (p.name))
allPeopleOfEachHouse[5].map((p) => (p.name))
allPeopleOfEachHouse[6].map((p) => (p.name))
allPeopleOfEachHouse[7].map((p) => (p.name))
allPeopleOfEachHouse[8].map((p) => (p.name))
allPeopleOfEachHouse[9].map((p) => (p.name))
allPeopleOfEachHouse[10].map((p) => (p.name))



function createUI(elm) {
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

    rootElmOfPeopleCards.append(div1, img, h2, p, a);
}