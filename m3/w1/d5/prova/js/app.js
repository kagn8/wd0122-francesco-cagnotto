var Tim = /** @class */ (function () {
    function Tim() {
        this.cerditoDiPartenza = 10;
        this.costoPerSms = 0.17;
        this.smsInviati = 0;
        // this.ricarica = 0
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
            var testo_1 = "Attenzione!!! disponi di ".concat(this.creditoAttuale, "\u20AC e l'operazione costrerebbe ").concat(operazione, "\u20AC");
            alert(testo_1);
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
        // this.ricarica = 0
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
            var testo_2 = "Attenzione!!! disponi di ".concat(this.creditoAttuale, "\u20AC e l'operazione costrerebbe ").concat(operazione, "\u20AC");
            alert(testo_2);
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
console.log("Sono present degli esempi già compilati nel file ts ma commentati, si possono decommentarli per verificare la validità dei metodi");
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
var orario = document.querySelector("#orologio");
var ricarica5 = document.querySelector("#ricarica-5");
var ricarica10 = document.querySelector("#ricarica-10");
var ricarica15 = document.querySelector("#ricarica-15");
var inviasms1 = document.querySelector("#inviasms-1");
var inviasms2 = document.querySelector("#inviasms-2");
var getter1 = document.querySelector("#getter-1");
var getter2 = document.querySelector("#getter-2");
var setter = document.querySelector("#setter");
var inviasms3 = document.querySelector("#inviasms-3");
var testo = document.querySelector("#testo");
var display = document.querySelector("#display");
var tastomenu = document.querySelector("#tasto-menu");
var restart = document.querySelector(".restart");
console.log(testo);
var snakes = "img/aim_snake.gif";
var ora = new Date();
orario.innerHTML += ora.getHours() + ":" + ora.getMinutes();
// setInterval(function sfondo(){testo!.innerHTML= `<img src=" ${snakes} " width="280" height="125">`},10000)
var Giancarlo = new Tim;
ricarica5 === null || ricarica5 === void 0 ? void 0 : ricarica5.addEventListener("click", function () {
    var n = 5;
    Giancarlo.Ricarica(n);
    testo.innerHTML = "hai ricaricato ".concat(n, " \u20AC");
});
ricarica10 === null || ricarica10 === void 0 ? void 0 : ricarica10.addEventListener("click", function () {
    var n = 10;
    Giancarlo.Ricarica(n);
    testo.innerHTML = "hai ricaricato ".concat(n, " \u20AC");
});
ricarica15 === null || ricarica15 === void 0 ? void 0 : ricarica15.addEventListener("click", function () {
    var n = 15;
    Giancarlo.Ricarica(n);
    testo.innerHTML = "hai ricaricato ".concat(n, " \u20AC");
});
inviasms1 === null || inviasms1 === void 0 ? void 0 : inviasms1.addEventListener("click", function () {
    var n = 1;
    Giancarlo.InviaSms(n);
    testo.innerHTML = "hai inviato ".concat(n, " sms");
});
inviasms2 === null || inviasms2 === void 0 ? void 0 : inviasms2.addEventListener("click", function () {
    var n = 2;
    Giancarlo.InviaSms(n);
    testo.innerHTML = "hai inviato ".concat(n, " sms");
});
inviasms3 === null || inviasms3 === void 0 ? void 0 : inviasms3.addEventListener("click", function () {
    var n = 3;
    Giancarlo.InviaSms(n);
    testo.innerHTML = "hai inviato ".concat(n, " sms");
});
getter1 === null || getter1 === void 0 ? void 0 : getter1.addEventListener("click", function () {
    Giancarlo.getCreditoAttuale();
    testo.innerHTML = "Il tuo credito residuo \u00E8 di: ".concat(Giancarlo.getCreditoAttuale(), " \u20AC");
});
getter2 === null || getter2 === void 0 ? void 0 : getter2.addEventListener("click", function () {
    testo.innerHTML = "Hai inviato un totale di: ".concat(Giancarlo.getSmsinviati(), " ");
});
setter === null || setter === void 0 ? void 0 : setter.addEventListener("click", function () {
    Giancarlo.azzeraSmsInviati();
    testo.innerHTML = "Hai cancellato la cronologia degli sms inviati ";
});
tastomenu === null || tastomenu === void 0 ? void 0 : tastomenu.addEventListener("click", function () {
    display === null || display === void 0 ? void 0 : display.classList.toggle("spento");
});
restart === null || restart === void 0 ? void 0 : restart.addEventListener("click", function () {
    location.reload();
});
