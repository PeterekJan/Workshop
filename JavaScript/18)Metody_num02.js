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



////////////////////////////////////////////////////////////////////

/*
Úkol
Vytvořte 6 proměnných number1 až number6.
Do každé proměnné uložíte výsledek hodu kostkou - tedy číslo od 1 do 6.
Poté do proměnné sum všech 6 čísel nasčítáte a pokud je součet větší nebo rovno 25, tak vypíšete "Vítěz".
Pokud menší, tak "Zkus znovu své štěstí".
Na vhodném místě také do konzole vypíšete celkový součet všech 6 čísel.
*/

//bez cyklu

let number1 = Math.ceil(Math.random() * 6);
let number2 = Math.ceil(Math.random() * 6);
let number3 = Math.ceil(Math.random() * 6);
let number4 = Math.ceil(Math.random() * 6);
let number5 = Math.ceil(Math.random() * 6);
let number6 = Math.ceil(Math.random() * 6);

let sum = number1 + number2 + number3 + number4 + number5 + number6

console.log(`Soucet je: ${sum}`)

if(sum >= 25){
    console.log("Vitez")
}else{
    console.log("Zkus znovu")
}

//////////////////////////////////

var vysledek = 0;
function hod(){
    for(var i = 0; i < 6; i++){
        function jednotlivyHod(){
            for(var j = 0; j < 20; j++){
                var number = Math.ceil(Math.random() * 6);
                return number
            }
            }
        var result = jednotlivyHod();
        vysledek = vysledek + result;
};
console.log(`Soucet je ${vysledek}`)

}
         

hod();
if(vysledek >= 25){
    console.log(`Vitez`);
}else{
    console.log("Zkus Znova");
}
/////////////////////////////////////////////
/*Vytvořte proměnnou passwords (pole) a uložte do ní tři stringy - texty (i text může mít v sobě čísla).
Vaším úkolem je náhodně vybrat jedno heslo.
Při každém znovunačtení stránky se do konzole vypíše jedno ze tří hesel (náhodně).
*/

var password = ["aaaa1111", "bbbb11111", "cccc1111"];
var y = Math.ceil((Math.random() * password.length)-1);
console.log(password[y])


/////////////////////////////////////////////////////////

