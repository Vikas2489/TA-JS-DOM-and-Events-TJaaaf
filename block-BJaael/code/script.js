function generateColors() {
    let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 15);
        color += hexCharacters[randomNumber];
    }
    return color;
}

let ul = document.querySelector(".container");


for (let i = 0; i < 500; i++) {
    let li = document.createElement("li");
    li.innerText = Math.floor(Math.random() * 500);
    ul.append(li);
}



let allLi = document.querySelectorAll("li");
allLi = Array.from(allLi);



allLi.forEach(function(element) {
    ul.addEventListener("mousemove", function() { element.innerText = Math.floor(Math.random() * 500) });
    ul.addEventListener("mousemove", function() { element.style.background = generateColors(); });
});