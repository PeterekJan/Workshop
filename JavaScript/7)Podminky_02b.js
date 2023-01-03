var firstNumber = Number(prompt("Zadej prvni cislo"));  
var secondNumber = Number(prompt("Zadej druhe cislo")); //zde se da usetrit radky s prevodem na cislo
var sign = prompt("Plus, Minus, Nasob, Del")


if (sign == "+"){
console.log(firstNumber + secondNumber); //tvari se jako string!!
} else if (sign == "-"){
    console.log(firstNumber - secondNumber);
} else if (sign == "*"){
    console.log(firstNumber * secondNumber);
} else if (sign == "/" && secondNumber !=0){
    console.log(firstNumber / secondNumber);   
} else if (sign == "/" && secondNumber == 0){
    console.log("nulou nepodělis");
} else {
    console.log("tuto nezvladnu")           //podminka pro neznak
}


