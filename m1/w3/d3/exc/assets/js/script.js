function benvenuto() {
    console.log('hello world');
}

benvenuto();


function animale(cane, gatto) {
    const animaliPreferiti = 'i miei animali preferiti sono' + cane + 'e' + gatto;
    return animaliPreferiti;
}

console.log (animale);


function calcolaAnni(compleanno) {
    return 2050 - compleanno;
}

alert(calcolaAnni(1993));

const anni = calcolaAnni(1993);
console.log(anni);

const calcolaAnni2 = compleanno => 2040 - compleanno;

let anni2 = calcolaAnni2(1980);
console.log(anni2);

const pensionamento = (compleanno, nome) => {
    const eta = 2037 - compleanno;
    const anniPensione = 65 - eta;
    return `${nome} va in pensione tra ${anniPensione} anni`;
}

console.log(pensionamento(1975, 'Marco'));
console.log(pensionamento(1980, 'Paolo'));


function tagliaFette(torta) {
    return torta * 3;
}

function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFette(mela);
    const fetteArancia = tagliaFette(arancia);

    const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    return torta;
}

console.log(scegliTorta(3, 5));

const calcolaSpesa = function(conto) {
    return conto >= 50 && conto <= 300 ? conto * 0.15 : conto * 0.2;
}

console.log(calcolaSpesa(320));