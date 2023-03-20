class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get area() {
      return this.calcArea()
    }
  
    calcArea() {
      return this.height * this.width;
    }
  }
  var p = new Polygon(10, 20);

console.log(p);

  //////////////////////////////////////////////////////

  const person2 = {
    firstName: 'Willem',
    lastName: 'Veen',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

console.log(person2);
// When the fullname property gets looked up
// the getter function gets executed and its
// returned value will be the value of fullname


///////////////////////////////////////////////////////////////////////////////////
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  
  // Getter pro jméno
  get name() {
    return this._name;
  }
  
  // Setter pro jméno
  set name(name) {
    this._name = name;
  }
  
  // Getter pro věk
  get age() {
    return this._age;
  }
  
  // Setter pro věk
  set age(age) {
    if (age < 0) {
      throw new Error("Věk nemůže být záporný.");
    }
    this._age = age;
  }
}

// Vytvoření nové instance třídy Person
let person = new Person("Jan", 25);

// Použití Getteru pro získání jména
console.log(person.name); // Vypíše: "Jan"

// Použití Setteru pro nastavení jména
person.name = "Petr";
console.log(person.name); // Vypíše: "Petr"

// Použití Getteru pro získání věku
console.log(person.age); // Vypíše: 25

// Použití Setteru pro nastavení věku
person.age = 30;
console.log(person.age); // Vypíše: 30

// Pokus o nastavení záporného věku vyvolá chybu
person.age = -5; // Vyhodí chybu: "Věk nemůže být záporný."


// V tomto příkladu třída Person má vlastnosti _name a _age.
// Metody get a set slouží k získání a nastavení hodnoty těchto vlastností.
// Metody name a age jsou použity jako přístupové body pro získání a nastavení hodnoty vlastností name a age.
// Při použití Setteru pro vlastnost age je také provedena kontrola, zda věk není záporný.