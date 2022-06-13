let nome = ['Mario', 'Giovanni', 'Carbine', 'Tiziano', 'Carmela']; //definiamo un array tramite una var
console.log(nome, nome.length)//length conta caratteri-valori in un elemento

let cavallonome = nome[2] //selettore specifico diamo un valore ad una variabile tramite un valore in array
console.log(cavallonome)

let nomepersonaggio = nome[0] //copio l'array ma se lo vado a cambiare non cambio il dato in array ma la sua copia
nome[0] = 'Franco' //per cambiare valore in array questo è l'unico metodo
console.log(nome)

let hh =document.querySelector('h1') //il primo h1 della pagina
console.log(hh.innerHTML)

let hh2 =document.querySelector('h1:nth-of-type(2)')//selezione un elemento specifico
console.log(hh2.innerHTML)

let h1All =document.querySelectorAll('h1') 
let hall = h1All[2]//selezione un elemento specifico
console.log(hall.innerHTML)

let animali = ['cane', 'gatto', 'fringuello'];
console.log(animali);
animali.sort() //ordine alfabetico
console.log(animali);

let frase = 'la mia pizza preferita è il cane'
let indice = frase.indexOf('cane') //da la posizione del primo carattere se trova -1 è perché quell'elemento non esiste lastIndexOf ultimo carattere
console.log(indice)

//aggiungere rimuovere da array

nome.push('Finizio') //aggiunge elemento in array in ultima posizione -nome.unshift  analogamente aggiunge in alto !!ATTENZIONE CHE RINUMUMERA TUTTI GLI ELEMENTI!!
console.log(nome)

nome.pop() //rimuove l'ultimo elemento da un array - nome.shift fa la stessa cosa ma elimina il primo !!ATTENZIONE CHE RINUMUMERA TUTTI GLI ELEMENTI!!
console.log(nome)

let nomeeliminato = nome.pop()
console.log(nome) //tieni traccia di cosa elimina
console.log('hai eliminato il nome ' + nomeeliminato)

nome.push('Carbine Super Sayan')

//nome.delete() elimina un elemento specifico per eliminare è consigliato usare splice

nome.splice(2,1)//qui selezioniamo gli elementi da eliminare,  il primo numero è da quale elemento parte e il secondo quanti ne elimina
console.log(nome)

nome.splice(2,3, 'Gennaro') //uguale a sopra ma aggiungo 'Gennaro' in quell'elenco
console.log(nome)

let nomi2 = ['francesco', 'Flavio', 'Michele']
let nomi3 = ['Giorgio', 'Fausto', 'Sergio Floccari']

let uniti = nomi2.concat(nomi3) //crea un nuovo array (uniti) che concatena più array (non sostituisce i vecchi array)
console.log(uniti)

let num = [1,2,3,4, 'ciao', [4,5,6, 'salve']] //array in array

console.log(num[2]) //seleziona in array
console.log(num[5][3]) //seleziona elemento dell'array in array

let frasina = ('ciao come stai? Marco')
let frasina2 = frasina.replace('Marco' , 'Leopoldo') //sostutuisce parola con parola se avessimo scritto /marco/i avrebbe cercato senza tener conto delle maiuscola
console.log(frasina2) //usare replaceAll sostituisce tutte

let frasona = frasina.toUpperCase()
console.log(frasona) //Tutto maiuscolo (toLowerCase tutto minuscolo)

let arrayfrase = frasina.split(' ') //Abbiamo creato un array dove gli elementi sono separati dal carattere/parola che abbiamo tra parentesi (in questo caso lo spazio)
console.log(arrayfrase)

let joinfrase = arrayfrase.join() // crea una stringada un array separati dalla virgola se in parentesi non mettiamo nulla o qualunque cosa se però lo definiamo tra parentesi
console.log(joinfrase)

let potenza = 5 ** 2 // potenza
console.log(potenza)

let resto = 10 % 3 //mostra se c'è resto nella divisione 1 se c'è, 0 se non c'è 
console.log(resto)

let numerino = 5
numerino++ //aggiunge 1
numerino = numerino + 1  //aggiunge 1 o il numero che definiamo

console.log(numerino)
numerino-- //sottrae 1
numerino = numerino - 1 //sottrae 1 o il numero che definiamo
console.log(numerino)

Math.random() //Math ha tante funzioni da usare all'occorrenza
console.log(Math.random()) //genera un numero casuale



let ringraziamenti = ['Grazie', 'Mille grazie', 'Grazie assai',]
let punteggiatura = ['.', '!', '!!',]

let rand = Math.floor(Math.random() * 3) //rand da sempre un numero casuale tra 0 e 1 quindi lo moltiplichiamo per 3 in quanto ci serve un numero che va da 0 a 2

let auguri = ringraziamenti[rand] + punteggiatura[rand] 
console.log(auguri)

let target = document.querySelector('#grazie')
target.innerHTML = auguri;


