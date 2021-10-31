// BEGINNING DRAWING WITH JAVASCRIPT
// CREATING DRAWING FUNCTIONS


// SETTING UP THE CANVAS TO BE THE FULL SIZE OF THE PAGE
// THIS HAS TO BE DONE IN JAVASCRIPT ELSE THE CANVAS IMAGE WILL
// END UP APPEARING STRETCHED 
function setupCanvas(){
    var canvasContext = document.getElementById("frameCanvas").getContext("2d");
    canvasContext.canvas.width = window.innerWidth;
    canvasContext.canvas.height = window.innerHeight;
}

// ADDING FUNCTION TO AUTOMATICALLY RESIZE THE CANVAS
function resizeCanvas(){
    var c = document.getElementById("frameCanvas");

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    draw();
}

// ADDING DRAW FUNCTION
function draw(){
    drawLine();
}

// DRAWING A LING ACROSS THE WIDTH OF THE CANVAS
function drawLine(){
    var c = document.getElementById("frameCanvas");
    var ctx = c.getContext("2d");

    ctx.moveTo(0,0);
    ctx.lineTo(c.width+0,c.height);
    ctx.stroke();
}



// MAIN FUNCTION CALLED HERE, WAITING FOR WINDOW TO FULLY LOAD TO
// MITIGATE THE TypeError CAUSED BY HAVING SCRIPTS ABOVE
// NAMES ELEMENTS OF A WEBPAGE
window.onload = function(){
    window.addEventListener('resize', resizeCanvas, false); //ADDS EVENT LISTENER FOR THE RESIZING OF THE WINDOW
    setupCanvas();  // SETTING UP THE CANVAS TO BE THE SIZE OF THE WINDOW
    resizeCanvas();
}