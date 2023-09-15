let currentSize = 16;
let currentColor = "red";
let gridOn = true;

//creates the canvas
const canvas = document.querySelector('#canvas'); 
function createCanvas(divsPerRow){
    const divTotal = divsPerRow * divsPerRow;
    const boxSize = 100/divsPerRow;
    for (i=0; i < divTotal; i++) {
        const canvas_div = document.createElement('div');
        canvas_div.style.backgroundColor = 'white';
        canvas_div.style.maxHeight = `${boxSize}%`;
        canvas_div.style.flex = 'auto';
        canvas_div.style.minWidth = `${boxSize}%`;

        //canvas grid
        if(gridOn) {
            canvas_div.setAttribute('class', 'canvas-div');
        }
        // drawing
        canvas_div.addEventListener('click', function(e) {
          e.target.style.backgroundColor = currentColor;
        })
        canvas_div.addEventListener('hover', function(e) {
          e.target.style.backgroundColor = 'red';
        })
         canvas.appendChild(canvas_div);
      }
}

//CLEARING
function clearCanvas(){
    canvas.replaceChildren();
    createCanvas(currentSize);
}
//clear button function
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearCanvas)


// CHANGING SIZE
function changeSize(number) {
    currentSize = number;
    clearCanvas(currentSize);
}
//get button
const size16 = document.getElementById('size-16');
const size32 = document.getElementById('size-32');
const size64 = document.getElementById('size-64');
const size100 = document.getElementById('size-100');

// button Events
size16.addEventListener(
    'click', changeSize.bind(null,16)
)

size32.addEventListener(
    'click', changeSize.bind(null,32)
)

size64.addEventListener(
    'click', changeSize.bind(null,64)
)

size100.addEventListener(
    'click', changeSize.bind(null,100)
)


//TOGGLE GRID
function toggleGrid() {
    gridOn = !gridOn
   canvas.childNodes.forEach((e,i)=>{
    e.classList.toggle('canvas-div')
   })
}
const gridButton = document.getElementById('grid');
gridButton.addEventListener('click', toggleGrid);

//CHANGE COLOR

function changeColor(color) {
    currentColor = color;
}
//get color buttons
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');

//color button events
redButton.addEventListener(
    'click', changeColor.bind(null,'red')
)

blueButton.addEventListener(
    'click', changeColor.bind(null,'blue')
)

yellowButton.addEventListener(
    'click', changeColor.bind(null,'yellow')
)

greenButton.addEventListener(
    'click', changeColor.bind(null,'green')
)



createCanvas(currentSize)