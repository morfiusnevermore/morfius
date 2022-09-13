var text = ["M","MO","MOR","MORF","MORFI","MORFIU","MORFIUS","MORFIU","MORFI","MORF","MOR","MO","M"];
var counter = 0;
var inst = setInterval(change, 250);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}