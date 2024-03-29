//////////////////////////////////////////////////////

// Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` (číslo musí být větší než 0),
// vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

var square = function(a){
    if (typeof a === 'number' )
        console.log(`Content square is${" " + (a * a).toFixed(2) + "[x^2]"}`);
    else {
        console.log(`Inccorect value`)
    }
    }
    
    square(0.1)

/////////////////////////////////////////////////////////

// Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
// (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě

function rectangle(a,b){
    if(isNaN(a)){
        console.log("Incorrect value");
    }else if(isNaN(b)){
            console.log("Incorrect value");
    }else if (a == 0 || b == 0){
        console.log("Incorrect page size");
    }else if(a > 0 || b > 0){
        console.log(`Content rectangle is${" " + ((a * b).toFixed(2)) + "[x^2]"}`);
    }
}

rectangle(0.1,0.1)

///////////////////////////////////////////////////////////////////

// Vytvořte fci ``highest``, která bude mít na vstupu pole čísel.
// Úkolem fce bude v tomto poli najít nejvyšší číslo a to vrátit / vypsat do konzole.

var array = [-5,20,55,88,76,92,106];

function highest(arr) {
    var maxNumber;
    for(var i = 0; i < arr.length; i++){
        if(!maxNumber){ // protect against an array of values less than 0
            maxNumber = arr[i]
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
console.log(highest(array));

////////////////////////////2.WAY//////////////////////////////////////

function highest2(number){
    var max = number[0];
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var newArray= [22,25,40,60,80,100];
var result = highest2(newArray);
console.log(`The highest number is: ${result}`);

/////////////////////Sort of metod////////////////////////

var numbers = [5,15,22,-8,25,358,48,55,98,78,]

var sortsArray2 = function(myNumbers){   ///univerzalni razeni cisel
    myNumbers.sort(function(a, b){
        if(a < b){
            return -1
        } else if (b < a){
            return 1
        } else {
            return 0
        }
        
    })
    }

sortsArray2(numbers)
console.log(numbers[numbers.length-1])


//////////////////////highest s validaci/////////////////

function highest(arr) {
    // Filter array, if NaN found, return error
    if(arr.filter(function(item) { return isNaN(item) }).length > 0) {
      console.log("Error, string found");
      return null;
    } 
    
    // Sort descendent
    arr.sort(function(a, b){return b - a})
    console.log((arr))
    
    // Return first index of array
    return arr[0];
    
  }
  
  var arr = [5,9.5,15,-6,1];
  
  // take first number from array as highest
  
  console.log("Highest: " + highest(arr));

///////////////////////////Srozumitelnejsi reseni///////////////////////////////////

function highestSimple(arr) {
  
    // 1. check if all are numbers (optional)
    for(i=0;i<arr.length;i++) {
      if(isNaN(arr[i])) {
        console.log("Error `" + arr[i] + "` is NaN");
        return null;
      }
      
      // (optional) set all to numbers
      arr[i] = Number(arr[i]);
    }
    
    // look for highest number
    var highest = null;
    
    for(i=0;i<arr.length;i++) {
      
      // if current number is higher that temp highest, replace value
      if(highest == null || highest < arr[i]) {
        highest = arr[i];
      }
    }
    
    // return highest
    return highest;
  }
  
  
  var arr = [5,9.5,15,-6, "150"];
  
  // take first number from array as highest
  console.log("Highest simple: " + highestSimple(arr));

// Vytvořte fci ``calculateGeometry``, která bude mít na vstupu dva parametry ``a`` a ``b``,
// přičemž ``b`` může zůstat prázdné. Tato fce vypočte obsah čtverce nebo obdélníku na základě toho,
// jaká data přijdou z parametrů. Tj, pokud nebude ``b`` vyplněno, jedná se pravděpodobně o čtverec.

function calculateGeometry(a,b){
    if (a == 0 || b == 0){
        console.log("Incorrect page size");
    }else if (typeof a === 'string' ){
        console.log(`Incorrect value. Value "a" can't be string`);
    }else if (typeof b === 'string' ){
        console.log(`Incorrect value. Value "b" can't be string`);
    }else if(a > 0 && b > 0){
        console.log(`Content rectangle is${" " + (a * b).toFixed(2) + "[x^2]"}`);
    }else if(a > 0 || b == undefined){
        console.log(`Content square is${" " + (a * a).toFixed(2) + "[x^2]"}`);
        
    }
    
}

calculateGeometry("aaa")