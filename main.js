var mouseEvent="";
var last_x, last_y;


var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="Orange";
var widthofline=2;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("line_w").value;
    mouseEvent="mouseDown";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_x=e.clientX-canvas.offsetLeft;
    var current_y=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=widthofline;
        console.log("Last Position: x axis: "+ last_x + " y axis: "+ last_y);
        ctx.moveTo(last_x, last_y);
        
        console.log("Current Position: x axis: "+ current_x + " y axis: "+ current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    
    }
    last_x = current_x;
    last_y = current_y;
}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}