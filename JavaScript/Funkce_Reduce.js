// Metoda reduce()provádí redukční funkci pro prvek pole.
// Metoda reduce()vrací jedinou hodnotu: akumulovaný výsledek funkce.
// Metoda reduce()neprovádí funkci pro prázdné prvky pole.
// Metoda reduce()nemění původní pole.

//součet vsech prvku v poli
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

///////////////////////////////////////////////////////////////////
//všechny sude z pole

const numbersss = [1, 2, 3, 4, 5];
const evenNumbers = numbersss.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(evenNumbers); // Výstup: [2, 4]

///////////////////////////////////////////////////////////////////
//pruměr
const numberss = [1, 2, 3, 4, 5];
const average = numberss.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
}, 0);
console.log(average); // Výstup: 3

////////////////////////////////////////////////////////////////////////////



