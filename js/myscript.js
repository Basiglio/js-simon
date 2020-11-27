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
    // CREO UN CONTENITORE PER I NUMERI SBAGLIATI
    var arrayNumeriSbagliati = [];


    // CREO UN CICLO PER RIEMPIRE IL CONTENITORE NUMERI DEL PC
    // FINO A QUANDO ARRAYNUMERIPC NON HA 5 CONTENUTI
 	  while (arrayNumeriPc.length < 5) {
      // GENERO UN NUMERO CASUALE
   	 	randomNumberPc = randomNumber(1, 100);
      // DOPO AVER GENERATO IL NUMERO SCORRI L'ARRAY NUMERIUTENTEPC
      check = isInArray(arrayNumeriPc, randomNumberPc)
      // SE FOSSE GIA PRESENTE UN NUMERO UGUALE SCARTALO (TRUE)
      if (check == false) {
        // SE NON FOSSE GIA PRESENTE PUSHALO NELL'ARRAYNUMERIPC
        arrayNumeriPc.push(randomNumberPc);
      }
    }
    console.log("questi sono i numeri del pc " + arrayNumeriPc);
    // GENERO ALERT CON I NUMERI DEL PC
    alert("Memorizza questi numeri: " + arrayNumeriPc);


    // IMPOSTO TIMER
    setTimeout(askNumber, 30000);
    function askNumber() {
      // CREO UN CICLO FOR
      for (var i = 0; i < 5; i++) {
        // CHIEDO ALL'UTENTE DI INSERIRE I NUMERI
        numeroUtente = parseInt(prompt("Inserisci un numero"));
        // CONTROLLO I NUMERI
        var gameCheck = isInArray(arrayNumeriPc, numeroUtente);
        // SE IL NUMERO è NELL'ARRAY DEL PC
        if (gameCheck == true) {
          arrayNumeriUtente.push(numeroUtente);
          punteggio++;
        } else {
          arrayNumeriSbagliati.push(numeroUtente);
        }
      }
      console.log("Questi sono i tuoi numeri giusti " + arrayNumeriUtente);
      console.log("Questi sono i numeri sbagliati " + arrayNumeriSbagliati);
      console.log("questo è il tuo punteggio " + punteggio);
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
