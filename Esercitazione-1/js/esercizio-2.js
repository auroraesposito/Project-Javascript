var demo = document.getElementById('demo');

function calcola() {
var AnnoNasc = document.getElementById('annoNasc').value;
var AnnoCorr = document.getElementById('annoCorr').value;

var etaUtente = Number(AnnoCorr) - Number(AnnoNasc);

var risultato = '<p> la tua età è: ' + etaUtente + ' anni.</p>';
demo.innerHTML = risultato;

}