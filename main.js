// ESERCIZIO 1  DIFFICILE (fake, é facile)

//   Rincorri la decina
//   Scrivi un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.
//   Esempio: for (let i=1; i<=10; i++) {

//     Output: 
//              1 2 3 4 5 6 7 8 9 10
//             11 12 13 14 15 16 17 18 19 20
//             21 22 23 24 25 26 27 28 29 30
//             31 32 33 34 35 36 37 38 39 40
//             41 42 43 44 45 46 47 48 49 50
//             51 52 53 54 55 56 57 58 59 60
//             61 62 63 64 65 66 67 68 69 70
//             71 72 73 74 75 76 77 78 79 80
//             81 82 83 84 85 86 87 88 89 90 
//             91 92 93 94 95 96 97 98 99 100


let output = "";                   //output non definito, viene dato da i//
for (let i = 1; i <= 100; i++) {   //valore di i 1 a 100//
    output += i + " ";             //output i che cresce di +i che e= 1//
    if (i % 10 === 0) {            // //
        output += "\n";
    }
}
console.log(output);


// ESERCIZIO 2
//  Scrivi una FUNZIONE che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE  se non lo è.
//  Nel controllo scarta gli spazi e i segni di punteggiatura.
//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE

//   Consigli:
//   Puoi eliminare spazi e segni di punteggiatura usando :
//      str.replace(/\s/g, "").
// Valerio Vacca — Oggi alle 14:01

let input = prompt(`Inserisci una parola`);     /* prompt dove inserire una parola */


function palindroma (input){            

    input=input.replace(/\s/g, "");  /* replace mi toglie gli spazi e le virgole */

    input=input.toLowerCase();      /*trasforma le parole MAIUSCOLE in minuscole*/

    let parola= [];
    for (let i=0; i<input.length; i++){
        parola[i] = input[i];
    }

    let palindroma = parola.reverse();  /* ribalta in linea una parola */
    console.log(palindroma);

    palindroma = palindroma.join(``);  /* trasforma un array in una stringa */
    
    if (input===palindroma) {console.log('La parola e palindroma');}
        else {console.log("La parola non e palindroma");};

    console.log(palindroma);

}

palindroma(input);


// ESERCIZIO 3
// Provate a usare la funzione
// // Scrivi un programma che dati:
// // - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// // - il tipo di operazione aritmetica da effettuare, una delle seguenti:
// //   addizione
// //   sottrazione
// //   moltiplicazione
// //   divisione
// //  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
// // Esempio:
// //   Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
// //   Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]


let arr1 = [9, 1, 4, 2, 3, 5, 4, 8, 6, 10];
let arr2 = [1, 5, 7 , 8 , 10, 2, 3, 6, 9, 4];
let arr3 = [];

for(let i = 0; i < arr1.length; i ++){
    arr3[i] = arr1[i] - arr2[i];

}

console.log(arr3);


// ESERCIZIO 4
// esplorare la documentazione sui metodi degli array
// INFINE
// Iniziare/continuare/finire il progetto black (da finire entro venerdì, daje :charizard:)


//ESERCIZI JS 04 PARTE 2


// ESERCIZIO 1
// Dato un array: let numbers = [10, 12, 78, -4, -20, 11];
// Scrivi due funzioni:
// una che prenda in input un array di numeri
// e restituisca il maggiore
// l'altra che restituisca il minore.
// Suggerimento utilizzare Math.max() e Math.min();


let arr = [10, 12, 78, -4, -20, 11];

console.log(...arr);

function max(array){

    return (Math.max (...array));
}

console.log(max(arr));

function min(array){

    return (Math.min (...array));
}

    console.log(min(arr));


// ESERCIZIO 2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//   Esempio:
//     Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//     Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

//   Variante:
//   Prova ad ordinali in modo crescente.


let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

numbers.sort (function (a, b){
    return (b - a);
});
console.log(numbers);

numbers.sort (function (a, b){
    return (a - b);
});

console.log(numbers);


//   ESERCIZIO 3

//     Dato un array x e un valore y. 
//     Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.

//     L'array può contenere numeri o stringhe. 
//     y può essere uno dei due.
//     Restituire true se l'array contiene il valore, false in caso contrario.

//         check([66, 101], 66) ---> true
//         check(['what', 'a', 'great', 'kata'], 'kat') ---> false

// (Consiglione .includes() 👀 )   .includes()
// oppure con un semplice forEach

let x = ['y', 'k', 6, 'w', 435, 'ciao', 'basta'];

let y = 'mango';

 console.log(x.includes (y));

y = 6;

x.forEach(element => {
    console.log(y == element ? true : false);
});


// ESERCIZIO 4
// Scrivere una funzione che prenda come input un numero (n) e generi un array composto da n numeri casuali compresi tra 1 e 10.


let n = 6;

function nCasuali (el){
    let arr = [];
    for (let i = 0; i < el; i++){
        arr = [...arr, Math.random() * 10 ];
    }
   return (arr);
}

let array = nCasuali(n);

console.log(array);


// Esempio: Input= 5    Output= [4, 9, 1, 6, 10]
// ESERCIZIO 5
// Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
    
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// dovra’ restituire come risultato, let newArray = [50, 70, 90]

let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];
let newArray = numbers1.map((valore, i) => valore + numbers2[i]);
console.log(newArray);


// ESERCIZIO 6
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array.

// Esempio: 
// let array = [1, 5 ,7 ,12];
// Output = 25


let array = [15, 32, 9, 10]
function sommaArray (array) {
    let somma = array.reduce((acc, el) => acc + el);
    return somma

}

console.log(sommaArray(array));
