function calcolaArea(altezza, larghezza) {
    var area= altezza * larghezza;
    return area;
}

var superf = calcolaArea(5, 4);

console.log("L'area vale: " + superf);

function calcolaVolume(altezza, largh, prof) {
   // return altezza * larghezza * prof;
   var area = calcolaArea(altezza, largh);
   return area * prof;
}

//console.log("Il volume vale: " + calcolaVol(4,6,5));
console.log("il volume è: " + calcolaVolume(6,5,4));

//ricavare i parametri da HTML

