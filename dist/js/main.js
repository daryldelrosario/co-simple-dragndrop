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
let prevBox;
let prevTextContent;
let textId;
let textElement;

<<<<<<< HEAD
    box.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const element = document.getElementById(data);
      
        if (box.id === "answer-box") {
          if (answerBox.childElementCount > 0) {
            answerBox.replaceChild(element, answerBox.children[0]);
          } else {
            answerBox.appendChild(element);
          }
        } else {
          box.appendChild(element);
        }
      });
=======
answerBox.addEventListener("dragover", (event) => {
    event.preventDefault();
});

answerBox.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    const isCorrect = element.textContent === "Winnipeg, Canada";

    console.log(isCorrect);

    if(answerBox.childElementCount > 0) {
        textElement = document.getElementById(textId);
        answerBox.replaceChild(element, answerBox.children[0]);
        prevBox.appendChild(textElement);
    } else {
        answerBox.appendChild(element);
    }

    if(isCorrect) {
        console.log(`You chose ${element.textContent}`)
        answerBox.classList.add("correct-answer");
        answerBox.classList.remove("wrong-answer");
    } else {
        answerBox.classList.remove("correct-answer");
        answerBox.classList.add("wrong-answer");
    }
>>>>>>> replace-n-return
});

optionTexts.forEach(text => {
    text.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    text.addEventListener("dragend", (event) => {
        textId = event.target.id;
        prevBoxId = "#" + textId + "-box";
        prevTextContent = event.target.textContent;
        prevBox = document.querySelector(prevBoxId);
    })
});