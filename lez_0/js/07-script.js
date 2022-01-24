var elSaluto = document.getElementById("benvenuto");
var nomeUtente = prompt('Inserisci il tuo nome');
elSaluto.innerHTML = "<h1>Ciao " + nomeUtente + "!</h1>";

var items = ["maglietta", "pantalone", "scarpe", "cappello", "sciarpa", "guanti"];
var price = [50, 80, 160, 20, 40, 5];

var elLista = document.getElementById('listaOgg');
var listaSpesa = '';
elLista.innerHTML = listaSpesa;

var elTotale = document.getElementById('totale');
var totale = 0;
elTotale.innerHTML = "<h2>Totale senza IVA: " + totale + "</h2" ;

var elTotaleIvato = document.getElementById('totaleIvato');
var iva = 0
elTotaleIvato.innerHTML = "<h2> Totale con IVA: "+ totaleIva + "</h2>";

var elSpedizione = document.getElementById('spedizione');
var spedizione = 15;
elSpedizione.innerHTML = "<h2> Spese di spedizione: " + spedizione + "</h2>";

var elTotaleFinale = document.getElementById('grandTotal');
var totaleFinale = 0;


var iva = (totale *22) /100;
var totaleIva = totale + iva;
var totaleFinale = totaleIva + spedizione;
elTotaleFinale.innerHTML = "<h2> Totale finale: " + totaleFinale + "</h2>";



for (var i = 0; i< items.length; i++){
    listaSpesa += "<li>" + items[i] + ": " + prezzi[i] + "$ </li>";
    totale += prezzi[i];
}






