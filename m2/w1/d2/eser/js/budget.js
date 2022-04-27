function shop() {

    let budget = 1000;
    let operazioni = 0;

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 100);
       

        if (prezzi <= budget) {
            operazioni += 1;
            budget = budget - prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '</p> <br>';
        }

        if (budget <= 500 && budget + prezzi >= 500) {
            
            document.getElementById('mio_budget').innerHTML += '<h1>ATTENTO SEI SOTTO I 500!!</h1>  <br>';
            
        }

        if (budget == 0) {
            document.getElementById('messaggio2').innerHTML = '<h1>hai finito i soldi, poraccio</h1>';
            break;
        }

     

    }

    document.getElementById('mio_budget').innerHTML += '<h1>Hai fatto: ' + operazioni + ' acquisti </h2>';

}