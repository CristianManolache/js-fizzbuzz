// “Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.”

// Creo un array che contiene 100(numeri).
var arrayNr = [];  // Array vuota
var lista = document.createElement("a") //lista elementi

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 ==0) {
    arrayNr[i] = ("Fizz"+"Buzz"); // Per i numeri che sono sia multipli  di 3 che di 5 stampi FizzBuzz.”
} else if (i % 3 == 0) { // al posto del nr multipli * 3 stampa Fizz
  arrayNr[i] = "Fizz";
} else if (i % 5 == 0) { // al posto del nr multipli * 5 stampa Buzz
  arrayNr[i] = "Buzz";
} else {
  arrayNr[i] = i;
}
var num = document.createTextNode(arrayNr[i]);
lista.appendChild(num);

document.getElementById("fizzlist").appendChild(lista);
console.log(arrayNr[i]); // stampa risultato finale
}
