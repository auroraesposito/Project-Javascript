var output = document.getElementById('output');
var btn1 = document.getElementById('btn1');

btn1.onclick = function() {//funzione anonima

}

//oppure

function prova(){
    console.log("prova");

}

btn1.onclick = prova; // se richiamo una funzione con nome NON METTO le ();

//se la funzione ha dei parametri?
function paramFun(nome){
    console.log(nome);
}


btn1.onclick = function() {
    paramFun("Dario");
}
