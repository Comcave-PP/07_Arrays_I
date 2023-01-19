"use strict";

/* Die Satzbau-Maschine | Arrays */

// Konstanten
const GAP = " ";
const PUNCT = ".";

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin", "der","coole","Max","Mütze"));

// function getSentence()
// {
//     let str = word1 + GAP +
//               word2 + GAP +
//               word3 + GAP +
//               word4 + GAP +
//               word5 + GAP +
//               word6 +
//               PUNCT;
//
//     return str;
// }

/*** 02. Theorie: Array */

// let arr;
// // arr = new Array();  // Konstruktor
// arr = []; // Literal
// arr = [2,6,74,3];
// arr = [true,false,true];
// arr = ["Ich","bin","Max","Mütze"];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Position im Array)
// output(arr[3]); // letzte Position konkret
// output(arr[arr.length -1]); // letzte Position allgemein

/*** 03 Funktionalität mit Array 1 */

// Kritik
// word1,word2, .... wordN : Semantische Struktur
// arr[0],arr[1], .... arr[n] : Numerische Struktur
// --> Transformation semantisches Problem -> numerisches Problem

// output(getSentenceArr(["Ich","bin","der","coole","Max","Mütze"]));
// function getSentenceArr(arr)
// {
//     let str = arr[0] + GAP +
//               arr[1] + GAP +
//               arr[2] + GAP +
//               arr[3] + GAP +
//               arr[4] + GAP +
//               arr[5] +
//               PUNCT;

//     return str;
// }

/* 04 Theorie: Schleifen (for-schleife) */

// Allgemeine Wiederholungsstruktur

// // Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++)
// {
//     // output("hi");
//     output("index i: " + i);
// }

// // Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--)
// {
//     output("index i: " + i);
// }

// // Inkrement (var. Schrittweite)
// for (let i = 0; i <= 100; i+=10)
// {
//     output("index i: " + i);
// }

// Eigene Lösung für Satzbauer
output(getSentenceArr(["Ich","bin","der","coole","Max","Mütze"]));
function getSentenceArr(arr)
{
    let str = "";
    for (let i = 0; i < arr.length; i++)
    {
        if (i == arr.length -1)
        {
            str = str + arr[i] + PUNCT;
        }
        else
        {
            str = str + arr[i] + GAP;
        }
    }

    return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


