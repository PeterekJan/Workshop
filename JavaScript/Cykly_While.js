// Nejzákladnější smyčkou v JavaScriptu je smyčka while , o které bude řeč v této kapitole.
// Účelem cykluwhile je opakovaně provádět příkaz nebo blok kódu, pokud je výraz pravdivý.
// Jakmile se výraz stane nepravdivým, smyčka se ukončí.

// forEach - prochazi pole
// for - zname pocet opakovani
// while - dokud plati podminka(nemusi se provest ani jednou)
// do while - provede se vzdy alespon jednou


// while (expression) {
//     Statement(s) to be executed if expression is true
//  }

var count = 0;
console.log("Starting Loop ");
         
while (count < 5) {
console.log("Current Count : " + count );
count++;
console.log("provedeni cyklu")
}

console.log("Loop stopped!");

//////////////////////////////////


var i = 0;            //provede se 2x
do {
  console.log(`The number is ${i}`)
  i++
} while (i <= 1);