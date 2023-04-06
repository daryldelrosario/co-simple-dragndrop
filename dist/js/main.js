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
const manilaBox = document.querySelector("#manila-box");

let previousBoxId;
let previousBox;
let previousTextData;
let previousTextElement;


optionBoxes.forEach(box => {
    box.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const element = document.getElementById(data);
      
        if (box.id === "answer-box") {
          if (answerBox.childElementCount > 0) {
            const currentBox = previousBox;
            const replaceText = answerBox.children[0];

            console.log("REPLACE TEXT: " + replaceText);
            for(key in replaceText) {
                console.log(key + ": " + replaceText[key]);
            }

            answerBox.replaceChild(element, replaceText);
            currentBox.appendChild(element);
          } else {
            answerBox.appendChild(element);
          }
        } else {
          box.appendChild(element);
        }
      });
});

optionTexts.forEach(text => {
    text.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    text.addEventListener("dragend", (event) => {
        previousBoxId = "#" + event.target.id + "-box";
        previousBox = document.querySelector(previousBoxId);

        console.log("PREVIOUS BOX ID: " + previousBoxId);
        console.log("PREVIOUS BOX OBJECT: ");
        console.log("EVENT.TARGET.ID: " + event.target.id);
    })
});





