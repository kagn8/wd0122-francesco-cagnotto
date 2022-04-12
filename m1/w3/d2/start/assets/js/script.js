var nome = 'Francesco'
const annoNascita = 1993
let eta = 28

//annoNascita = 1995 come possiamo vedere non è possibile modificare l'anno di nascita in quanto costante, anche se mi piacerebbe avere 2 anni in meno



    //let nome = ('mi chiamo' + nome) come possiamo vedere non possiamo richiamare con let qualcosa che è nato come var
function scrivi() {
 document.write(nome + ' ' + annoNascita + ' ' + eta) 
}
scrivi()
console.log (scrivi)  //Qui abbiamo riportato nel log a livello strutturale cioò che abbiamo visualizzato a schermo   


function inCheAnnoSiamo(){
        let annoCorrente = (annoNascita + eta + 1) //qui abbiamo eseguito un'operazione matematica (addizione)
        document.write(annoCorrente)
    }
        inCheAnnoSiamo()
        //console.log(annoCorrente) come possiamo vedere questo let nel console log non viene visualizzata in quanto questo log esiste solo all'interno della funzione

{let temperatura = 11
temperatura= 12
console.log(temperatura)}

console.log(temperatura) //come si può vedere questo log non fa a riferimento a nulla in quanto quel "let" è nato in un blocco definito e quindi non può essere richiamato all'esterno
