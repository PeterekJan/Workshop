
// // Define function
// function greetings(name) {
//     console.log(name +": Hello there!");
// }

// Call function right when cli command is called
//greetings("General Kenobi");

//////////////////////////////////////////////////////

// Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` (číslo musí být větší než 0),
// vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

// var a = 5;
// var square = a * a;


// function content(square){
//     if(a == 0){
//         console.log("nulou nepodelis");
//     }else if(a > 0){
//         console.log(`Content square is${square}`);
//     }
// }
// content( `${" " + square + "[x^2]"}`)


/////////////////Spravny vysledek /////////////////////////////////////////////////
// var square = function(a){
// if (typeof a === 'number' )
//     console.log(`Content square is${" " + (a * a).toFixed(2) + "[x^2]"}`);
// else {
//     console.log(`Inccorect value`)
// }
// }

// square(0.1)
//////////////////////////////////////////////////////////////////////////////////////

// Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
// (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě

// var a = 1;
// var b = 1;

// function content2(rectagle){
//     if (a == 0 || b == 0){
//         console.log("Incorrect page size");
//     }else if(a > 0 || b > 0){
//         console.log(`Content square is${" " + a * b + "[x^2]"}`);
//     }
// }
// content2();

/////////////////Spravy vysledek //////////////////////////////////////////////////////

// function rectangle(a,b){
//     if(isNaN(a)){
//         console.log("Incorrect value");
//     }else if(isNaN(b)){
//             console.log("Incorrect value");
//     }else if (a == 0 || b == 0){
//         console.log("Incorrect page size");
//     }else if(a > 0 || b > 0){
//         console.log(`Content rectangle is${" " + ((a * b).toFixed(2)) + "[x^2]"}`);
//     }
// }

// rectangle(0.1,0.1)

//////////////////////////////////////////////////////////////////////////////////////

// Vytvořte fci ``highest``, která bude mít na vstupu pole čísel.
// Úkolem fce bude v tomto poli najít nejvyšší číslo a to vrátit / vypsat do konzole.

// var newArray = [1,50,15,36,58,14,16,8,7,33,0,-88]

// let highest = Math.max.apply(null, newArray)
// let min = Math.min.apply(null, newArray)
// console.log(highest)
// console.log(min)

// ////////Second Way//////////////

// let highest2 = newArray.reduce(function(a, b) {
//     return Math.max(a, b);
// });

// console.log(highest2)

///////////next choice///////

// let max = testArray[0];
// for (let i = 1; i < testArray.length; ++i) {
//   if (testArray[i] > max) {
//     max = testArray[i];
//   }
// }

// max(1,2,3,4,5,6)




////////////////////////funguje////////////////////////
// var max = array => array && array.length ? array.reduce((max, current) => current > max ? current : max) : undefined;

// console.log(max([-1, 0, 3, 100, 99, 2, 99]));

////////////////////////////////////////////////

// var array = [-5,20,55,88,76,92,106];

// function highest(arr) {
//     var maxNumber;
//     for(var i = 0; i < arr.length; i++){
//         if(!maxNumber){ // protect against an array of values less than 0
//             maxNumber = arr[i]
//         }
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber
// }
// console.log(highest(array));

/////////////////////////////////////////////////

// function highest(number){
//     var max = number[0];
//     for(var i = 0; i < number.length; i++){
//         var element = number[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// var newArray= [22,25,40,60,80,100];
// var result = highest(newArray);
// console.log(`The Highest Number is: ${result}`);


//////////////////////////////////////////////////
// var numbers = [5,15,22,-8,25,358,48,55,98,78,]

// var sortsArray2 = function(myNumbers){   ///univerzalni razeni cisel
//     myNumbers.sort(function(a, b){
//         if(a < b){
//             return -1
//         } else if (b < a){
//             return 1
//         } else {
//             return 0
//         }
        
//     })
//     }

// sortsArray2(numbers)
// console.log(numbers[numbers.length-1])




//////////////////////////////////////////////////////////////

// Vytvořte fci ``calculateGeometry``, která bude mít na vstupu dva parametry ``a`` a ``b``,
// přičemž ``b`` může zůstat prázdné. Tato fce vypočte obsah čtverce nebo obdélníku na základě toho,
// jaká data přijdou z parametrů. Tj, pokud nebude ``b`` vyplněno, jedná se pravděpodobně o čtverec.

// var a = 55;
// var b = 15;

// function calculateGeometry(rectagleAndSquare){
//     if (a == 0 && b == 0){
//         console.log("Incorrect page size");
//     }else if (a > 0 && b == 0){
//         console.log(`Content square is${" " + a * a + "[x^2]"}`);
//     }else if(a == 0 && b > 0){
//         console.log(`Content square is${" " + b * b + "[x^2]"}`);
//     }else if (a > 0 && b > 0){
//         console.log(`Content rectagle is${" " + a * b + "[x^2]"}`);
//     }
// }
// calculateGeometry();
/////////////////////////////////////////////////////////////////////////////////////////////


// function calculateGeometry(a,b){
//     if (a == 0 || b == 0){
//         console.log("Incorrect page size");
//     }else if (typeof a === 'string' ){
//         console.log(`Incorrect value. Value "a" can't be string`);
//     }else if (typeof b === 'string' ){
//         console.log(`Incorrect value. Value "b" can't be string`);
//     }else if(a > 0 && b > 0){
//         console.log(`Content rectangle is${" " + (a * b).toFixed(2) + "[x^2]"}`);
//     }else if(a > 0 || b == undefined){
//         console.log(`Content square is${" " + (a * a).toFixed(2) + "[x^2]"}`);
        
//     }
    
// }

// calculateGeometry("aaa")

// 12. Napište fci, která bude mít jako vstupní hodnotu pole čísel (reálná čísla).
// Tato fce vrátí objekt s parametry:
//     - ``count`` - počet prvků
//     - ``min`` - minimální hodnota
//     - ``max`` - maximální hodnota
//     - ``total`` - součet hodnot
//     - ``avg`` - aritmetický průměr
//     - ``modus`` - modus
//     - ``median`` - medián




var array = realNumbers ([6,2,1.2,10,2,101,8,6,15,3,6,1,1,500,1.2])


function realNumbers(array){
var object = {
     count: array.length,
     min:null,
     max: null,
     total:0,
     avg:0,
     modus:[],
     median:0   
};

function minimal(number){
  var min = number[0];
  for(var i = 0; i < number.length;i++){
      var element = number[i];
      if(element < min){
          min = element;
      }
  }
  return min;
}
  //console.log(min);
  var result = minimal(array);
  //console.log(result);
  object.min = result;

object.max = Math.max.apply(null,array)

var total = 0;       
  for(var j = 0; j <array.length; j++){
      total += array[j];
}
//console.log(total)
object.total = Number(total.toFixed(2))

var number2 = 0;
for(var k = 0; k <array.length; k++){
  number2 += array[k];
  avg = (number2/array.length)
}
//console.log(avg)

object.avg = Number(avg.toFixed(2))


// var mode = function(arr) {  //jen pro jedno cislo !
//     var mode = {};
//     var max = 0;
//     var count = 0;

//     for(var i = 0; i < arr.length; i++) {
//         var item = arr[i];
    
//       if(mode[item]) {
//         mode[item]++;
//       } else {
//         mode[item] = 1;
//       }
    
//       if(count < mode[item]) {
//         max = item;
//         count = mode[item];
//       }
//     }
   
//     return max;
//   };

//   var newArray = [];
//     newArray = mode(array)

//     object.modus = newArray



function getMode(array) {
  var frequency = []; // array of frequency.
  var maxFreq = 0; // holds the max frequency.
  var modes = [];
  for (var i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
    if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[array[i]]; // update max.
    };
  };
  for (var k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    };
  };
  return modes;
};

  var newArray = [];
  newArray = getMode(array).sort()
  object.modus = newArray




var sortedArray = array.sort(function(a,b){
  return a - b;
});

//console.log(sortedArray)
//console.log(sortedArray.length)


if(sortedArray.length % 2 != 0){
      var odd = Math.floor(sortedArray.length / 2)
      object.median = (`${sortedArray[odd]}, Count of elements in array is odd`);
}else if(sortedArray.length % 2 == 0){
      var even = (sortedArray.length/2);
      var middle = sortedArray[even-1];  // 0 index
      var middle2 = sortedArray[even];    
      object.median = (`${(middle + middle2)/2}, Count of elements in array is even`);
}


//console.log(sortedArray)
//console.log(object.median)







console.log(object)
};



