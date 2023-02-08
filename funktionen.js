/* DATENSTRUKTUREN */

/* Primitives */

let a; //Definition oder Deklaration einer Variablen

// Wertzuweisung / Assignment

// a = 2; //number
// a = true; // boolean (true, false)
// a = "Hallo"; //string
// console.log(typeof a); //zeigt den Variablentyp
// console.log(a);



/* Arrays */
// Navigation über INDEX
// let arr; //Deklaration Array
// arr = new Array();  // Möglichkeit
// arr = [false,true,true,false]; // KLAUSURRELEVANT!
// console.log(arr); // Ausgabe array
// console.log(arr[0]); // Ausgabe erstes Element
// console.log(arr[3]); // Ausgabe viertes Element
// console.log(arr.length); // Ausgabe Länge des Arrays
// console.log(arr[arr.length-1]); // Ausgabe des letzten elements, bes. bei langen Arrays sinnvoll
// console.log(arr[5]); //

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a"); //Legt oben auf einen Stapel auf
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop(); //Schubst von einem Stapel herunter
// console.log(arr);
// arr.pop();
// console.log(arr);



/* Daten-Objekte */
// Navigation über Bezeichner (keys)

// let obj = {x:"Hi", y:20};
// console.log(obj); //zeigt alle Bezeichner für obj
// console.log(obj.x); //zeigt x von obj
// console.log(obj.y);

// let obj = {
//          val0: 10,
//          sub1:{
//              val1: "hi",
//              val2: 2
//              }
// };
// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val2);
// console.log(obj.sub1.val1);
// console.log(obj.sub1); //zeigt das gesamte sub1
// {{{{}}}} nested object



 /*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite
// Direktes Verändern des HTML-Inhaltes, nach dem Parsen Erstellung des DOM --> Zugriff

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"




/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

// let cond;
// cond = true;
// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == 4); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert UND *Typ* //

// if (cond) {   //Test auf Wahrheit von cond  cond == true
//          console.log("Aussage wahr");
//     } else {
//          console.log("Aussage falsch");
//     }



 // https://github.com/01-PP-CC/03_Entscheidungsstrukturen

/* FUNKTIONEN */

// 1. Kapselung
// test(); // call
// function test() { // Fkt.-Rumpf | body
//      console.log("Testausgabe"); //Aufgabe
// }

// 2. return => liefere an den Ort des Calls danach Abbruch
//   console.log(test2());  // call
//   function test2() { // do something ...
//      return "Testausgabe 2"; // Lieferung an die Stelle des calls
//      console.log("Noch eine Ausgabe"); // nach return Abbruch, daher console.log unreachable!
//   }

// // 3. Parameter
//   console.log(test3("Daniel")); // Argument(e)
//   function test3(firstName) // Parameter
//   { // do something ...
//      return "Hallo, " + firstName;
// }



// 4. Fkt-Call aus Funktionen
// console.log(test4("Dan")); // Argument(e)
// function test4(firstName) // Parameter
// {
//     return grussformel() + firstName;
//      // return firstName + grussformel() ;
// }

// function grussformel() {
//     // return "Hallo, ";
//      return "Hola, ";
// }


// https://github.com/01-PP-CC/06_Funktionen_II

// rechner();



