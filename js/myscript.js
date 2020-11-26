// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


$(document).ready(
  function () {

    // CREO UN CONTENITORE PER I NUMERI DEL PC
    var arrayNumeriPc = [];
    // CREO UN CONTENITORE PER I NUMERI DELl'UTENTE
    var arrayNumeriUtente = [];
    // PUNTEGGIO
    var punteggio = 0;
    // NUMERI NON RICORDATI
    var numeriSbagliati = [];


 	  while (arrayNumeriPc.length < 5) {
      // GENERO NUMERO CASUALE
   	 	var randomNumberPc = randomNumber(1, 100);
      var check = isInArray(arrayNumeriPc, randomNumberPc)
      if (check == false) {
        arrayNumeriPc.push(randomNumberPc);
      }
    }
    console.log("questi sono i numeri del pc  " + arrayNumeriPc);
    alert("Memorizza questi numeri: " + arrayNumeriPc);


    // IMPOSTO TIMER
    setTimeout(askNumber, 1000);
    function askNumber() {
      while (arrayNumeriUtente.length < 5) {
        // GENERO NUMERO CASUALE
        var numeroUtente = parseInt(prompt("Inserisci un numero"));
        var check = isInArray(arrayNumeriUtente, numeroUtente)
        if (check == true) {
          alert("non puoi inserire lo stesso numero 2 volte")
        } else {
          arrayNumeriUtente.push(numeroUtente);
        }
      }
      console.log("questi sono i tuoi numeri " + arrayNumeriUtente);
    }



    // CONTROLLO I NUMERI
  //   var gameCheck = isInArray(arrayNumeriPc, numeroUtente);
  //   // SE IL NUMERO è NELL'ARRAY DEL PC
  //   if (gameCheck == true) {
  //     // PUSHA IL NUMERO NEL CONTENITORE NUMERI MEMORIZZATI ED AUMENTA IL PUNTEGGIO.
  //     numeriGiusti.push(numeroUtente);
  //     punteggio++;
  //   } else {
  //     // ALTRIMENTI PUSHA IL NUMERO NEL CONTENITORE SBAGLIATI
  //     numeriSbagliati.push(numeroUtente)
  //   }
  //   console.log("i numeri che hai indovinato sono i seguenti " + numeriGiusti);
  //   console.log("i numeri che hai dimenticato sono questi " + numeriSbagliati);
  //   console.log("il tuo punteggio è " + punteggio);
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

// FUNZIONE PER CERCARE IN UN ARRAY
function isInArray(array, element) {
	var result = false;
	for (var i = 0; i < array.length; i++) {
		if (element == array[i]) {
			result = true;
			return result;
		}
	}
	return result;
}
