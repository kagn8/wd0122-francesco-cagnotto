let orario:Element|null = document.querySelector("#orologio");
let ricarica5:Element|null = document.querySelector("#ricarica-5");
let ricarica10:Element|null = document.querySelector("#ricarica-10");
let ricarica15:Element|null = document.querySelector("#ricarica-15");
let inviasms1:Element|null = document.querySelector("#inviasms-1");
let inviasms2:Element|null = document.querySelector("#inviasms-2");
let getter1:Element|null = document.querySelector("#getter-1");
let getter2:Element|null = document.querySelector("#getter-2");
let setter:Element|null = document.querySelector("#setter");
let inviasms3:Element|null = document.querySelector("#inviasms-3");
let testo:Element|null = document.querySelector("#testo");
let display:Element|null = document.querySelector("#display");
let tastomenu:Element|null = document.querySelector("#tasto-menu");
let restart:Element|null = document.querySelector(".restart");
console.log(testo);

let snakes:string="img/aim_snake.gif"
let ora = new Date()

orario!.innerHTML += ora.getHours()  + ":" + ora.getMinutes();


// setInterval(function sfondo(){testo!.innerHTML= `<img src=" ${snakes} " width="280" height="125">`},10000)

const Giancarlo = new Tim;
ricarica5?.addEventListener("click", function(){
    let n:number = 5
    Giancarlo.Ricarica(n)
    
    testo!.innerHTML= `hai ricaricato ${n} €`
    
})
ricarica10?.addEventListener("click", function(){
    let n:number = 10
    Giancarlo.Ricarica(n)
    
    testo!.innerHTML= `hai ricaricato ${n} €`
    
})
ricarica15?.addEventListener("click", function(){
    let n:number = 15
    Giancarlo.Ricarica(n)
    
    testo!.innerHTML= `hai ricaricato ${n} €`
    
})
inviasms1?.addEventListener("click", function(){
    let n:number = 1
    Giancarlo.InviaSms(n)
    
    testo!.innerHTML= `hai inviato ${n} sms`
    
    
})
inviasms2?.addEventListener("click", function(){
    let n:number = 2
    Giancarlo.InviaSms(n)
    
    testo!.innerHTML= `hai inviato ${n} sms`
    

})
inviasms3?.addEventListener("click", function(){
    let n:number = 3
    Giancarlo.InviaSms(n)
    
    testo!.innerHTML= `hai inviato ${n} sms`
    

})
getter1?.addEventListener("click", function(){
    Giancarlo.getCreditoAttuale()  
    testo!.innerHTML= `Il tuo credito residuo è di: ${Giancarlo.getCreditoAttuale()} €`
})
getter2?.addEventListener("click", function(){
    testo!.innerHTML= `Hai inviato un totale di: ${Giancarlo.getSmsinviati()} `
})
setter?.addEventListener("click", function(){
    Giancarlo.azzeraSmsInviati()
    testo!.innerHTML= `Hai cancellato la cronologia degli sms inviati `
})
tastomenu?.addEventListener("click", function(){
    display?.classList.toggle("spento")
})
restart?.addEventListener("click", function(){
    location.reload();
})

