var Tim = /** @class */ (function () {
    function Tim() {
        this.cerditoDiPartenza = 10;
        this.costoPerSms = 0.17;
        this.smsInviati = 0;
        this.ricarica = 0;
        this.creditoAttuale = this.cerditoDiPartenza;
    }
    Tim.prototype.Ricarica = function (a) {
        this.creditoAttuale = this.creditoAttuale + a;
        //return this.creditoAttuale
    };
    Tim.prototype.InviaSms = function (a) {
        var operazione = this.costoPerSms * a;
        if (this.creditoAttuale > operazione) {
            this.creditoAttuale = this.creditoAttuale - (this.costoPerSms * a);
            this.smsInviati = this.smsInviati + a;
            //return this.creditoAttuale
        }
        else {
            var testo = "Attenzione!!! disponi di ".concat(this.creditoAttuale, "\u20AC e l'operazione costrerebbe ").concat(operazione, "\u20AC");
            alert(testo);
            //return testo
        }
    };
    ;
    Tim.prototype.getSmsinviati = function () {
        return this.smsInviati;
    };
    Tim.prototype.getCreditoAttuale = function () {
        return this.creditoAttuale;
    };
    Tim.prototype.azzeraSmsInviati = function () {
        this.smsInviati = 0;
    };
    return Tim;
}());
var Vodafone = /** @class */ (function () {
    function Vodafone() {
        this.cerditoDiPartenza = 5;
        this.costoPerSms = 0.20;
        this.smsInviati = 0;
        this.ricarica = 0;
        this.creditoAttuale = this.cerditoDiPartenza;
    }
    Vodafone.prototype.Ricarica = function (a) {
        this.creditoAttuale = this.creditoAttuale + a;
        return this.creditoAttuale;
    };
    Vodafone.prototype.InviaSms = function (a) {
        var operazione = this.costoPerSms * a;
        if (this.creditoAttuale > operazione) {
            this.creditoAttuale = this.creditoAttuale - (this.costoPerSms * a);
            this.smsInviati = this.smsInviati + a;
            //return this.creditoAttuale
        }
        else {
            var testo = "Attenzione!!! disponi di ".concat(this.creditoAttuale, "\u20AC e l'operazione costrerebbe ").concat(operazione, "\u20AC");
            alert(testo);
            //return testo
        }
    };
    ;
    Vodafone.prototype.getSmsinviati = function () {
        return this.smsInviati;
    };
    Vodafone.prototype.getCreditoAttuale = function () {
        return this.creditoAttuale;
    };
    Vodafone.prototype.azzeraSmsInviati = function () {
        this.smsInviati = 0;
    };
    return Vodafone;
}());
console.log("Esistono 2 utenti, Giuseppe che ha come gestore Tim e Carlo che ha Vodafone, e quindi un piano tariffario differente. utilizza i metodi dei 2 utenti, ricarica(come parametro va messa la somma che vuoi aggiungere al tuo credito attuale),inviaSMS(specificare il numero di sms che vuoi inviare come parametro), oppure visualizza il tuo credito attuale con getcredito() e gli sms che hai inviato con getSmsInviati() inoltre c'è il metodo azzeraSms() che azzera la conta dei messaggi inviati finora (questa operazione come richiesto dalla traccia non ha alcun effetto sul credito). Esempio:(Carlo.inviaSms(1). Buon divertimento.) ");
//se non ti va di provarli in console decommenta questi esempi
var Giuseppe = new Tim();
// console.log(Giuseppe);
// Giuseppe.Ricarica(5)
// Giuseppe.InviaSms(10)
// console.log(Giuseppe.InviaSms(110));
// console.log(Giuseppe.getSmsinviati());
// console.log(Giuseppe.getCreditoAttuale());
console.log("<----------->");
var Carlo = new Vodafone();
// console.log(Carlo);
// Carlo.Ricarica(10)
// Carlo.InviaSms(3)
//console.log(Carlo.InviaSms(800000));
// Carlo.InviaSms(3)
// console.log(Carlo.getSmsinviati());
