//var firstNumber = prompt("Zadej prvni cislo");  //vse napsane v proptu se bere jako string
//var secondNumber = prompt("Zadej druhe cislo");
var firstNumber = prompt("Zadej prvni cislo");  
var secondNumber = prompt("Zadej druhe cislo");
var sign = prompt("Zadej plus nebo minus")

//console.log(firstNumber);
//console.log(secondNumber);     //Kontrola spravnosti
//console.log(sign);

//console.log(typeof(Number(firstNumber))); //vypise v konzoli ze firstNumber je number

firstNumber = Number(firstNumber);          //Prevedeni na cislo
secondNumber = Number(secondNumber);


if (sign == "+"){
console.log(firstNumber + secondNumber); //tvari se jako string!!
} else if (sign == "-"){
    console.log(firstNumber - secondNumber);
} else {
    console.log("tuto nezvladnu");
}


//Number("20"); prevod string na cislo

//String(20) prevod cisla na text

//console.log(typeof(String(20)));

/*******************************************/
// - && - a zaroven            // musi byt pravdive obe podminky
// if (ageDavid > 18 && ageDavid < 30){
//} else {
//}    

// || - nebo                  //staci kdyz plati jedna podminka
// Jmenuji se david nebo jsem starsi 18 let.
//if(nameDavid == "David" || ageDavid > 18){
//} else {  
//}