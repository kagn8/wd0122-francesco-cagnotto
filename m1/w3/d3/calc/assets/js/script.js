function aggiungiNumero(bottone){

    let numero = bottone.innerHTML;

    let display = document.querySelector('#display');


    display.value += numero

    var d = document.getElementById("div1");
   d.className =  'num bordo';
    
 

    // if(d.className == 'num') {
    //     d.className = 'num bordo';
    // }
    // else{
    //     d.className = 'num'
    // }; 


   
}

function risultato(){
    let display = document.querySelector('#display');
    
    let totale = eval(display.value)

    display.value = totale
}

function cancella(){
    let display = document.querySelector('#display');
    display.value = ''
}

function moltiplicazione(){

    let display = document.querySelector('#display');

    display.value += '*'
}

var d = document.getElementById("div1");
   d.className =  'num bordo';

    if(d.className === 'num bordo') {
        d.className = 'num';
    }
    else{
        d.className = 'num bordo'
    }; 


  