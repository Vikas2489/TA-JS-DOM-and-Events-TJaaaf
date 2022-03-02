// let ul = document.querySelector("ul");
// let form = document.querySelector("form");
// let input = document.querySelector("input");

// // 1. two add event listener first will be for accessing
// //  what user has written inside the input and the second is for
// //   remmoving the movie name from list when cross gets clicked

// // 2.As soon as user type something we get the access of that value then create an html having list which will have label, input and cross.

// function removeMovie(event) {
//     event.target.parentElement.classList.add("display-none");
// }



// function handleInput(event) {
//     event.preventDefault();

//     if (form.elements["movie-name"].value === "") {} else {
//         let li = document.createElement("li");

//         label = document.createElement("label");
//         label.setAttribute("for", "label");
//         label.innerText = `${form.elements["movie-name"].value}`;
//         li.append(label);

//         let input1 = document.createElement("input");
//         input1.setAttribute("type", "checkbox");
//         input1.setAttribute("id", "label");
//         li.prepend(input1);

//         let span = document.createElement("span");
//         span.innerText = '❎';
//         li.append(span);
//         ul.append(li);
//         span.addEventListener("click", removeMovie);
//         form.elements["movie-name"].value = "";
//     }

// }

// form.addEventListener("submit", handleInput);
















let ul = document.querySelector("ul");
let input = document.querySelector("input");


let allMovies = [{
        name: "3 Idiots",
        Watched: false,
    },
    {
        name: "Inception",
        Watched: true,
    }
]


function handleSpan(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createLayout();
}



function createLayout() {
    ul.innerHTML = "";
    allMovies.forEach(function(element, index) {
        let li = document.createElement("li");
        let input1 = document.createElement("input");
        input1.id = index;
        input1.type = 'checkbox';
        input1.checked = element.Watched;
        input1.addEventListener("change", (event) => {
            let id = event.target.id;
            allMovies[id].Watched = !allMovies[id].Watched;
        });
        let label = document.createElement("label");
        label.setAttribute("for", `${index}`)
        label.innerText = element.name;
        let span = document.createElement("span");
        span.innerText = "❎";
        span.setAttribute("data-set", index);

        span.addEventListener("click", handleSpan);

        li.append(input1, label, span);
        ul.append(li);
    })
}

createLayout();

function handleInput(event) {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        createLayout();
    }
}



input.addEventListener("keyup", handleInput);