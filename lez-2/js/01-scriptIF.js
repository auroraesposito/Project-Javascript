//OP confronto < > <= >=
var punti1= 8; //livello 1
var punti2= 5; //livello 2

var exit1= 6; //soglia
var exit2= 7; //soglia

//per finire il gioco devi superare la soglia di entrambi i livelli
//var condizione = (punti1 >= exit1) && (punti2 >= exit2);

//per finire il gioco è necessario solo il superamento di una soglia
// var condizione = (punti1>= exit1 || punti2>=exit2);

// if(condizione){
//     console.log("bravo hai superato il gioco");
// } else {
//     console.log("non hai superato il gioco");
// }

// console.log(condizione);

// //OP logici &&, ||, !
// //var parola = prompt("inserisci la parola d'ordine")
// // if (parola == 'ciao'){ //verifica il contenuto, senza verificare il tipo
// //     console.log("hai effettuato l'accesso");
// // } else {
// //     console.log('credenziali non valide');
// // }

// // if (parola === 1234){ //verifica il contenuto e il tipo, dal prompt arriva una stringa quindi sarà falso se gli passo un numero
// //     console.log("hai effettuato l'accesso");
// // } else {
// //     console.log('credenziali non valide');
// // }

// // var punteggio = 60;
// // var skill = 30;
// // var msg = '';

// // if(punteggio >= 50 && skill >= 40) {
// //     msg='Bravo, hai superato il livello'
// // }else if (punteggio >= 50 && skill <= 40){
// //     msg = 'Devi migliorare le skill per superare il livello'
// // } else if (punteggio <= 50 && skill>= 40){
// //     msg = 'Devi migliorare il tuo punteggio per superare il livello'
// // } else {
// //     msg = 'mi dispiace, fai schifo! Datti all\'ippica'
// // }

// // console.log(msg);

// //STATEMENT SWITCH
// var msg;
// var livello = 1;

// switch(livello) {
//     case 1:
//         msg = 'buona fortuna per il primo livello';
//         break;
//     case 2:
//         msg = 'ci sei riuscito, adesso ti tocca il secondo livello'
//         break;
//     case 3:
//         msg = 'adesso dovrai sconfiggere il boss'
//         break;
//     default:
//         msg = 'Benvenuto nel giuoco';
//         break;
    
// }

// console.log(msg);

//OPERATORE TERNARIO
var pioggia = true;
var grandine = true;

var decisione = (pioggia == true && grandine == true ? 'prendi l\'ombrello e giubbotto' : 'puoi uscire senza ombrello');
console.log(decisione);




