var employees = ["David", "Martin", "Jana"];

console.log(employees);
console.log(employees[2])

var data = ["anna",12, true, false, 13.5]; //muze obsahovat vsechny data type
//delka pole
console.log(data.length)

//////////////////////////////////////////////////////
var testArray = ["test1", "test2","test3",];
testArray[2] = "novy prvek v poli"; //zapis noveho prvku na 0. pozici

//pridani posledniho prvku
testArray.push("Ctiry");  //vzdy prida na konec

//odstraneni prvku
testArray.pop(); //nemusis vypisovat posledni clen

//pridani prvniho prvku
testArray.unshift("zeleny");

//odstraneni prvniho prvku
testArray.shift()


/////////////////////////////////////

var mySecondArray = ["Jedna", "Dva", "Tri"];
mySecondArray.splice(1,2); //zacni na pozici 1 a odstran 2 prvky.

var myThirdArray = ["Jedna", "Dva", "Tri"];
myThirdArray.splice(2, 0, "Osm")  //zacni na pozici 2., 0 vymaz. a pak pridej "Osm".


///////////////////////////////////////////////////

//var firstName = prompt("Zadej jmeno")


var myArray = [];
for(i = 0; i < 3; i++){
    myArray.push(prompt("prijde jmeno"));
};

for(y = 0; y < 3; y++){
    myArray.unshift(prompt("pridej na zacatek"));
};

console.log(myArray);
///////////////////////////////////////////////////////


