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
let muz_ = true; // nějaká proměnná udávající pohlaví
let nazevPohlavi_;
if (muz_)
    nazevPohlavi_ = 'muž';
else
    nazevPohlavi_ = 'žena';
document.write(nazevPohlavi_);

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
  
function checkWinner (win){

win ? console.log("You win!") : console.log("You lose")

}

checkWinner(true)

//////////////////////////////////////////////////////////////////


function checkAge(age){

    return age >= 21 ? "you get beer!" : "you get juice"
    }
    console.log(checkAge(17));


/////////////////////////////////////////////

number >= 50 ? "Not to fifty!" : "It could be worse"

if(number === 0){
    result = "You have nothing"
}else if( number < 10) {
    result = "You have very little"
}else{
    result = "You have a lot"
}
//////////////////Stejny zapis
result = number === 0 ? "You have nothing" : (
    number < 10 ? "You have very little" : "You have a lot"
)

console.log(result);

////////////////////////////////////////////////////////////////////////////////

var num = 5;
var result;

// if(num % 2 === 0)
//     result = "Even"
// else
//     result = "Odd"


    result = num % 2 === 0 ? "Even" : "Odd"

console.log(result)

///////////////////////////////////////////////////////////////////////////////////

