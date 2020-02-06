document.addEventListener('DOMContentLoaded', launchApp, false);
let canvasContext=null;
function launchApp() {
console.log('test')
var canvas = document.getElementsByTagName('canvas')[0]
canvasContext = canvas.getContext('2d');

}

function onDropOnCanvas(event) {
    console.log(event.dataTransfer)
    var f = event.dataTransfer.items[0].getAsFile();
    console.log(f)
    // canvasContext.drawImage(f, 0, 0)
    var img=document.getElementsByTagName('img')[0];
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result} })(img)
    reader.readAsDataURL(f)
}