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


///////////////////////////////////////////////////////////////////////
let muz = true; // nějaká proměnná udávající pohlaví
let nazevPohlavi;
if (muz)
    nazevPohlavi = 'muž';
else
    nazevPohlavi = 'žena';
document.write(nazevPohlavi);

///Ternarni vyraz

let muz = true; // nějaká proměnná udávající pohlaví
let nazevPohlavi = (muz) ? 'muž' : 'žena';
document.write(nazevPohlavi);
////////////////////////////////////////////////////////////////////////////////

if (podmínka) {
    výraz1;
} else {
    výraz2;
}

//////Ternarni zapis

podmínka ? výraz1 : výraz2;

/////////////////////////////////////////////////////////////////////////

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

/////////////////////////////////////////////////////////////////////////

function example() {
    return condition1 ? value1
          : condition2 ? value2
          : condition3 ? value3
          : value4;
  }

  /////////////////////////////////////////////////////
  const score = 45

  const scoreRating =
    score > 70
      ? "Excellent"
      : score > 50
      ? "Average"
      : score > 40
      ? "Fair"
      : "Do better"
  
  console.log(scoreRating)

  ////////////////////////////////////////////////////////////////////////
  


