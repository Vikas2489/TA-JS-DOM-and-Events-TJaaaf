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

function useShift(e) {
    console.log(e.localName);
    if (e.shiftKey === true && e.target.localName === "li") {
        let text = e.target.dataset.textt;
        e.target.innerText = text;
    }
}

allWrapper[1].addEventListener("click", function(event) {
    useShift(event);
    setTimeout(() => {
        event.target.innerText = "";
    }, 5000)

});