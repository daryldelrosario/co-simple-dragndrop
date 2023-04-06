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
const options = document.querySelectorAll('.option');
const dropzone = document.querySelector('.dropzone');
const canada = document.getElementById('canada');

canada.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.setDragImage(event.target, 0, 0);
});

dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    dropzone.appendChild(element);
});