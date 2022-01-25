var elSaluto = document.getElementById("benvenuto");
var nomeUtente = prompt('Inserisci il tuo nome');
elSaluto.innerHTML = "<h1>Ciao " + nomeUtente + "!</h1>";

var items = [];
var prezzi = [];
var totale = 0;

function registra() {
  items.push(document.getElementById('item').value);
  prezzi.push(document.getElementById('prezzo').value);

  for (var i = 0; i< items.length; i++){
    document.getElementById('listaOgg').innerHTML += "<li>" + items[i] + ": " + prezzi[i] + "$ </li>";
    totale += prezzi[i];
}
}
// for (var i = 0; i< items.length; i++){
//     document.getElementById('listaOgg').innerHTML += "<li>" + items[i] + ": " + prezzi[i] + "$ </li>";
//    totale += prezzi[i];
//  }


document.getElementById('totale').innerHTML = "Totale: $" + totale;

var totaleIvato = totale *1.22;
document.getElementById('totaleIvato').innerHTML = "Totale IVA inclusa: $" + totaleIvato;

var grandTotal = (totaleIvato + 6.99).toFixed(2);
document.getElementById('grandTotal').innerHTML = "Il prezzo finale è: $" + grandTotal;






