var demo = document.getElementById('demo'); //la metto globale perchè è un div vuoto

function saluta(){
    var username = document.getElementById('username').value; //prendo ciò che l'utente scrive
    
    if(username == "") { //== confronta il contenuto, === confronta il contenuto e il tipo
        demo.innerHTML = "Non hai compilato il campo";
        demo.style = "color:red";
    } else {
    console.log("Ti chiami " + username);
    demo.innerHTML = "Ciao " +  username;
}   

    document.getElementById('username').value = "";


}






