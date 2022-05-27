var ContoFiglio = /** @class */ (function () {
    function ContoFiglio(saldoIniziale, interesse) {
        if (interesse === void 0) { interesse = 0; }
        this.saldoIniziale = saldoIniziale;
        this.interesse = interesse;
        this.tot = 0;
    }
    ContoFiglio.prototype.deposito = function (deposito) {
        this.tot = this.saldoIniziale + deposito;
        console.log("Disponi di " + (this.tot = this.saldoIniziale + deposito) + " euro");
    };
    ContoFiglio.prototype.primoPrelievo = function (prelievo1) {
        this.tot -= (prelievo1 + (prelievo1 * this.interesse / 100));
        console.log("Hai prelevato " + prelievo1 + "euro " + "adesso disponi di " + this.tot + "euro");
        console.log(this.tot);
        return this.tot;
    };
    return ContoFiglio;
}());
var figlio = new ContoFiglio(0);
figlio.deposito(1000);
figlio.primoPrelievo(500);
figlio.primoPrelievo(400);
console.log("----------------madre----------------");
var madre = new ContoFiglio(600, 20);
madre.deposito(1000);
madre.primoPrelievo(500);
// madre.secondoPrelievo(400)
// class ContoMadre extends ContoFiglio {
//     // private totM:number;
//     constructor(saldoIniziale:number, interesse:number){
//         super(saldoIniziale)
//         // this.totM = 0
//         super(interesse)
//     }   
//     // deposito(deposito:number){
//     //     console.log("Disponi di " + (this.totM = this.saldoIniziale  + deposito) + " euro")
//     // }   
//     // primoPrelievo(prelievo1:number){
//     //      this.totM = this.totM  - (prelievo1+(prelievo1*this.interesse/100))
//     //      console.log("Hai prelevato " + prelievo1 + "euro " + "adesso disponi di " + this.totM + "euro")
//     //      console.log(this.totM);
//     //      return this.totM
//     // }
//     // secondoPrelievo(prelievo2:number){
//     //     this.totM = this.totM  - (prelievo2+(prelievo2*this.interesse/100))
//     //     console.log("hai prelevato "+ prelievo2 + "euro " + "adesso disponi di " + this.totM + "euro")
//     //     console.log(this.totM);
//     //     return this.totM
//     // }
// }
// let madre = new ContoMadre(600, 20)
// madre.deposito(1000)
// madre.primoPrelievo(500);
// madre.secondoPrelievo(400)
