//let tabella = document.querySelector('#utenti')
let tabella = document.createElement('table')
tabella.classList.add("utenti")

let container = document.createElement('div')
container.classList.add("flex")

container.append(tabella)
document.body.append(container)

console.log(tabella);

fetch('json/users.json')
.then(res => res.json())

.then(risp => {

    console.log(risp);


    let th = document.createElement('tr')

    let thUserName = document.createElement('th')
    thUserName.innerHTML = "Username"
    let thName = document.createElement('th')
    thName.innerHTML = "Nome"
    let thlastname = document.createElement('th')
    thlastname.innerHTML = "Cognome"
    let thSesso = document.createElement('th')
    thSesso.innerHTML = "Sesso"
    let thfoto = document.createElement('th')
    thfoto.innerHTML = "Foto"
    let thEmail = document.createElement('th')
    thEmail.innerHTML = "Email"

    th.append(thUserName,thName,thlastname,thSesso,thfoto,thEmail)
    tabella.append(th)


    for(let utente of risp){


        let tr = document.createElement('tr')

       
        let tdUserName = document.createElement('td')
        tdUserName.innerHTML = utente.username

        let tdName = document.createElement('td')
        tdName.innerHTML = utente.firstName
        
        let tdlastName = document.createElement('td')
        tdlastName.innerHTML = utente.lastName
        
        let tdgender = document.createElement('td')
        tdgender.innerHTML = utente.gender

        let tdProfileUrl = document.createElement('td')
        tdProfileUrl.innerHTML = `<img src=" ${utente.profileURL} ">`

        let tdemail = document.createElement('td')
        tdemail.innerHTML = utente.email

        tr.append(tdUserName,tdName, tdlastName,tdgender,tdProfileUrl,tdemail)


        tabella.append(tr)
        
        
    }

})
    


