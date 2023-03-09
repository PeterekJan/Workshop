// Jde napřimo porovnavat dva prvky v arr? nebo to musom vzdy prevest?
// (arr[1]=== arr[2])???
// (arr[i]=== arr[j])???



//jak vypsat do konzole jednotlive promene z funkci? sortedArr






// var arr = [5,-10,'a','5']

// function validate(...num) {
//     var result = true;

//     for(var i = 0; i < num.length; i++) {
//         var value = num[i];
//         if(typeof value === 'string') {
//             result = false;
//             break;
//         }
        
//     }
//     return result
// }

// validate()



// var aaa = [25]

// aaa = forEach(aaa)




// console.log(aaa)


// var numbers = [1,2,3,4,5]
// var sum = 0;

// numbers.forEach(consoleItem);

// function consoleItem(item, index, arr){
//     console.log('a[' + index + '] = ' + item )
//     console.log(arr)
    
//     sum += item;
// }
// console.log(sum)


var total = 0;
var cart = [5,6,7,8,9];

function checkOut(element){ //index vypise cislo indexu

    total = element;

}

cart.forEach(checkOut);

console.log("Your total is $" +total)


