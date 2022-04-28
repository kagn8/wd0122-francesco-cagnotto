let div = document.createElement('div') //crea un elemento html
div.classList.add('prova')// addiamo una classe all'elemento creato sopra
console.log(div);
div.innerHTML='test'
document.querySelector('body').appendChild(div) //aggiungiamo il nostro elemento al body in questo caso

let div2 = document.createElement('div') //crea un elemento html
div2.innerHTML='test2'
document.querySelector('body').prepend(div2)// aggiungiamo il nuovo contenuto all'inizio del target

//to do list

let bottone = document.querySelector('#inserisci') // ci agganciamo al bottone
let todoArea = document.querySelector('#to-do') //ci agganciamo al div contentore
let x= 1; //creiamo una var globale numerica

bottone.addEventListener('click', function(){ //facciamo una funzione al click sul bottone
    
    let todoWrap = document.createElement('div') //andiamo a creare dei div figli del contenitore
    todoWrap.classList.add('todo')

    let testo = document.querySelector('#testo') //ci andiamo ad agganciare form
    todoWrap.innerText= x + ' ' + testo.value //ci agganciamo alla value del form nel div
    x++; // incrementiamo di uno la var x

    let close = document.createElement('button') //creiamo un bottone
    close.innerText = 'elimina' //gli scriviamo dentro
    close.addEventListener('click', function(){ //aggiungiamo a quel tasto una nuova funzione
        todoWrap.remove() //metodo remove al div appena creato
    })
    todoWrap.append(close) // inseriamo il tasto nel div figlio
    todoArea.append(todoWrap) //inseriamo il testo del div nel div figlio

})

// studiare il metodo cloneNode() e cloneNode(true) copiano fli elementi praticamente




// AJAX

let richiesta = new XMLHttpRequest() //inizializzo l'ogetto 

richiesta.open('GET', 'https://sofin.wp-admin.it/public/api/v1/user'); //apriamo l'getto con i metodi get lettura, post creazione, put/patch update/sostituzione, delete eliminazione, e lo apriamo

richiesta.onload = function(){ //al caricamento lancia una funzione
    //console.log(richiesta.response);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => {
     //console.log(data);
    for(let user of data){
       //console.log(user);
    let div = document.createElement('div')
    div.innerHTML = user.username
    document.querySelector('body').append(div)
    
}})



//JSON

let j = '{"name":"mario", "cognome":"pappalardo", "eta":30}'

console.log(JSON.parse(j)); //trasforma in oggetto un json


//form 

let buttone = document.querySelector('#buttone')
console.log(buttone);

buttone.addEventListener('click', function(event){
    event.preventDefault()


    let nome = document.querySelector('#nome')
    let password = document.querySelector('#password')
    let valid =true

    if(nome.value == ''){
        nome.nextElementSibling.innerHTML = 'devi inserire il nome'
        valid=false
    }else{
        nome.nextElementSibling.innerHTML = ''

    }
    if(password.value == ''){
        password.nextElementSibling.innerHTML = 'devi inserire il nome'
        valid=false
    }

    if (valid){
        //invia form
        document.querySelector('#mioform')
    }
})