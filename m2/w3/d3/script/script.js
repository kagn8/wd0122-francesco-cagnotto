fetch("json/discografia.json")
.then(res => {
    console.log(res)
    return res.json()
   
})

let i = 0
let first = document.querySelector("#first")
let bottone1 = document.querySelector("#scrivi")
let bottone2 = document.querySelector("#cancella")
let titolo = document.querySelector("#titolo")

bottone1.addEventListener('click',function(e){

    e.preventDefault()
    sessionStorage.setItem("nome", first.value)
    titolo.innerHTML = "Ciao sono " + sessionStorage.getItem("nome")
})

bottone2.addEventListener('click',function(e){

    e.preventDefault()
    sessionStorage.clear()
    titolo.innerHTML = "No data"
    first.value = ""
})

let bottone3 = document.querySelector("#write")
let bottone4 = document.querySelector("#delete")

bottone3.addEventListener('click',function(e){

    e.preventDefault()
    localStorage.setItem("nome", first.value)   
})

bottone4.addEventListener('click',function(e){

    e.preventDefault()
    localStorage.clear()
    titolo.innerHTML = "No data"
    first.value = ""
})


titolo.innerHTML = "Ciao sono " + localStorage.getItem("nome")

var timer = document.querySelector("#timer")

setInterval(function(){
    i++
    sessionStorage.setItem("tempo", i)
    timer.innerHTML = "sei in sessione da " + sessionStorage.getItem("tempo")
},1000)




window.onload = function (){
    if(sessionStorage.getItem("tempo") != undefined){
        i = sessionStorage.getItem("tempo")
    }
}