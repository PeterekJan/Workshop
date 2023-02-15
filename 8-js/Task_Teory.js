console.log("-----------Cisla---------");
//b) Práce s čísly
// 1. Vyzkoušejte si základní aritmetické operace s datovým typem ``int`` a ``number`` + modulus
var a = 5;
var b = 3;
var c = 256.5;
console.log(a + b);console.log(a - b);console.log(a / b);console.log(a * b);
console.log(Number.isInteger(c));  //false
console.log(10 % 9);  //vypocet zbytku
console.log("-----------Pretypovai---------");
// 2. Přetypování
//    - naučte se přetypovávat číslo, které je jako string (``"10"``) na číslo (``10``)
//    - vyzkoušejte si, co se stane, pokud se pokusíte sečíst 2 čísla, která jsou jako ``string``

var d = "10";
var e = "15.786";
var ee = ["aa", "bb"]
console.log(Number(d));
console.log(d + e);
console.log("25" + "38");
console.log(Number(d + e));

console.log(a.toString())  //zmena typu na string!

var bb = ee.join(" ") //spojeni POLI
console.log(bb)


console.log("-----------Zaokrouhleni---------");

// 3. Zaokrouhlení čísla (nahoru, dolů, aritmetické zaokrouhlení)
console.log(Math.round(e)); //Vrátí x zaokrouhlené na nejbližší celé číslo
console.log(Math.ceil(e)); //Vrátí x zaokrouhlené nahoru na nejbližší celé číslo
console.log(Math.floor(e)); //Vrátí x zaokrouhlené dolů na nejbližší celé číslo
console.log(Math.trunc(e)); //Vrátí celočíselnou část x 


// 4. Definování počtu desetinných míst
console.log(25.569.toFixed(2));

var m = Number(e).toFixed(2);
console.log(m);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-----------Stringy---------")
//c) Práce se stringy

// 1. Jak funguje concat (spojování stringů)
var array1 = ['a', 'b', 'c']; //spojuje pole libovolny pocet v zavorce (..., ...)
var array2 = ['d', 5, '2'];
var array3 = array1.concat(array2);

var f = "abraham";
var g = "SYN";
var array4 = f.concat(g);

console.log(array3);
console.log(array4); //spojeni dvou stringu stejne jako +

// 2. Zjistěte, jak zajistit transformaci textu:
//    - všechna písmena velká
//    - všechna písmena malá
//    - pouze první písmeno velké

console.log( f.toUpperCase());
console.log( g.toLowerCase());

var j = f.charAt(0).toUpperCase() + f.slice(1);
console.log(j)

//prvni pismeno v kazdem slovu velké
var k = 'when grown up, there will be a day';

var arr = k.split(" ");   
for(var z = 0; z < arr.length; z++){
    arr[z] = arr[z].charAt(0).toUpperCase() + arr[z].slice(1);
};
var changedArr = arr.join(" ");
console.log(changedArr)

// 3. Do konzole vypište pouze první písmeno daného stringu
var l = "ZemePekloRaj";
console.log(l.charAt(0))

// 4. Do konzole vypište délku daného stringu (tj počet znaků)
console.log(l.length)

console.log("---------------Podminky a cykly-----------------")

// 1. Nastudujte si podmínky
//    - ``if`` a ``else``
//    - ``else if``
//    - ``switch``

var pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}


var country = "Ireland";
switch (country) {
  case "France":
  case "Spain":
  case "Ireland":
  case "Poland":
    console.log("This country is in Europe.");
    break;
  case "United States":
  default:
    console.log("This country is not in Europe.");
}


var errand = "Going Shopping";
switch (errand) {
  case "Going to the Dentist": {
    let message = "I hate going to the dentist";
    console.log(message);
    break;
  }
  case "Going Shopping": {
    let message = "I love to shop";
    console.log(message);
    break;
  }
  default: {
    console.log("No errand");
    break;
  }
}

// 2. Nastudujte si, co je to ternární operátor a jak se používá

function checkWinner (win){
    
    win ? console.log("You win!") : console.log("You lose")
    
    }
    
    checkWinner(true)

function checkAge(age){

return age >= 21 ? "you get beer!" : "you get juice"
}
console.log(checkAge(17));



var number = 5;
let result;

// if(number >= 50){
//     result = "Not to fifty!"
// }else{
//     result = "It could be worse"
// }

number >= 50 ? "Not to fifty!" : "It could be worse"

console.log(result);




// if(number === 0){
//     result = "You have nothing"
// }else if( number < 10) {
//     result = "You have very little"
// }else{
//     result = "You have a lot"
// }

result = number === 0 ? "You have nothing" : (
    number < 10 ? "You have very little" : "You have a lot"
)

console.log(result);

console.log("---------------cykly-----------------")

//3. Nastudujte si cykly
//    - ``for``
//    - ``foreach``
//    - ``while``
