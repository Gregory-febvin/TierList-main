const Ligne = document.querySelectorAll(".Ligne");
const StockCard = document.querySelectorAll(".StockCard");


const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {

    event.preventDefault();

    if ( ![ "DivCard", "StockCard" ].some( x=> [...event.target.classList].includes( x ) ) )
        return;
    // if( ![...event.target.classList].map( x => [ "DivCard", "StockCard" ].includes( x )) )
    //     return;


    console.log( "je peux aller ici")

    const draggedCardID = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardID);
    event.target.appendChild(draggedCard);

    console.log("Drop carte");
}

Ligne.forEach((Ligne) => {
    Ligne.ondragover = onDragOver;
    Ligne.ondrop = onDrop;
});

StockCard.forEach((Div) => {
    Div.ondragover = onDragOver;
    Div.ondrop = onDrop;
});
