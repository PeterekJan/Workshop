//Vypise vsechny object KEYS
console.log(Object.keys(object))
//Vypise vsechny object VALUES
console.log(Object.values(object))





var employees = ["David", "Jane", "Diana"];


var david = {
    firstName: "David",
    lastName: "Setek",
    birthYear: 1980,
    driverLicence: true,
    family: ["John", "Anna", "Diana"]
}


console.log(david);
console.log(david.lastName);

console.log(david["firstName"]); //jiny zapis

/******************************************/
//druha moznost jak zapsat object

var diana = new Object();
diana.firstName = "Diana";
diana.lastName = "Novotna";
diana.birthYear = 1999;
diana.driveLicence = false;

console.log(diana);

diana.firstName = "Ales"; // zmena hodnoty



/******************METODY u objektu = funkce************************/


var employees = ["David", "Jane", "Diana"];


var david = {
    firstName: "David",
    lastName: "Setek",
    birthYear: 1980,
    driverLicence: true,
    family: ["John", "Anna", "Diana"],
    calculateAge: function(){
        return 2020 - david.birthYear;
    }
}



var diana = {
    firstName: "Diana",
    lastName: "Setek",
    birthYear: 2000,
    driverLicence: true,
    family: ["John", "Anna", "Diana"],
    calculateAge: function(){
        return 2020 - this.birthYear;  //this odkazuje na var diana
    }
}

var eduard = {
    firstName: "Eduard",
    lastName: "Setek",
    birthYear: 1990,
    driverLicence: true,
    family: ["John", "Anna", "Diana"],
    calculateAge: function(){
        return 2020 - this.birthYear;    //this odkazuje na var eduard
    }
}

var anna = {
    firstName: "Anna",
    lastName: "Setek",
    birthYear: 1950,
    driverLicence: true,
    family: ["John", "Anna", "Diana"],
    calculateAge: function(){
        return 2020 - this.birthYear;    //this odkazuje na var anna
    }
}

console.log(david.calculateAge());
console.log(diana.calculateAge());
console.log(eduard.calculateAge());
console.log(anna.calculateAge());


//*******************po uprave, kdy je prirazen age do array********/
var diana = {
    firstName: "Diana",
    lastName: "Setek",
    birthYear: 2000,
    driverLicence: true,
    family: ["John", "Anna", "Diana"],
    calculateAge: function(){
        this.age = 2020 - this.birthYear;  //this.age najednou odkazuje a prizadi do objektu
    }
}
diana.calculateAge();  // volani funkce
console.log(diana);



/**************************************************************/

var person1 = {
    name: "David Setek",
    age: 34,
    city: "Ceske budejovice"
    
}

var person2 = {
    name: "Harry Potter",
    age: 12,
    city: "London"
    
}

var person3 = {
    name: "Jana Tada",
    age: 18,
    city: "Praha"
    
}

console.log(`Jmenuje se ${person1.name}. Je mu ${person1.age} let a pochazi z mesta ${person1.city}.`)
console.log(`Jmenuje se ${person2.name}. Je mu ${person2.age} let a pochazi z mesta ${person1.city}.`)
console.log(`Jmenuje se ${person3.name}. Je ji ${person3.age} let a pochazi z mesta ${person1.city}.`)

/********************************************************/

var firstBook = {
    name: "Harry Potter a kamen",
    author: "J.K.Row",
    published: "1997"
    
}

var secondBook = {
    name: "Harry Potter a komnata",
    author: "J.K.Row",
    published: "1998"
    
}


var resultBook = function(book){
    console.log(`Kniha od ${book.author} z roku ${book.published} se jmenuje ${book.name}`)

}

resultBook(firstBook);
resultBook(secondBook);

/****************************************************/


var firstBook = {
    title: "Harry Potter a kamen",
    author: "J.K.Row",
    published: "1997"
    
}

var secondBook = {
    title: "Harry Potter a komnata",
    author: "J.K.Row",
    published: "1998"
    
}

let bookInfo = function(book){
    return {
        basicInfo:`${book.title} od ${book.author}`,
        publishing: `Kniha ${book.title} byla vydana v roce ${book.published}`
    }
}

let result = bookInfo(firstBook)
console.log(result)
console.log(result.basicInfo)
console.log(result.publishing)´



