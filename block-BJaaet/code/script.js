let ul = document.querySelector("ul");
let form = document.querySelector("form");
let input = document.querySelector("input");

// 1. two add event listener first will be for accessing
//  what user has written inside the input and the second is for
//   remmoving the movie name from list when cross gets clicked

// 2.As soon as user type something we get the access of that value then create an html having list which will have label, input and cross.

function removeMovie(event) {
    event.target.parentElement.classList.add("display-none");
}



function handleInput(event) {
    event.preventDefault();
    // console.dir(form.elements["movie-name"]);
    if (form.elements["movie-name"].value === "") {
        // ul.innerHTML = "";
        // console.log('viks')
    } else {
        let li = document.createElement("li");

        label = document.createElement("label");
        label.setAttribute("for", "label");
        label.innerText = `${form.elements["movie-name"].value}`;
        li.append(label);

        let input1 = document.createElement("input");
        input1.setAttribute("type", "checkbox");
        input1.setAttribute("id", "label");
        li.prepend(input1);

        let span = document.createElement("span");
        span.innerText = '❎';
        li.append(span);
        ul.append(li);

        span.addEventListener("click", removeMovie);
    }
}

form.addEventListener("submit", handleInput);