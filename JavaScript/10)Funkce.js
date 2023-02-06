
//vypocet veku pomoci console.log//

function calculateAge1(birth){
    console.log(2020 - birth);
}

calculateAge1(2000);
calculateAge1(1990);
calculateAge1(1980);

/////////////////////////////////////////
function calculateAge2(birth){
    return 2020 - birth;
}

var ageDavid = calculateAge2(2000);
var ageJohn = calculateAge2(1990);
var ageDiana = calculateAge2(1980);

console.log(ageDavid,ageJohn,ageDiana)


////////////////////////////////////////////

function calculateAge(birth){
    return 2020 - birth;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0 ){
        console.log("Pocet let do duchodu " + retirement + " let" + " u " + firstName);
    } else {
        retirement = -(retirement);
        console.log(firstName + " je uz v duchodu " + retirement + " let");
    }
    
}

yearsUntilRetirement(2000, "David")
yearsUntilRetirement(1990, "John")
yearsUntilRetirement(1900, "Diana")


///////////////////////////////////////////////////

function pozdrav1(){
    console.log("Tadaa")
}

pozdrav1()
pozdrav1()


let pozdrav2 = function(){ //nejpouzivanejsi
    console.log("Tadaa2")
}

pozdrav2()
pozdrav2()

//************* */

let pozdrav3 = () => console.log("Tada3") //nejpouzivanejsi

pozdrav3()
pozdrav3()
/***************************Parametr a Argument***************************************/

let naDruhou = function(num){
    console.log(num * num)
}


//let naDruhou = (num) => console.log(num * num)  //Jiny zapis stejne funkce

naDruhou (2)





///////////////////////////////////////////

let pozdrav = function(name){
    console.log("Dovi" + name);
}

pozdrav("David")



////////////////////////////////////////
let naDruhou2 = function (number){
    let result = number * number;
    return result;
}

let value1 = naDruhou2(5);


////////////////////////////////////////////////
//funkce s vice parametry
let num1 = 5;
let num2 = 3;
let num3 = 8;

let pristup = function(a, b, c){
    if(a === num1 && b === num2 && c === num3){
        console.log("Entry")
    }else {
        console.log("Spatne");
        }
    }

pristup (5, 3, 9)
pristup (4, 3, 8)
pristup (5, 3, 8)

//////////////////////////////////////////////////////////
function highest2(number){
    var max = number[0];
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var newArray= [22,25,40,60,80,100];
var result = highest2(newArray);
console.log(`The Highest Number is: ${result}`);
///////////////////////////////////////////////////////////////////////
var array = [-5,20,55,88,76,92,106];

function highest(arr) {
    var maxNumber;
    for(var i = 0; i < arr.length; i++){
        if(!maxNumber){ // protect against an array of values less than 0
            maxNumber = arr[i]
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
console.log(highest(array));
///////////////////////////////////////////////////////////////////////////
// Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
// (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě

function rectangle(a,b){
    if (a == 0 || b == 0){
        console.log("Incorrect page size");
    }else if(a > 0 || b > 0){
        console.log(`Content rectangle is${" " + a * b + "[x^2]"}`);
    }
}

rectangle(1,5)

///////////////////////////////////////////////////////////
// Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` (číslo musí být větší než 0),
// vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

/////////////////Spravny vysledek ///////////////////////////
let square = function(a){
    console.log(`Content square is${" " + a * a + "[x^2]"}`);
}

square(5)
///////////////////////////////////////////////////////////////////////////////





