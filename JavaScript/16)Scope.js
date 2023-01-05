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
