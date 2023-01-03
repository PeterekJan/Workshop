//var ageDavid = 10;
// if (ageDavid >= 18){
//     console.log("David je plnolety");
// } else {
//     console.log("David je mladistvy")
// }


/*************Ternarni Operator - Zapsani podminky jinak********************/
//var ageDavid = 10;
//ageDavid >= 18 ? console.log("David je plnolety") : console.log("David je mladistvy"); //prvni se pise TRUE : FALSE


/*****************************************************************/

var ageDavid = 10;
if (ageDavid >= 18){
    var drink = "pivo";
} else {
    var drink = "voda";
}

var drink = ageDavid >= 18 ? "pivo" : "voda";  //ternalni zapis
console.log(drink);