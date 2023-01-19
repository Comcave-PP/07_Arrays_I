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


/* For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output("index i:" + i + " " + arr[i]); // i als Index des Arrays
// }


/**  05 Funktionalität mit Array 2 **/
// output(getSentenceArr2(["Ich","bin","der","coole","Max","Mütze"]));
// function getSentenceArr2(arr)
// {
//     for (let i = 0; i < arr.length; i++) {

//         output(arr[i]);
    
//     }

//     return "booo";
// }

/*********   Überlegungen - Transponierung **********/

/*

1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung

*/
// /* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    output("in der loop:" + a);
//    a = a + 1;
// }
// output("nach der loop: " + a);


/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = "";
// let gap = " ";
// let addStr = "Test";
// for (let i = 0; i <= 5; i++) {
//     output("in der loop: " + str);
//     // a = a + 1;  // Numerik
//     str = str + addStr + gap // Text
// }
// output("nach der loop: " + str);


/*** 1b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...

// output(getSentenceArr3(["Ich","bin","der","coole","Max","Mütze"]));
// function getSentenceArr3(arr)
// {
//     let str = "";
//     for (let i = 0; i < arr.length; i++)
//     {
//         str = str + arr[i] + GAP;
//     }

//     str = str + PUNCT;

//     return str;
// }


// Eigene Lösung für Satzbauer
output(getSentenceArr4(["Ich","bin","der","coole","Max","Mütze"]));
function getSentenceArr4(arr)
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


