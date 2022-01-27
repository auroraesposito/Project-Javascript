var auto = {
    marca:"",
    modello: "",
    cilindrata: 0,
    marcia: 0,
    velocita: 0,
    numGiri: 0,
    acceso: false,

    presentaMotore(marca, modello) {
        this.marca = marca;
        this.modello = modello;
        console.log('Stai testando: ' + this.marca + ' - ' + this.modello);
    },

    modificaGiri: function(numGiri) {
        this.numGiri = numGiri;
        console.log(this.numGiri +  'giri');
    },

    cambiaMarcia: function(marcia) {
        this.marcia = marcia;
        console.log("Hai cambiato marcia!!");
        console.log("Sei alla marcia: " + this.marcia);
    },

    calcolaVel: function(marca, modello, giri, marcia) {
        this.presentaMotore(marca, modello)
        this.modificaGiri(giri);
        this.cambiaMarcia(marcia);
        this.velocita = (this.numGiri / (this.marcia * 100));
        console.log("La tua velocità è di: " +  this.velocita);
    }

}


function valutaMotore() {
    //i parametri devono essere presi dal campo input
    //auto.calcolaVel('Ford', 'Focus', 5000, 2);
    document.getElementById("marca").innerHTML ="";
    document.getElementById("modello").innerHTML ="";
    document.getElementById("giriMotore").innerHTML ="";
    document.getElementById("marcia").innerHTML ="";

}
