interface Veicolo{
    crea:string;
    colore ?: string;
}

class Auto implements Veicolo{
    crea: string;

	constructor(public colore: string) {
	}

    get color(): string{
        return this.colore;
    }
    
}


let miaAuto = new Auto('Rossa');

console.log(miaAuto.color);

interface Eccezione{
    messaggio: string;
    id? : number;
}

interface ErrorHandler{
    eccezione: Eccezione[];
    logEccezione(messaggio:string, id?: number):void;
}

class notANumber implements Eccezione{

    messaggio: string;
    id? : number;

    constructor(public _messaggio: string, public _id?:number){
        
    }
}

let NAN = new notANumber('non è un numero')

console.log(NAN._messaggio);


//MODULES
export class MioService{
    getData(){};
}