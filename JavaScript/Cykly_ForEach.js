// Firstly, to loop through an array by using the forEach method,
// you need a callback function (or anonymous function):

// numbers.forEach(function() {
//     // code
// });

// The function will be executed for every single element of the array.
// It must take at least one parameter which represents the elements of an array:

// numbers.forEach(function(number) {
//     console.log(number);
// });

///////////////////////////////////////////////////////// vypise hodnoty string z pole
// let students = ['John', 'Sara', 'Jack'];

// using forEach
// students.forEach(myFunction);

// function myFunction(item) {

//     console.log(item);
// }
/////////////////////////////

// var total = 0;
// var cart = [5,6,7,8,9];

// function checkOut(element, index, array){ //index vypise cislo indexu

//     total += element;

// }

// cart.forEach(checkOut);

// console.log("Your total is $" +total)

//////////////////////////////////////////////////////////////////////////////

// var numbers = [1,2,3,4,5]
// var sum = 0;

// numbers.forEach(consoleItem);

// function consoleItem(item, index, arr){
//     console.log('a[' + index + '] = ' + item )
//     console.log(arr)
    
//     sum += item;
// }
// console.log(sum)

//////////////////////////vypis počtu vyskytu v poli = počet vypisu podle počtu elementu v poli////////////////////////////

var letters = ["a", "b", "b", "d", "x", "b"]
var count = {}; //vypise do objektu nebo do [];
letters.forEach(consoleItem);

function consoleItem(item, index, arr){
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    };
};
console.log(count)









