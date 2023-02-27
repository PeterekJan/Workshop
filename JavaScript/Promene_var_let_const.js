///////////konstanty///////////
// constanta je navržena aby se nepřepisovala

const adult = false;

adult = true

console.log(adult);

////////////////
const person = {
    age: 34
};

person = {}; //nelze objekty prepisovat, ale jednotlive vlastnosti ano

person.age = 50;


///////////////////////////////////

let age = 30;
let age = 50;

//nelibi se mu dvoji definovani stejne promenne let

var oss = 10;
var oss = 15;

//var nema problem


if(true){
    let number = 5;
}
console.log(number);  //nelze vypsat mimo blok if(musi byt {})

if(true){
    var number = 8;
}
console.log(number)

///////////////////////////////////////////////////

console.log(value);
let value = 10   // ala kucharka, nefunguje nejdriv vyvolani a az pak plneni

console.log(value2); //var te pusti ale napise undefine
var value2 = 14;

//////////////////////////////////////////////////////



