let oggetto = {
    nome: 'Mario'

} //crea oggetto



function CostruttoreOggetto() {
    this.nome = 'Mario'
}//crea serie di oggetti

let oggetto2 = new CostruttoreOggetto();



class ClasseOggetto {
    constructor() {
        this.nome = 'Mario'
    }
}//crea serie di oggetti (classe) dispone di ereditarietà e metodi aggiuntivi

let oggetto3 = new ClasseOggetto();






console.log(oggetto);
console.log(oggetto2);
console.log(oggetto3);


class Automobile {
    constructor(_marca, _colore) {
        this.marca = _marca //this rappresenta il singolo oggetto che richiama la funzione
        this.colore = _colore
        this.ruote = 4;
        this.prezzo = 10000;
    }
    sconto(percentuale) { //creiamo una funzione all'interno di un costruttore (creiamo un metodo) che quando la richiamiamo si modifica un determinato parametro (esempio a riga 62)
        this.prezzo = (this.prezzo / 100) * (100 - percentuale)
    }
}//generiamo un costruttore di oggetti

let clc = new Automobile('mercedes', 'nero')
let apecar = new Automobile('piaggio', 'giallo')
apecar.ruote = 3; //riassegnamo un parametro che non era definito all'ingresso

console.table(clc); //crea una tabella nella console
console.table(apecar);

//parentesi quadre

let pizza = {
    gusto: 'margherita'
}

pizza['gusto']; //richiamiamo un valore, viene utilizzato per chiamare parametri numerici o che utilizzano caratteri speciali
pizza.gusto; //solitamente li richiamiamo così poiché più preciso

clc.sconto(40);
console.table(clc);

//prototype

let maranello = new Automobile ('ferrari', 'rosso')
let caymanS = new Automobile ('porsche', 'gialla')
let panda = new Automobile ('fiat', 'blu')

Automobile.prototype.brandProtetto = true //innietto una nuova proprietà all'interno della classe automobile

console.table([clc, maranello]) //richiamiamo oggetti in un array
console.log(maranello.brandProtetto); //richiamiamo il valore inniettato