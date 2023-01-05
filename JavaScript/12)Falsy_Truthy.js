
//FALSY = undefine, 0, "", NaN, Null
//TRUTHY = to, co neni falsy

//undefine

var job;
if (job)
console.log(job);

if(job){
    console.log("Hodonota je true");
} else {
    console.log("Hodnota je false");
}


////////////////////////////0

var salary = 0;
if(salary || salary === 0){   //obejiti aby byla 0 byla True || - nebo
    console.log("Hodnota je true")
} else {
    console.log("Hodnota je false")
}

//////////////// ""

var salary = "";
if(salary){  
    console.log("Hodnota je true")
} else {
    console.log("Hodnota je false")
}

/***************************************************/
var salary = "0";

if (salary == 0){    //tady priradi 0 do string
    console.log(true);
} else {
    console.log(false);
}

var salary = "0";

if (salary === 0){    //tady nedovoli priradit string a number, striktni
    console.log(true);
} else {
    console.log(false);
}


/******************************************************************/
//Funkce s vice parametry (soucet)

var soucet = function(a, b, c){
    return a + b + c;
    }

let value = soucet (20, 30, 5)
    console.log(value);

/////////////////////////////////////////////
//defaultni hodnota

let game = function (name = "Anonymni", score = 0){   //bez = je vychozi hodnota undefine
    console.log(name)
    console.log(score)
}

game("David");
game(undefined,50);
game();

///////////////////////////////////////

let game2 = function (name = "Anonymni", score = 0){   //bez = je vychozi hodnota undefine
    return "Jmeno:" + name + ", Score:" + score
}

let value2 = game2("David", 50);
console.log(value2)

/************************************************************************/


