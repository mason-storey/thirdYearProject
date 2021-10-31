// PROFUCES AN ALERT BOX IN THE HTML INNER WINDOW, CONTAINING THE 
// TEXT "Hello World!"
function helloWorld(){
    var name = window.alert("Hello World!");
}

// WAITS FOR THE FULL HTML PAGE TO LOAD BEFORE EXECUTING THE SCRIPT
window.onload = function(){
    helloWorld();
}
