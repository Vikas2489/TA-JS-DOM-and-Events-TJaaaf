// Without event delegation


let allWrapper = document.querySelectorAll(".wrapper");
allWrapper = Array.from(allWrapper);

let boxOne = allWrapper[0].querySelectorAll(".box");
boxOne = Array.from(boxOne);


boxOne.forEach(function(box, index) {
    box.addEventListener("click", function(event) {
        event.target.innerText = index + 1;
        // event.target.inner.visibility = "hidden"
    })
})


// With Event delegation

let boxTwo = allWrapper[1].querySelectorAll(".box");
boxTwo = Array.from(boxTwo);

allWrapper[1].addEventListener("click", boxTwo.forEach(function(box, index) {
    box.addEventListener("click", function(event) {
        event.target.innerText = index + 1;
    })
}))