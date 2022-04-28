let cubo = document.querySelector('.img')
let avanti = document.querySelector('#destra')
let indietro = document.querySelector('#sinistra')
let play = document.querySelector('#play')

let posizione = 0
//let flag = false

avanti.addEventListener("click", next)
indietro.addEventListener("click", back) 




function back()
 { 
    posizione -= 90;
    cubo.style.transform = `rotateY(${posizione}deg)`;
}
function next()
 { 
    posizione += 90;
    cubo.style.transform = `rotateY(${posizione}deg)`;

}


//let intervallo = setInterval(next, 1000)
// //clearInterval(intervallo)
play.addEventListener('click', function intervallo ()
{ let intervallo = setInterval(next, 1000)})