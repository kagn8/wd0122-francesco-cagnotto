//definizione oggetto

let oggetto = {
    prop: 'valore',
    prop3: 'valore2',
    prop3: 'valore3',
}

//ogetto vuoto

let obj = {}

//esempio

let pizza = {
    gusto: 'margherita', //proprietà, valori variabili legati esclusivamente all'oggetto
    tipo: 'napoletana',
    prezzo: 5,
    dettagli: function() {
        console.log('la pizza costa 5€');// all'interno degli oggetti possono esistere funzioni
    }
}

console.log(pizza.gusto); //andiamo a richiamare la singola proprietà come fosse una variabile

pizza.gusto = 'diavola'; // andiamo a selezionare la proprietà oggetto.proprietà e la utiliziamo come una normalissima var

console.log(pizza.gusto); //dimostrazione

pizza.dettagli() //lanciamo una funzione inclusa in un oggetto



// costruttore oggetti


function Pizza (g,t,p) { //oggetto costruttore
    this.gusto = g
    this.tipo = t
    this.prezzo = p
    this.dettagli = function() {
        console.log('la '+ g+ ' '+ t + ' costa ' + p + '€');}
    
}

let margherita = new Pizza( 'margherita', 'romana', 8); //assegnamo parametri ad un oggetto
// margherita.tipo= "romana";
console.log(margherita);
margherita.dettagli()


//prototype

Pizza.prototype.disponibilita = true; // abbiamo aggiunto una proprietà ad un oggetto già esistente

let marinara = new Pizza( 'marinara', 'napoletana', 4); //assegnamo parametri ad un oggetto
marinara.disponibilita= false; //abbiamo modificato una proprietà creta dopo
console.log(marinara); //esempio
marinara.dettagli()

// costruire oggetti con class

class Pizzette{
    constructor(g,t,p){//inizializzo l'oggetto
        this.gusto = g || 'margherita' //andiamo a settare con l'equalescenza || un valore di default
        this.tipo = t || 'napoletana'
        this.prezzo = p || '5'
        this.dettagli()
        }
    dettagli = function() {// definisco la funzione
        console.log('la '+ this.gusto + ' '+ this.tipo + ' costa ' + this.prezzo + '€');}
}

let margheritina = new Pizzette('margheritina', 'romanina', 2)



//ereditarietà

class Persona{

    constructor(nome, cognome, anni){
        this.nome= nome
        this.cognome= cognome
        this.anni= anni 
    }
    presentazione(){
        console.log('ciao, mi chiamo '+ this.nome+' '+ this.cognome+ ' ed ho '+ this.anni +' anni' );
    }
}

let persona = new Persona ( 'Mario','Rossi', 30)
persona.presentazione()

class Studente extends Persona{// definiamo che student eredita tutte le proprietà di persona 
    constructor(nome, cognome, anni){
        super(nome, cognome, anni)//scegliamo cosa deve ereditare con il super constructor
    }
}

let studente = new Studente ('Maria' , 'Rosa', 25) //esempio
studente.presentazione()