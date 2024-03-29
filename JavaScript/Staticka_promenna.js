// Statické proměnné v JavaScriptu jsou proměnné, které jsou uloženy uvnitř třídy a ne na instanci třídy. To znamená, že proměnná je společná pro všechny instance této třídy.

// Zde jsou některé výhody použití statických proměnných v JavaScriptu:

// Sdílení dat mezi instancemi třídy: Pokud potřebujete sdílet data mezi všemi instancemi třídy, můžete použít statické proměnné. To může být užitečné v případě, kdy potřebujete počítadlo nebo jmenný prostor pro určité typy dat.

// Snadnější refaktorování kódu: Pokud potřebujete změnit hodnotu proměnné, kterou používá všechny instance třídy, můžete změnit pouze statickou proměnnou namísto toho, abyste měnili hodnotu pro každou instanci zvlášť.

// Snadnější přístup k datům třídy: Pokud chcete získat přístup k datům třídy zvnějšku třídy, můžete použít statické metody a statické proměnné. To může být užitečné v případě, kdy potřebujete vytvořit pomocné funkce
// pro třídu, které nepotřebují přístup k instanci třídy.


class Person {
  static count = 0;
  constructor(name) {
    this.name = name;
    Person.count++;
  }
}

const person1 = new Person("John");
const person2 = new Person("Jane");

console.log(Person.count); // vypíše "2"



  //////////////////////////////////////
 //generuje count pomoci staticke promenné

   // generateSimpleID() {
    //     if (!Transaction.ranking) { //if transaction.id not exist
    //         Transaction.ranking = 0;
    //     }

    //     Transaction.ranking++;
    //     return Transaction.ranking;
    // }


