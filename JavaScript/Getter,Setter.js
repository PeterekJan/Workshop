class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter pro získání poloměru kruhu
  get radius() {
    return this._radius;
  }

  // Setter pro nastavení poloměru kruhu a kontrolu, aby byla hodnota větší než nula
  set radius(radius) {
    if (radius > 0) {
      this._radius = radius;
    } else {
      console.error("Radius must be greater than 0");
    }
  }

  // Getter pro získání průměru kruhu
  get diameter() {
    return this.radius * 2;
  }

  // Setter pro nastavení průměru kruhu a aktualizaci poloměru
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  // Getter pro získání obvodu kruhu
  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  // Setter pro nastavení obvodu kruhu a aktualizaci poloměru
  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }

  // Getter pro získání plochy kruhu
  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);

console.log(circle.radius); // Output: 5
console.log(circle.diameter); // Output: 10
console.log(circle.circumference); // Output: 31.41592653589793
console.log(circle.area); // Output: 78.53981633974483

circle.diameter = 8;
console.log(circle.radius); // Output: 4

circle.circumference = 20;
console.log(circle.radius); // Output: 3.183098861837907

// V tomto příkladu třída Circle reprezentuje kruh, který je inicializován s poloměrem. Třída obsahuje několik metod:

// get radius(): getter, který vrací hodnotu poloměru kruhu.
// set radius(radius): setter, který nastavuje hodnotu poloměru kruhu a kontroluje, zda je větší než nula.
// get diameter(): getter, který vrací hodnotu průměru kruhu na základě hodnoty poloměru.
// set diameter(diameter): setter, který nastavuje hodnotu průměru kruhu a aktualizuje hodnotu poloměru.
// get circumference(): getter, který vrací hodnotu obvodu kruhu na základě hodnoty poloměru.
// set circumference(circumference): setter, který nastavuje hodnotu obvodu kruhu a aktualizuje hodnotu poloměru.
// get area(): getter, který vrací hodnotu plochy kruhu na základě hodnoty poloměru.
// Díky použití getterů a setterů můžeme snadno získat a nastavit


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

