
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



