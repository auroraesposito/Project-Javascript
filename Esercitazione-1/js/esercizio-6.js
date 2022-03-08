var demo = document.getElementById('demo');


function addJa(){
var strUtente = document.getElementById('stringa').value;
if(strUtente.charAt(0) == "J" && strUtente.charAt(1) == "a"){
    demo.innerHTML = strUtente;
}else {
    var strFinale = "Ja"+ strUtente;
     demo.innerHTML = strFinale;  
}
}

// var strFinale = "<p> Ja" + strUtente + '</p>';
// demo.innerHTML = strFinale;
// }

// var nome = 'jasss';

// if(nome.charAt(0) == "j" && nome.charAt(1) == "a" ) {
//     console.log(nome);
// } else {
//     console.log("ja" + nome);
// }


