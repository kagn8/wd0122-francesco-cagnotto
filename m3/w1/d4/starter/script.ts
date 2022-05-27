const APPURL:string = "Abbigliamento.json"



class vestiti {

    public id:number;
    //private codprod:string;
    //public collezione:string;
    //public capo:string;
    //private modello:number;
    //private quantita:number;
    //public colore:string;
    public prezzoSenzaIva:number;
    public prezzoIva:number;
    //private disponibile:string;
    public saldo:number;

    constructor(id:number, prezzoSenzaIva:number, prezzoIva:number, saldo:number, ){
        this.id = id;
        this.prezzoSenzaIva = prezzoSenzaIva;
        this.prezzoIva = prezzoIva;
        this.saldo = saldo;
    }
    getPrezzoLordo(){
        return this.prezzoSenzaIva
    }
    getdettagli(){
        let dettagli:string = `il capo con id:${this.id}, al cliente costa ${this.prezzoIva}` 
        return dettagli
    }
    getsconto(){
        let sconto:number = (this.prezzoIva - ((this.prezzoIva*this.saldo)/100))
        return sconto
    }
   
}

async function asincrono () {
// return await fetch(APPURL)
// .then(res => res.json())
// .then(res => {
    let x = await fetch(APPURL)
    let json = await x.json();

    //console.log(res);
    // for(let v of res){
    //     oggetti.push(v);
        
    // }

    let oggetti:{}[] = [];
    //console.log(json);
 
    for (let capo of json){
        // let id = capo.id;
        // let codprod = capo.codprod;
        // let collezione = capo.collezione;
        // let capo = capo.capo;
        // let modello = capo.modello;
        // let quantita = capo.quantita;
        // let colore = capo.colore;
        // let prezzoivaesclusa = capo.prezzoivaesclusa;
        // let prezzoivainclusa = capo.prezzoivainclusa;
        // let disponibile = capo.disponibile;
        // let saldo = capo.saldo;
        
        let vestito = new vestiti(capo.id, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.saldo)
        oggetti.push(vestito);
    }
    return oggetti
}

let x:{}[] = [];

// const altra = () => {
//     const result = asincrono()
//     return result
// }
asincrono().then(res=>{
    
    x = [...res]

    console.log(x);
    
}
)
console.log(x[0]);









