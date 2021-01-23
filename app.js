const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__color");

ctx.strokeStyle ="#007581";
ctx.lineWidth = 5.0;

canvas.width = 800;
canvas.height = 500;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function onMouseDown(event) {
    stopPainting
}
function changeColor(event){
    const color =event.target.style.backgroundColor;
    console.log(color)
    ctx.strokeStyle =color;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(colors=>colors.addEventListener("click",changeColor))