//e) Funkce

// 1. Co je to funkce

// 2. Jak ji zapíšeme a zavoláme
//    - vytvořte fci s názvem ``greetings`` a v jejím těle definujte proměnnou s názvem ``text`` a hodnotou ``Hello there!``.
//Obsah této proměnné vypište do konzole (přímo v těle fce).

function greetings() {
   var text = "Hallo there!"
console.log(text)
 
};
greetings('Anakin')

// 3. Návratová hodnota 
//    - funkci z předchozího bodu upravte tak aby nevypisovala do konzolze hodnotu promenné ``text``, ale aby ji vrátila
function greetings2() {
    var text = "Hallo there!"
    return text
};
greetings2()

// 4. Funkce bez argumentů

// Parametry funkcí jsou názvy uvedené v definici funkce.
//Argumenty funkce jsou skutečné hodnoty předané (a přijaté) funkcí. //funkce bez argumenutu je to same jako bez parametrů

//function functionName (Argument){

//}
function myfunc () {

    var a = 10;
    var b = 20;
    var c = a + b;

    console.log("Total Number is : "+c+"");
};
myfunc();

/////////////////////////////////////////
// 5. Funkce s argumenty
function naDruhou(number) {
    //var result = number * number;
    return result = number * number;
};

console.log(`čislo naDruhou je: ${naDruhou(2)}`);

//////////////stejny vysledek////////////
// function naDruhou(number){
//     var result = number * number;
//     return result;
// };
// console.log(`čislo naDruhou je: ${naDruhou(2)}`);

// 6. Argumenty funkce (jak funkci předáme argumenty a jak s nimi pracujeme)
//    - upravte fci ``greetings`` tak, na vstupu měla argument s názvem ``name``.
//    - fci zavolejte jako ``greetings("Anakin")``, kdy očekávaný výstup fce bude ``Anakin, hello there!``



function greetings(name) {
    console.log(`${name}, hello there!`)
    return
};
greetings("Anakin")

// 7. (optional) Anonymní funkce a jak je možné je zavolat automaticky bez jejich zavolání

var deleni = function (a, b) {
    return a / b; 
};
   

   
var x = function(a,b,c,) {
    return a + b + c;
};
   

var greeting = "Hello world"; 
   (function () {
       console.log(greeting);
   })()

/////////////////////////////////////////////

//    ///WTF :D //   
//    (() => {
//     //Your code goes here
//     })()