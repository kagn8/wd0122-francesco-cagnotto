class Persone{
    constructor(nome, eta){
    this.name = nome;
    this.age = eta;
    
    }
    calcolone(obj2){
        if (this.age > obj2.age){
            console.log(this.name  + ' è più vecchio di ' + obj2.name);
        }
        else if(this.age < obj2.age){
            console.log(this.name  + ' è più giovane di ' + obj2.name);
        }
        else{
            console.log(this.name  + ' e ' + obj2.name + ' hanno la stessa età');
        }
        
    }
}
//p2.calcolone(p1)


//exc 2



let p1 = new Persone('mario', 19)
let p2 = new Persone('Giacomo', 21)
let p3 = new Persone('Filippo', 19)

class Personaggi{
    constructor(nome, cognome, eta){
    this.name = nome;
    this.cognome = cognome;
    this.age = eta;
    
    }
}
let pg1 = new Personaggi ('fabio', 'caressa', 50)
let pg2 = new Personaggi ('Rocco', 'caressa2', 50)
let pg3 = new Personaggi ('Sandro', 'caressa3', 50)
let pg4 = new Personaggi ('Fiocco', 'caressa4', 50)
let pg5 = new Personaggi ('Scimmia', 'caressa5', 50)
let pg6 = new Personaggi ('Andrea', 'caressa6', 50)
let pg7 = new Personaggi ('Robalto', 'caressa8', 50)
let pg8 = new Personaggi ('Salvatore', 'caressa7', 50)

let p = new paginazione ([pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8], 2)

class paginazione {
    constructor(items=[], page=10 ){
        this.contenuti = items
        this.dimensione = page

        this.currentPage = 1
        this.paginemassime = Math.ceil(this.contenuti.length / this.dimensione)

    }
    getVisibleItems(){
        let wrapper = document.querySelector('#griglia')
        wrapper.innerHTML = ""
        let iLimit = this.currentPage * this.dimensione
       //riempio wrapper.innerHTML += 
    }
    next(){
        if(this.currentPage < this.paginemassime){
        this.currentPage++ 
        }
        this.getVisibleItems()

    }
    prev(){
        if(this.currentPage > 1){
        this.currentPage--}

        this.getVisibleItems()
    }
    
}