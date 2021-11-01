// BEGINNING DRAWING WITH JAVASCRIPT
// CREATING DRAWING FUNCTIONS

// ADDING FUNCTION TO AUTOMATICALLY RESIZE THE CANVAS
function resizeCanvas(){
    var c = document.getElementById("frameCanvas");

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    drawLine(0,0,window.innerWidth,window.innerHeight);
    clearCanvas();
    drawLine(window.innerWidth,0,0,window.innerHeight);
}

// DRAW A CIRCLE AT A GIVEN POINT, WITH GIVEN RADIUS
// OPTION TO DRAW THE CIRCLE FILLED OR NOT
function drawCircle(xPos, yPos, radius, filled){
    var c = document.getElementById("frameCanvas");
    var ctx = c.getContext("2d");
    
    if (filled){
        ctx.fillStyle = "red";
    }

    ctx.beginPath();
    ctx.arc(xPos,yPos,radius,0,2*Math.PI);
    ctx.fill();
}

// DRAWING A LING ACROSS THE WIDTH OF THE CANVAS
function drawLine(xPosStart,yPosStart,xPosEnd,yPosEnd){
    var c = document.getElementById("frameCanvas");
    var ctx = c.getContext("2d");

    ctx.moveTo(xPosStart,yPosStart);
    ctx.lineTo(xPosEnd,yPosEnd);
    ctx.stroke();
}

// FUNCTION TO CLEAR CANVAS
function clearCanvas(){
    var c = document.getElementById("frameCanvas");
    var ctx = c.getContext('2d');

    ctx.clearRect(0, 0, c.width, c.height);
    ctx.stroke();
}

// MAIN FUNCTION CALLED HERE, WAITING FOR WINDOW TO FULLY LOAD TO
// MITIGATE THE TypeError CAUSED BY HAVING SCRIPTS ABOVE
// NAMES ELEMENTS OF A WEBPAGE
window.onload = function(){
    window.addEventListener('resize', resizeCanvas, false); //ADDS EVENT LISTENER FOR THE RESIZING OF THE WINDOW
    resizeCanvas();
}