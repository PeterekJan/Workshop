//////////////////////////////////////////////////////

// Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` (číslo musí být větší než 0),
// vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

/////////////////Spravny vysledek ///////////////////////////
let square = function(a){
    console.log(`Content square is${" " + a * a + "[x^2]"}`);
}

square(5)



/////////////////////////////////////////////////////////

// Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
// (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě

function rectangle(a,b){
    if (a == 0 || b == 0){
        console.log("Incorrect page size");
    }else if(a > 0 || b > 0){
        console.log(`Content rectangle is${" " + a * b + "[x^2]"}`);
    }
}

rectangle(1,5)

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
console.log(`The Highest Number is: ${result}`);

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
    // for(var i = 0; i <numbers.length; i++){
    //     console.log(numbers)
    }



sortsArray2(numbers)
console.log(numbers[numbers.length-1])

//////////////////////////////////////////////////////////////

// Vytvořte fci ``calculateGeometry``, která bude mít na vstupu dva parametry ``a`` a ``b``,
// přičemž ``b`` může zůstat prázdné. Tato fce vypočte obsah čtverce nebo obdélníku na základě toho,
// jaká data přijdou z parametrů. Tj, pokud nebude ``b`` vyplněno, jedná se pravděpodobně o čtverec.

function calculateGeometry(a,b){
    if (a == 0 || b == 0){
        console.log("Incorrect page size");
    }else if(a > 0 && b > 0){
        console.log(`Content rectangle is${" " + a * b + "[x^2]"}`);
    }else if(a > 0 || b == null){
        console.log(`Content square is${" " + a * a + "[x^2]"}`);
    }
    
}

calculateGeometry(5,2)