let ul = document.querySelector("ul");
let form = document.querySelector("form");
let input = document.querySelector("input");


// 1. two add event listener first will be for accessing
//  what user has written inside the input and the second is for
//   remmoving the movie name from list when cross gets clicked

// 2.As soon as user type something we get the access of that value then create a list with cross.


function removeMovie(event) {
    event.target.parentElement.classList.add("display-none");
}


function handleInput(event) {
    event.preventDefault();
    // form.elements["movie-name"].value;
    let li = document.createElement("li");
    li.innerText = `${form.elements["movie-name"].value}`;

    let span = document.createElement("span");
    span.innerText = '❎';
    li.append(span);
    ul.append(li);

    span.addEventListener("click", removeMovie);
}



form.addEventListener("submit", handleInput);