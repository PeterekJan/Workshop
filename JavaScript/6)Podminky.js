var ageDavid = 35;
var ageJana = 20;

if (-3 > 0){
    //posminka je true
    console.log("TRUE")
} else {
    //podminka je false
    console.log("FALSE")

}

/******************bez podminky stejneho cisla*/

if (ageDavid > ageJana){
    console.log("David je starsi nez Jana");
    } else {
        console.log("Jana je starsi nez David");
    }

    
    /***********************************else*/
    
    var age = prompt("Kolik je ti let?");

    if (age >=18){
        console.log("jsi plnolety. Vstup!")
    } else {
        console.log("jeste ti nebylo 18. Nevstupuj!")
    }

    /*********************************else if*/


    var ageDavid = 15;
var ageJana = 20;

if (ageDavid > ageJana){
    console.log("David je starsi nez Jana");
} else if (ageDavid < ageJana ){
    console.log("David je mladsi nez Jana")
} else if (ageDavid == ageJana){   //Lze zapsat i jen jako else bez if a podminky (protoze treti podminka nastane automaticky)
    console.log("David i Jana jsou stejne staří")
}
    




