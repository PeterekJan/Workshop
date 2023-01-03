
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


