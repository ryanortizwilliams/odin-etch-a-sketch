let divsPerRow = 16;
let divTotal = divsPerRow * divsPerRow;
//this should be the percent for each box height and size
let boxSize = 100/divsPerRow;
const canvas = document.querySelector('#canvas');

// TODO: Write function to change number of buttons 

//creates the canvas
function createCanvas(){
    for (i=0; i < divTotal; i++) {
        const canvas_div = document.createElement('div');
        canvas_div.style.backgroundColor = 'blue';
        canvas_div.style.maxHeight = `${boxSize}%`;
        canvas_div.style.flex = 'auto';
        canvas_div.style.minWidth = `${boxSize}%`;
        canvas_div.setAttribute('class', 'canvas-div');
        canvas_div.addEventListener('mouseover', function(e) {
          e.target.style.backgroundColor = 'red';
        })
        canvas_div.addEventListener('hover', function(e) {
          e.target.style.backgroundColor = 'red';
        })
         canvas.appendChild(canvas_div);
      }
}

//functions
//clear

function clearCanvas(){
    canvas.replaceChildren();
    createCanvas();
}
//clear button function
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearCanvas)
//change number of squares




createCanvas()