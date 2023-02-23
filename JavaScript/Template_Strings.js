//template Strings

let myName = "Harry Potter";
let age = 15;
console.log("Ahoj, ja jsem " + myName + " a je mi " + age + " let.");
console.log(`Ahoj,ja jsem ${myName} a je mi ${age} let.`) // stejny jako predchozi, lepe citelny //

let pozdrav = function(firstName, lastName){
    console.log(`Ahoj, me jmeno je ${firstName} a moje prijmeni je ${lastName}`);
}
pozdrav("David", "Setek")


/*****************************************************/

let firstName = "Harry";
let secondName = "Potter";
let age2 = 15;
let firstFriend = "Ron";
let secondFriend = "Hermiona";


console.log(`Ahoj, jmenuji se ${firstName} ${secondName} a je mi ${age2} let. Moji kamaradi jsou ${firstFriend} a ${secondFriend}.`)

let movie = "Ospala dira";
let director = "Tim Burton";
let award = "nejlepsi vykon ve vyprave";

console.log(`Videl jsem film ${movie}, ktery reziroval ${director}. Tento film ziskal oceneni ${award}. `)

/*****************************************************************/