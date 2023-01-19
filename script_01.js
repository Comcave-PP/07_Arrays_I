"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin", "der","coole","Max","Mütze"));

// function getSentence()
// {
//     const GAP = " ";
//     const PUNCT = ".";

//     let str = word1 + GAP +
//               word2 + GAP +
//               word3 + GAP +
//               word4 + GAP +
//               word5 + GAP +
//               word6 +
//               PUNCT;

//     return str;
// }

/*** 02. Theorie: Array */

let arr;
// arr = new Array();  // Konstruktor
arr = []; // Literal
arr = [2,6,74,3];
arr = [true,false,true];
arr = ["Ich","bin","Max","Mütze"];

output(arr);
output(arr.length); // Anzahl der Elemente
output(arr[0]); // Index 0 (1. Position im Array)
output(arr[3]); // letzte Position konkret
output(arr[arr.length -1]); // letzte Position allgemein

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


