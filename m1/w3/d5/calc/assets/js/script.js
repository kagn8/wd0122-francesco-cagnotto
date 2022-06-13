function aggiungiNumero(bottone){

    console.log(bottone);
    let numero = bottone.innerHTML;

    let display = document.querySelector('.display');


    display.value += numero

    document.querySelector('#audio').play()
}

function risultato(){
    let display = document.querySelector('.display');
    
    let totale = eval(display.value)

    display.value = totale

    document.querySelector('#audio').play()
}

function cancella(){
    let display = document.querySelector('.display');
    display.value = ''

    document.querySelector('#audio').play()
}

function moltiplicazione(){

    let display = document.querySelector('.display');

    display.value += '*'

    document.querySelector('#audio').play()
}

function RGB(){
    document.querySelector('.display').classList.toggle("raimbow")
    document.querySelector('.grid').classList.toggle("raimbow1")
   
   
//    if(document.querySelector('.display').classList.contains("raimbow")){ 
//     document.querySelector('.display').classList.remove("raimbow")
      
//     }else{
//         document.querySelector('.display').classList.add("raimbow")
//     }
}

function sfondo (){
    document.querySelector('main').classList.toggle("sfondo1")}
    
function stile (){
    document.querySelector('.grid').classList.toggle("stile")
   
}
function pos (){
    document.querySelector('.grid').classList.toggle("pos")
   
}
function pos2 (){
    document.querySelector('.grid').classList.toggle("pos2")
   
}


