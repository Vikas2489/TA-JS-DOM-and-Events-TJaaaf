// Without event delegation


let allWrapper = document.querySelectorAll(".wrapper");
allWrapper = Array.from(allWrapper);

let boxOne = allWrapper[0].querySelectorAll(".box");
boxOne = Array.from(boxOne);


boxOne.forEach(function(box, index) {
    box.addEventListener("click", function(event) {
        event.target.innerText = index + 1;

        setTimeout(() => {
            event.target.innerText = "";
        }, 5000)
    })
})


// With Event delegation


allWrapper[1].addEventListener("click", function(event) {
    console.dir(event.target);
    let text = event.target.dataset.textt;
    event.target.innerText = text;

    setTimeout(() => {
        event.target.innerText = "";
    }, 5000)

});