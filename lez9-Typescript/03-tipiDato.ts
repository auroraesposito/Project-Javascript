//string
let nome: string = 'Pippo';
let msg: string = `Mi chiamo ${nome}`;

//number
let eta: number = 30;
const PI:number = 3.14;
const IVA: number = 0.22;

//boolean
let unoMaggZero: boolean = true;

//array
const materie: string[] = ['Java', 'JS', 'html', 'Css', 'Mysql']
var numer: number[] = [3,2,2,6,78,9];

//ANY
var distanzaPercorsa: any;
distanzaPercorsa = 1200;
distanzaPercorsa = 2000;
distanzaPercorsa = 'Mille metri';

//tipo custom
type Animale = 'Scimmia' | 'Leone' | 'Cane'; //sto limitando i casi

var mioAnimale: Animale = "Scimmia";
let mioAnimale2: Animale = "Leone";

type Auto = string;

let miaAuto = 'Porsche';

//nelle funzioni va semrpe annotato il tipo di ritorno

function test(): void{
    const a = 0;
    const b = 1;
    if (a>b){
        console.log("il maggiore è " + a);
        
    }
}

function saluta(): string{
    let nome: string = "Aurora";
    return 'Ciao ' + nome;

}

//funzioni parametriche
function salutami(nome: string): string {


    return 'Ciao ' + nome;
}

//espressione funzionale
let saluta2 = function(nome:string) : string{
    return `Ciao ${nome}`;
}

const demo = document.getElementById('demo');
demo.innerHTML = saluta2('Aurora');

//Funzioni con parametri opzionali
function salutamiA(nome:string, cognome?:string): string{
    //con il ? il parametro diventa opzionale

    if(!cognome){
        return `Salutami a ${nome}`
    }else{
        return `Salutami a ${nome} ${cognome}`
    }
}

console.log(salutamiA("Mario"));
console.log(salutamiA("Marco", "Rossi"));

//Funzioni parametri di default
function saluta3(nome:string, saluto:string = 'Ciao') : string{
    return `${saluto} ${nome}`;
}

console.log(saluta3("Pippo"));

//Overload
function somma(a: number, b: number): number;

function somma(a: string, b:string): string;

function somma(a:any, b:any):any{
    return a + b;
}

console.log(somma("Hello", "World"));
console.log(somma(3,4));

//Arrow function
let doppio = (x:number) => x*2;
let numeroRadd = doppio(4);
console.log(numeroRadd);

let moltiplica = (x, y) => (x * y);
let molt = moltiplica(5,4);
console.log(molt);

let sommaNum = (x, y) => {
    const somma = x + y;
    return somma;
}

console.log(sommaNum(7, 5));

//funzione 
function ritardaSaluto(nome: string): void{
    this.nome = nome;
    this.saluta = function(){
        setTimeout(function(){
            console.log("Ciaooooooo " + this.nome);
            
        }, 2500)
    }
}

const salutaDopo = new ritardaSaluto('Pippo');
salutaDopo.saluta();

function ritardaSaluto2(nome:string):void{
    this.nome = nome;
    this.saluta = function() {
        setTimeout(() => 
            console.log("Ciao " + this.nome)
            
        ,1500)
    }
}

var salutaDopo2 = new ritardaSaluto2('Gennarino');
salutaDopo2.saluta();