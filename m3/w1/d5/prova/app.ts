interface Ismartphone{
    cerditoDiPartenza:number;
    costoPerSms:number;
    smsInviati:number;
    ricarica:number;
    Ricarica(a:number):void;
    InviaSms(a:number):void;
    getSmsinviati():number;
    getCreditoAttuale():number;
    azzeraSmsInviati():void;

}

class Tim implements Ismartphone{
    cerditoDiPartenza: number = 10;
    costoPerSms: number = 0.17;
    smsInviati: number;
    ricarica: number;
    creditoAttuale:number;

    constructor(){
        this.smsInviati = 0
        this.ricarica = 0
        this.creditoAttuale= this.cerditoDiPartenza
    }

    Ricarica(a:number):void{
        this.creditoAttuale = this.creditoAttuale + a
        //return this.creditoAttuale
    }
    InviaSms(a:number):void{
            let operazione = this.costoPerSms*a
        if (this.creditoAttuale > operazione){
            this.creditoAttuale = this.creditoAttuale - (this.costoPerSms*a) 
            this.smsInviati = this.smsInviati + a;
            //return this.creditoAttuale
        }else{
            let testo = `Attenzione!!! disponi di ${this.creditoAttuale}€ e l'operazione costrerebbe ${operazione}€`
            alert(testo)
            //return testo
        }
	
        
    };
    getSmsinviati(){
        return this.smsInviati
    }
    getCreditoAttuale(){
        return this.creditoAttuale
    }
    azzeraSmsInviati(): void {
        this.smsInviati = 0
    }
}  

class Vodafone implements Ismartphone{
    cerditoDiPartenza: number = 5;
    costoPerSms: number = 0.20;
    smsInviati: number;
    ricarica: number;
    creditoAttuale:number;

    constructor(){
        this.smsInviati = 0
        this.ricarica = 0
        this.creditoAttuale= this.cerditoDiPartenza
    }

    Ricarica(a:number):number{
        this.creditoAttuale = this.creditoAttuale + a
        return this.creditoAttuale
    }
    InviaSms(a:number):void{
            let operazione = this.costoPerSms*a
        if (this.creditoAttuale > operazione){
            this.creditoAttuale = this.creditoAttuale - (this.costoPerSms*a) 
            this.smsInviati = this.smsInviati + a;
            //return this.creditoAttuale
        }else{
            let testo = `Attenzione!!! disponi di ${this.creditoAttuale}€ e l'operazione costrerebbe ${operazione}€`
            alert(testo)
            //return testo
        }

    };
    getSmsinviati(){
        return this.smsInviati
    }
    getCreditoAttuale(){
        return this.creditoAttuale
    }
    azzeraSmsInviati(): void {
        this.smsInviati = 0
    }    
}




console.log("Esistono 2 utenti, Giuseppe che ha come gestore Tim e Carlo che ha Vodafone, e quindi un piano tariffario differente. utilizza i metodi dei 2 utenti, ricarica(come parametro va messa la somma che vuoi aggiungere al tuo credito attuale),inviaSMS(specificare il numero di sms che vuoi inviare come parametro), oppure visualizza il tuo credito attuale con getcredito() e gli sms che hai inviato con getSmsInviati() inoltre c'è il metodo azzeraSms() che azzera la conta dei messaggi inviati finora (questa operazione come richiesto dalla traccia non ha alcun effetto sul credito). Esempio:(Carlo.inviaSms(1). Buon divertimento.) ");


//se non ti va di provarli in console decommenta questi esempi
const Giuseppe = new Tim()
// console.log(Giuseppe);
// Giuseppe.Ricarica(5)
// Giuseppe.InviaSms(10)
// console.log(Giuseppe.InviaSms(110));
// console.log(Giuseppe.getSmsinviati());
// console.log(Giuseppe.getCreditoAttuale());




console.log("<----------->");

const Carlo = new Vodafone()
// console.log(Carlo);
// Carlo.Ricarica(10)
// Carlo.InviaSms(3)
//console.log(Carlo.InviaSms(800000));
// Carlo.InviaSms(3)
// console.log(Carlo.getSmsinviati());
