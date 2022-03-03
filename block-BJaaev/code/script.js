let input1 = document.querySelector(".input");
let rootUl = document.querySelector(".todos");
let containerOfTodos = document.querySelector(".container-of-todos");


let allTodos = JSON.parse(localStorage.getItem("todo")) || [];

function handleInput(event) {
    if (event.keyCode === 13 && event.target.value) {
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


function selectButton(btn) {
    button1.classList.remove("selected");
    button2.classList.remove("selected");
    button3.classList.remove("selected");
    button4.classList.remove("selected");

    if (btn === "button1") {
        button1.classList.add("selected")
    } else if (btn === "button2") {
        button2.classList.add("selected")
    } else if (btn === "button3") {
        button3.classList.add("selected")
    } else if (btn === "button4") {
        button4.classList.add("selected")
    }
}

input1.addEventListener("keyup", handleInput);

let button1 = document.querySelector("#one");
button1.addEventListener("click", function() {
    createUI(allTodos, rootUl);
    selectButton("button1");
});


// Active Tasks -

let button2 = document.querySelector("#two");
button2.addEventListener("click", getActiveTasks);


function getActiveTasks() {
    selectButton("button2")

    let notCompletedTasks = allTodos.filter(
        function(todo) {
            if (todo.isDone === false) {
                return todo;
            }
        }
    )
    console.log(notCompletedTasks);
    createUI(notCompletedTasks, rootUl);
}

// Completed Tasks -

let button3 = document.querySelector("#three");
button3.addEventListener("click", getCompletedTasks);

// let completedTasks = [];

function getCompletedTasks() {
    selectButton("button3")
    let completedTasks = allTodos.filter((elm) => elm.isDone === true);
    createUI(completedTasks, rootUl);
    if (completedTasks === []) {
        createUI(completedTasks, rootUl);
    }

}


// clear tasks - 

let button4 = document.querySelector("#four");
button4.addEventListener("click", clearCompletedOnes);


function clearCompletedOnes() {
    selectButton("button4")
    allTodos = allTodos.filter(function(elm) {
        return elm.isDone === false
    })
    createUI(allTodos, rootUl);
    localStorage.setItem("todo", JSON.stringify(allTodos));
}