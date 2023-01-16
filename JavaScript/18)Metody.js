///Metody

var person1 = {
    firstName: "David",
    secondName: "Setek",
    age: 34,
    height: 184,
    salary: 10000,
    greet: function(friends){              //Metoda
        console.log("Ahoj, mam " + friends + " pratel")
    },
    toWork: function(job){
        return "Jdu do sve prace, coz je " + job
    }
}

console.log(person1.firstName)
console.log(person1.height)
person1.greet(10)
let result = person1.toWork("programator")
console.log(result)



//************metody pro string***********************//
var firstName = "David";
//delka
console.log(firstName.length);


//velka pismena
console.log(firstName.toUpperCase());

//includes

var sentence = "David se uci javascript";
let word = "David";
console.log(sentence.includes(word))

//odstraneni whiteSpaces

let secondName = " Setek";
console.log(secondName.trim());

/************************************************************/

//math metody

var number = 3.1415999999


//zaokrouhleni na desetine mista
console.log(number.toFixed(2));       

//zakrouhleni na cele cisla
console.log(Math.round(number));
//zaokrouhleni dolu
console.log(Math.floor(number));
//zakrouhleni nahoru
console.log(Math.ceil(number));

//nahodne cele cislo

console.log(Math.ceil(Math.random()* 100))

//nahodne cislo z intervalu

var min = 15
var max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)