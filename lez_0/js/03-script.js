
var colori = ['Blu','Verde', 'Giallo', 'Viola', 'Rosa'];

console.log(colori);

//seleziono primo elemento

var primoEl = colori[0];
var secondoEl = colori[1];
var terzoEl = colori[2];
var quartoEl = colori[3];
var quintoEl = colori[4];

// console.log(primoEl);
// console.log(secondoEl);
// console.log(terzoEl);
// console.log(quartoEl);
// console.log(quintoEl);

console.log(colori.length);
// metodo per aggigungere un elemento
colori.push("Nero");

// sort metodo per ordinare
colori.sort();

//reverse()
colori.reverse();

for(var i=0;i< colori.length;i++){
    console.log(colori[i]);
}

// CDG cafonata del giorno

var mioArr = ["Daniele","Sudosi",26, 1995, true];

console.log(mioArr);

document.write("Nome :" + mioArr[0] + "<br>");
document.write("età :" + mioArr[2] + "<br>");