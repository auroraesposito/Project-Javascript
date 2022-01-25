//Dichiaro una funzione
/*function saluta() {
    alert ("Ciao dalla funzione");
}

//richiamo la funzione
//saluta();*/

function getNome() {
     prompt('Come ti chiami? ');

}

// getNome();

// function scriviQualcosa(){
//     document.write("Ciao dalla funzione Scriviqualcosa")
// }

//scriviQualcosa();


/*function eseguiTutto() {
    saluta();
    scriviQualcosa();
    getNome();
}

eseguiTutto();*/

function benvenuto() {
    //variabili locali, se le richiamo fuori dalla funzione non sono visibili
    var username = prompt('Come ti chiami?' );
    var mess = "Ciao " + username + ", benvenuto sulla pagina!";
    var elDemo = document.getElementById('demo');
    elDemo.innerHTML = mess;
}
//variabile globale
var username = "Pippo";


//benvenuto();
//richiamo la funzione nella pagina html


function scriviFeed() {
    var elFeed = document.getElementById('feedback');
    elFeed.innerHTML = '<p> Qui sotto potrai scrivere la tua recensione </p>';
    elFeed.innerHTML += '<textarea rows=10></textarea><br>';
    elFeed.innerHTML += '<button onclick="salva()"> Invia Feed </button>';
}

function salva(){
    alert( 'Grazie per aver inviato il tuo feedback. Ciao!');
}

function eseguiTutto() {
    benvenuto();
    scriviFeed();
}
//richiamo eseguiTutto sul pulsante dell'html