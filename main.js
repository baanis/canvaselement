canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("colour").value;
    console.log(color);
    mouseEvent = "mouseDown";
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("Current position of x and y coordinates = ");
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    ctx.stroke();
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}