function addText(){
    var name = window.prompt("Enter your name: ");
    document.getElementById("test").innerHTML = name;
}

window.onload = function(){
    addText();
}
