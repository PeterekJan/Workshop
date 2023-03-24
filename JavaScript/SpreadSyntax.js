// Spread syntax je funkce v jazyce JavaScript, která umožňuje rozbalovat hodnoty ze seznamu
// nebo pole a předat je jako samostatné argumenty do jiné funkce nebo vytvořit nové pole s 
// existujícími prvky a přidat k nim další prvky.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]


////////////////////////////////////////////////////////

function sum(a, b, c) {
    return a + b + c;
  }
  
  const arr = [1, 2, 3];
  
  console.log(sum(...arr)); // 6

//////////////////////////////////////////////////////

const produkty = [
  { jmeno: 'Televize', cena: 1200, datumVydani: '2022-01-01' },
  { jmeno: 'Notebook', cena: 800, datumVydani: '2021-06-01' },
  { jmeno: 'Mobil', cena: 500, datumVydani: '2020-12-01' },
  { jmeno: 'Tablet', cena: 1500, datumVydani: '2022-02-01' },
];

const produktyKopie = [...produkty];

const filtrovaneProdukty = produktyKopie
  .filter((produkt) => produkt.cena <= 1000)
  .sort((a, b) => a.jmeno.localeCompare(b.jmeno));
console.log(produktyKopie)
console.log(filtrovaneProdukty);
  