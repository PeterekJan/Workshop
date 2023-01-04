var employees = ["David", "Jane", "Diana"];
// var employees = new Array("David", "Jane", "Diana");   //stary zapis pole
console.log(employees);
console.log(employees[0]);  // 0 je index
console.log(employees[1]);
console.log(employees[2]);

var age = [30, 20, 40];

console.log(age[0]);
console.log(age[1]);
console.log(age[2]);

var david = ["David", "Setek", 33, 1980, true]

/*********************2x empty v array a jejich vymena**************************/
var employees = ["David", "Jane", "Diana"];
employees[0] = "Martin";
employees[1] = "Anna";
employees[5] = "Eduard";

console.log(employees)

/*********************************************/
var employees = ["David", "Jane", "Diana"];

employees.push("John");  //push Joshn do konce array
employees.push("John2");  
employees.unshift("Albert"); // pridani Alberta na 0 pozici v array

employees.pop(); // odebrani posledniho z Array
employees.shift(); // odebrani prvniho z Array, a prepise to index


console.log(employees)

/***********************************/

var employees = ["David", "Jane", "Diana", "Martina", "Eduard"];

    console.log(employees.indexOf("David"));   //vypis indexu do console, ale jen prvni
    console.log(employees.indexOf("Eduard"));
    console.log(employees.indexOf("Natalie")); //kdyz nenajde v poli dany prvek, vypise -1

    console.log(employees.length);  //vypis poctu hodnot v Array

    console.log(employees[employees.length-1]); // vypis posledniho clena v Array

    
/**********************************************/


