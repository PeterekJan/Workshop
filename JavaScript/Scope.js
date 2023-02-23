//Scope - rozsah
/****************************************/

//Globalni Scope (prvni)
//Lokalni Scope (druha)

//podrizeny ma pristup nadrazenemu

let prvni ="Prvni text"

if(true){
    console.log(prvni);
    let druha = "Druhy text"
    console.log(druha)

    if(true){
        let treti = "Treti text";
        console.log(treti)
        console.log(druha)
        console.log(prvni)

    }


}


/*******************************************************/
//variable shadowing

//v ramci jednotlivych Scope muzu mit vice stejnych definovanych promennych

let myName = "David";

if(true){
    let myName = "Harry"

    if(true){
        let myName = "Hermiona"
        console.log(myName)
    }
}

if(true){
    console.log(myName)  //vypise z nadrazeneho Scope
}

/*************************************************************/

//Globalni Scope (num1, num2, num3)
//Lokálni Scope (a, b, c)
//Lokalni Scope (myName)

let num1 = 5;
let num2 = 3;
let num3 = 8;

let pristup = function(a, b, c){
    if(a === num1 && b === num2 && c === num3){
        console.log("Entry")
        let myName;
    }else {
        console.log("Spatne");
        }
    }


pristup (5, 3, 8)

/**************************************************/