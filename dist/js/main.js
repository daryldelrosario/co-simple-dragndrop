// W3 DRAG AND DROP EXAMPLE
const boxes = document.querySelectorAll(".box");
const texts = document.querySelectorAll(".drag-text");

boxes.forEach(box => {
    box.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const selectClass = document.getElementById(data);
        box.appendChild(selectClass);
    })
});

texts.forEach(text => {
    text.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    })
})


// MULTIPLE CHOICE EXAMPLE
const optionBoxes = document.querySelectorAll(".option-box");
const optionTexts = document.querySelectorAll(".option-text");
const answerBox = document.querySelector("#answer-box");

let prevBoxId;

answerBox.addEventListener("dragover", (event) => {
    event.preventDefault();
});

answerBox.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    if(answerBox.childElementCount > 0) {
        answerBox.replaceChild(element, answerBox.children[0]);
    } else {
        answerBox.appendChild(element);
    }
});

optionTexts.forEach(text => {
    text.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
        prevBoxId = "#" + event.target.id + "-box";
    });
});