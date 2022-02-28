let form = document.querySelector("form");
let inner = document.body.innerHTML;
let userInfo = {};

function handleSumbit(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email[0].value;
    userInfo.youLove = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.range.value;

    if (form.elements.fiction.checked === true) {
        userInfo.bookGenre = form.elements.fiction.value;
    } else if (form.elements.non - fiction.checked === true) {
        userInfo.bookGenre = form.elements.non - fiction.value;
    } else {
        userInfo.bookGenre = form.elements.adventure.value;
    }

    userInfo.terms = form.elements.terms.checked;

    console.log(userInfo);
    createModal();
}


function createModal() {
    document.body.innerHTML = "";

    let div = document.createElement("div");
    div.className = "container";
    document.body.append(div);

    let button = document.createElement("button");
    button.innerText = "Close";
    button.style.textAlign = "right";
    button.style.border = "none";
    button.style.color = "#ADADAC";
    button.style.background = "none";
    button.style.fontWeight = "bold";
    button.style.fontSize = "1rem";

    button.addEventListener("click", function(event) {
        document.body.innerHTML = inner;
    })

    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");

    h1.innerText = `Hello ${userInfo.name}`;
    h1.style.fontWeight = "bolder";
    h1.style.fontSize = "1.99rem";

    p1.innerText = `Your Email: ${userInfo.email}`;
    p1.style.fontWeight = "bold";

    p2.innerText = `You Love: ${userInfo.youLove}`;
    p2.style.fontWeight = "bold";

    p3.innerText = `Color: ${userInfo.color}`;
    p3.style.fontWeight = "bold";

    p4.innerText = `Rating: ${userInfo.rating}`;
    p4.style.fontWeight = "bold";

    p5.innerText = `Book Genre: ${userInfo.bookGenre}`;
    p5.style.fontWeight = "bold";

    if (userInfo.terms === true) {
        p6.innerText = `👉 You agree to terms and condition`;
        p6.style.fontWeight = "bold";
    } else {
        p6.innerText = `You did not agreed to terms and condition`;
        p6.style.fontWeight = "bold";
    }

    div.append(button, h1, p1, p2, p3, p4, p5, p6);

}

form.addEventListener("submit", handleSumbit);