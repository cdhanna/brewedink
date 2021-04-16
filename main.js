
var louieMain = document.getElementById('louie-main');
var louieElem = document.getElementById('louie');


var wfcMain = document.getElementById('wfc-main');
var wfcElem = document.getElementById('wfc');


function onLouieEnter(){
    louieElem.classList.add('active')
}
function onLouieExit(){
    louieElem.classList.remove('active')
}

function onWfcEnter(){
    wfcElem.classList.add('active')
}
function onWfcExit(){
    wfcElem.classList.remove('active')
}

louieMain.addEventListener('mouseenter', onLouieEnter);
louieElem.addEventListener('mouseleave', onLouieExit);

wfcMain.addEventListener('mouseenter', onWfcEnter);
wfcElem.addEventListener('mouseleave', onWfcExit);