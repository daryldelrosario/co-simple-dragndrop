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

let previousBox = null;

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
        const answerElement = answerBox.children[0];
        answerBox.replaceChild(element, answerElement);
        if (previousBox !== null) {
          previousBox.appendChild(answerElement);
        } else {
          document.getElementById(answerElement.getAttribute("data-start-id")).appendChild(answerElement);
        }
      } else {
        answerBox.appendChild(element);
      }
      previousBox = box.parentElement;
      element.setAttribute("data-start-id", box.parentElement.id);
    } else {
      box.appendChild(element);
      if (previousBox !== null && previousBox.id === "answer-box") {
        previousBox.appendChild(document.getElementById(previousBox.children[0].getAttribute("data-start-id")));
      }
    }
  });
});

optionTexts.forEach(text => {
  text.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});







