function getFile(event){
    const input = event.target
    console.log(input);
    if ('files' in input && input.files.length > 0){
        placeFileContent(document.getElementById('contentTarget'),input.files[0]);
    }
}

function getFileDrop(event){
    event.preventDefault();

    console.log("called");

    const input = event.target

    var filesDropped = event.dataTransfer.files;
    console.log(filesDropped[0]);
    if (filesDropped.length == 1){
        console.log("placed");
        placeFileContent(document.getElementById('contentDropTarget'),filesDropped[0]);
    }
}

function placeFileContent(target,file){
    readFileContent(file).then(content => {
        target.value = content;
    }).catch(error => console.log(error))
}

function readFileContent(file){
    const reader = new FileReader();
    return new Promise((resolve,reject) => {
        reader.onload = event => resolve(event.target.result);
        reader.onerror = error => reject(error);
        reader.readAsText(file);
    })
}

function dropHandle(event){
    console.log('File(s) dropped onto window');

    event.preventDefault();

    var files = event.dataTransfer.files;
    if (files.length !== 1) return;

    var reader = new FileReader();

    var readFile = reader.readAsText(files[0]);

    placeFileContent(document.getElementById('contentDropTarget'),readFile);

}


function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  

window.onload = function(){
    document.getElementById('inputFile').addEventListener('change',getFile);
    document.getElementById('dropTarget').addEventListener('drop',getFileDrop);
}