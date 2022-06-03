const card = document.querySelectorAll(".card");

const onDragStart = (event) => {
    console.log("Drag the element");
    event.dataTransfer.setData('id', event.target.id); 
}

const onDragEnd = (event) => {
    console.log("End of the drag"); 
}

card.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
});