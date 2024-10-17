var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]; // Assume "3.jpeg" is the blank tile.

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            //<img id="0-0" src="1.jpeg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpeg";

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  // Click an image to drag
            tile.addEventListener("dragover", dragOver);    // Moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  // Dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  // Dragged image leaving another image
            tile.addEventListener("drop", dragDrop);        // Drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      // After drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
};

function dragStart() {
    currTile = this; // Refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    // Empty
}

function dragDrop() {
    otherTile = this; // Refers to the img tile being dropped on
}

function dragEnd() {
    // We remove the restriction that checks for the "3.jpeg"
    
    // Swap the images regardless of which tile is being dragged/dropped
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
