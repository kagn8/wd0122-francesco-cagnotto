let testo = document.querySelector('#testo')
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')

bottone.addEventListener('click', function(){
    let div = document.createElement('div') //crea div
    div.classList.add('alert', 'alert-success') // aggiunge classe al div creato
    div.innerHTML = testo.value //seleziona cosa scrivere nel div

    lista.append(div); //appendiamo il div alla lista

    testo.value = '' // svuotiamo il campo alla fine del processo
})