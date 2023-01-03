var pet = "dog";

switch(pet){
    case "cat":
        console.log("Mame kočku");
        break;                      
    case "dog":
        console.log("Mame psa");
        break;                      //bez Break se nepreruši a vypise vše po splnění podminky
    case "fish":
        console.log("Mame rybicky");
        break;
    default:
        console.log("Mame neco jineho");
}


/*****************************************************/

// var ageDavid = 20;


// if (ageDavid >= 18){
//     console.log("David je dospely");
// } else if (ageDavid <= 18 && ageDavid >= 8) {
//     console.log("david je mladistvy");
// } else {
//     console.log("David je ditě");
// }



var ageDavid = 20;

switch(true){                               // aby to fungovalo musi byt true, jinak to hleda stejne znaky a ne podminky
    case ageDavid >= 18:
        console.log("David je dospely");
        break;
    case ageDavid <= 18 && ageDavid >= 8:
        console.log("david je mladistvy");
        break;
    default:
        console.log("David je ditě");
}



