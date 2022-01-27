//notazione letterale
var studente = {
    //definisco proprietà e metodi
    nome: "Aurora",
    cognome: "Esposito",
    promosso: true,
    matricola: 123,
    dataNascita: new Date("06/19/1998").getFullYear(),

    superEsame: function() {
        alert('Hai superato l\' esame');
    }
}

var docente = {
    nome: "Pippo",
    cognome: "Baudo",
    dataNscita: new Date('01/01/1945').getFullYear(),
    programmi: 'Sanremo',

    conduci: function() {
        alert('Benvenuti cari studenti');
    }
}

var rettore = {
    nome: "Piero",
    cognome: "Angela",
    dataNascita: new Date('01/01/1933').getFullYear(),
    facolta: 'Super Quark'
}



//recuper il valore di alcune proprietà
console.log(studente.cognome);

var demo = document.getElementById('demo');
function stampaInfo(persona) {

    demo.innerHTML = '';
    // demo.innerHTML += persona.nome + '<br>';
    // demo.innerHTML += persona.cognome + '<br>';
    // demo.innerHTML += persona.matricola + '<br>';
    // demo.innerHTML += persona.dataNascita + '<br>';
    // demo.innerHTML += persona.promosso + '<br>';

    for (const prop in persona) {//for in: ottimizzato per gli oggetti
        console.log(persona[prop]); //uso la notazione parentesi quadre perchè prop è una stringa
        
        if(typeof persona[prop] != "function") {
            
            demo.innerHTML += prop + ": " + persona[prop] + '<br>';
        }
        }
    }


