var elSaluto = document.getElementById("benvenuto");
var nomeUtente = prompt('Inserisci il tuo nome');
elSaluto.innerHTML = "<h1>Ciao " + nomeUtente + "!</h1>";

var items = [];
var prezzi = [];

function registra() {
  document.getElementById('listaOgg').innerHTML = "";
  var totale = 0;
  
  items.push(document.getElementById('item').value);
  prezzi.push(document.getElementById('prezzo').value);

  
    
 
  for (var i = 0; i< items.length; i++){
    document.getElementById('listaOgg').innerHTML += "<li>" + items[i] + ": " + prezzi[i] + "$ </li>";
    totale += Number(prezzi[i]);
  
  var totaleIvato = totale *1.22;
  var grandTotal = (totaleIvato + 6.99).toFixed(2);
  document.getElementById('totale').innerHTML = "Totale: $" + totale;
  document.getElementById('totaleIvato').innerHTML = "Totale IVA inclusa: $" + totaleIvato;
  document.getElementById('grandTotal').innerHTML = "Il prezzo finale è: $" + grandTotal;

  document.getElementById('item').value = "";
  document.getElementById('prezzo').value = "";
}
}
// for (var i = 0; i< items.length; i++){
//     document.getElementById('listaOgg').innerHTML += "<li>" + items[i] + ": " + prezzi[i] + "$ </li>";
//    totale += prezzi[i];
//  }










