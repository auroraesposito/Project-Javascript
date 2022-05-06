//string
var nome = 'Pippo';
var msg = "Mi chiamo ".concat(nome);
//number
var eta = 30;
var PI = 3.14;
var IVA = 0.22;
//boolean
var unoMaggZero = true;
//array
var materie = ['Java', 'JS', 'html', 'Css', 'Mysql'];
var numer = [3, 2, 2, 6, 78, 9];
//ANY
var distanzaPercorsa;
distanzaPercorsa = 1200;
distanzaPercorsa = 2000;
distanzaPercorsa = 'Mille metri';
var mioAnimale = "Scimmia";
var mioAnimale2 = "Leone";
var miaAuto = 'Porsche';
//nelle funzioni va semrpe annotato il tipo di ritorno
function test() {
    var a = 0;
    var b = 1;
    if (a > b) {
        console.log("il maggiore è " + a);
    }
}
function saluta() {
    var nome = "Aurora";
    return 'Ciao ' + nome;
}
//funzioni parametriche
function salutami(nome) {
    return 'Ciao ' + nome;
}
//espressione funzionale
var saluta2 = function (nome) {
    return "Ciao ".concat(nome);
};
var demo = document.getElementById('demo');
demo.innerHTML = saluta2('Aurora');
//Funzioni con parametri opzionali
function salutamiA(nome, cognome) {
    //con il ? il parametro diventa opzionale
    if (!cognome) {
        return "Salutami a ".concat(nome);
    }
    else {
        return "Salutami a ".concat(nome, " ").concat(cognome);
    }
}
console.log(salutamiA("Mario"));
console.log(salutamiA("Marco", "Rossi"));
//Funzioni parametri di default
function saluta3(nome, saluto) {
    if (saluto === void 0) { saluto = 'Ciao'; }
    return "".concat(saluto, " ").concat(nome);
}
console.log(saluta3("Pippo"));
function somma(a, b) {
    return a + b;
}
console.log(somma("Hello", "World"));
console.log(somma(3, 4));
//Arrow function
var doppio = function (x) { return x * 2; };
var numeroRadd = doppio(4);
console.log(numeroRadd);
var moltiplica = function (x, y) { return (x * y); };
var molt = moltiplica(5, 4);
console.log(molt);
var sommaNum = function (x, y) {
    var somma = x + y;
    return somma;
};
console.log(sommaNum(7, 5));
//funzione 
function ritardaSaluto(nome) {
    this.nome = nome;
    this.saluta = function () {
        setTimeout(function () {
            console.log("Ciaooooooo " + this.nome);
        }, 2500);
    };
}
var salutaDopo = new ritardaSaluto('Pippo');
salutaDopo.saluta();
function ritardaSaluto2(nome) {
    this.nome = nome;
    this.saluta = function () {
        var _this = this;
        setTimeout(function () {
            return console.log("Ciao " + _this.nome);
        }, 1500);
    };
}
var salutaDopo2 = new ritardaSaluto2('Gennarino');
salutaDopo2.saluta();
