
var louieMain = document.getElementById('louie-main');
var louieElem = document.getElementById('louie');


var wfcMain = document.getElementById('wfc-main');
var wfcElem = document.getElementById('wfc');


var shoopMain = document.getElementById('shoop-main');
var shoopElem = document.getElementById('shoop');


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

function onShoopEnter(){
    shoopElem.classList.add('active')
}
function onShoopExit(){
    shoopElem.classList.remove('active')
}


setTimeout(function(){
louieMain.addEventListener('mouseenter', onLouieEnter);
louieElem.addEventListener('mouseleave', onLouieExit);

wfcMain.addEventListener('mouseenter', onWfcEnter);
wfcElem.addEventListener('mouseleave', onWfcExit);

shoopMain.addEventListener('mouseenter', onShoopEnter);
shoopElem.addEventListener('mouseleave', onShoopExit);
}, 500);