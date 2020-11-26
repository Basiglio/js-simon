// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


$(document).ready(
  function () {

    // CREO UN CONTENITORE PER I NUMERI DEL PC
    var arrayNumeriPc = [];
    // CREO UN CONTENITORE PER I NUMERI DELl'UTENTE
    var arrayNumeriUtente = [];

 	  while (arrayNumeriPc.length < 5) {
      // GENERO NUMERO CASUALE
   	 	randomNumberPc = randomNumber(1, 100);
      arrayNumeriPc.push(randomNumberPc);
    }
    console.log(arrayNumeriPc);
    alert("Memorizza questi numeri: " + arrayNumeriPc);


    console.log(arrayNumeriUtente);

    setTimeout(askNumber, 3000);
    function askNumber() {
      while (arrayNumeriUtente.length < 5) {
        // GENERO NUMERO CASUALE
        numeroUtente = parseInt(prompt("Inserisci un numero"));
        arrayNumeriUtente.push(numeroUtente);
      }
    }
  }
);
// MY FUNCTION----------------------------------------------

// GENERARE NUMERO CASUALE
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random () * (max - min) +1);
  return number;
}
