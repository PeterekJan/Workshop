// V JavaScriptu jsou funkce map() a filter() používány pro manipulaci s polem a vrací nové pole.

// Funkce map() vytváří nové pole s výsledky volání specifikované funkce pro každý prvek pole.
// Funkce map() projde každý prvek pole, aplikuje na něj specifikovanou funkci a vytváří z ní nový prvek.
// Výsledkem funkce map() je nové pole s výsledky volání funkce pro každý prvek původního pole.
// Zde je příklad použití funkce map(), která vezme pole čísel a vrátí nové pole,
//kde jsou všechna čísla zdvojnásobena:const numbers = [1, 2, 3, 4, 5];

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const cities = [
    { name: 'Prague', country: 'Czech Republic' },
    { name: 'Paris', country: 'France' },
    { name: 'Berlin', country: 'Germany' }
  ];
  
  // Vytvoření pole s názvy měst
  const cityNames = cities.map(function(city) {
    return city.name;
  });
  
  console.log(cityNames); // Output: ["Prague", "Paris", "Berlin"]

// Na druhé straně funkce filter() vytváří nové pole s prvky původního pole,
// které splňují určité podmínky. Funkce filter() projde každý prvek pole a zjistí,
// zda splňuje podmínku specifikovanou v parametru funkce. Pokud je podmínka splněna,
// prvek se přidá do nového pole. Výsledkem funkce filter() je nové pole obsahující pouze prvky, které splňují podmínku.

// Zde je příklad použití funkce filter(), která vezme pole čísel a vrátí nové pole, kde jsou pouze sudá čísla:

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 20 }
  ];
  
  // Vytvoření pole s názvy lidí, kteří jsou starší než 25 let
  const namesOfOlderPeople = people.filter(function(person) {
    return person.age > 25;
  }).map(function(person) {
    return person.name;
  });
  
  console.log(namesOfOlderPeople); // Output: ["Jane", "Bob"]

// Takže základní rozdíl mezi funkcemi map() a filter() je ten,
// že map() vrací nové pole s výsledky volání funkce pro každý prvek původního pole,
// zatímco filter() vrací nové pole obsahující pouze prvky,
// které splňují podmínku specifikovanou v parametru funkce.
