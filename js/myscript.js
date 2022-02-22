//KM DA PERCORRERE//
const userKm = parseInt( prompt ('Inserisci il numero di chilometri che devi percorrere'));

//ETÁ DEL PASSEGGERO//
const userAge = parseInt( prompt ('Inserisci l\'età del passeggero'));


//PREZZO DEL BIGLIETTO//
const partialPrice = userKm * 0.21;
let totalPrice;

//SCONTI IN BASE ALL'ETÁ//
if (userAge < 18){
    totalPrice = partialPrice - partialPrice * 0.2;
}

if (userAge > 65) {
    totalPrice = partialPrice - partialPrice  * 0.4;
}
else{
    totalPrice = partialPrice;
}

const outcome = totalPrice;


document.getElementById("outcome").innerHTML = "Il prezzo del tuo biglietto è: " + totalPrice + '€';



