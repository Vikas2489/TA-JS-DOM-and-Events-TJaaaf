let input1 = document.querySelector(".input");
let rootUl = document.querySelector(".todos");
let containerOfTodos = document.querySelector(".container-of-todos");


let allTodos = JSON.parse(localStorage.getItem("todo")) || [];

function handleInput(event) {
    if (event.keyCode === 13) {
        let todo = {
            name: event.target.value,
            isDone: false,
        }
        allTodos.push(todo);
        event.target.value = "";
    }
    createUI(allTodos, rootUl);
    localStorage.setItem("todo", JSON.stringify(allTodos));


}

function handleCheckbox(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem("todo", JSON.stringify(allTodos));
    createUI(allTodos, rootUl);
}

function deleteTodo() {
    let id = event.target.id;
    allTodos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(allTodos));
    createUI(allTodos, rootUl);
}





function createUI(data, rootE) {

    rootE.innerHTML = "";

    data.forEach(function creatingList(elm, index) {
        let li = document.createElement('li');

        let input = document.createElement('input');
        input.type = "checkbox";
        input.checked = elm.isDone;
        input.className = "check";
        input.setAttribute("data-id", index);

        input.addEventListener("input", handleCheckbox);

        let label = document.createElement('label');
        label.innerText = elm.name;

        let button = document.createElement('button');
        button.type = "button";
        button.className = "destroy"
        button.innerText = '❌';

        button.setAttribute("id", index);

        button.addEventListener("click", deleteTodo);

        li.append(input, label, button);
        rootE.append(li);
    })
    localStorage.setItem("todo", JSON.stringify(allTodos));
}

createUI(allTodos, rootUl);


// All Tasks -

input1.addEventListener("keyup", handleInput);

let button1 = document.querySelector("#one");
button1.addEventListener("click", function() {
    createUI(allTodos, rootUl)
});


// Active Tasks -

let button2 = document.querySelector("#two");
button2.addEventListener("click", getActiveTasks);

let activeTasks = [];

function getActiveTasks() {
    allTodos.forEach(function(elm) {
        if (elm.isDone === false) {
            activeTasks.push(elm);
            createUI(activeTasks, rootUl);
        } else {
            rootUl.innerHTML = "";
        }
    })
}

// Completed Tasks -

let button3 = document.querySelector("#three");
button3.addEventListener("click", getCompletedTasks);

let completedTasks = [];

function getCompletedTasks() {
    allTodos.forEach(function(elm) {
        if (elm.isDone === true) {
            completedTasks.push(elm);
            createUI(completedTasks, rootUl);
        }
    })
}


// clear tasks - 


let button4 = document.querySelector("#four");
// button4.addEventListener("click", clearCompletedOnes);