
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


/////////////////Spravny vysledek ///////////////////////////
// let square = function(a){
//     console.log(`Content square is${" " + a * a + "[x^2]"}`);
// }

// square(5)



/////////////////////////////////////////////////////////

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

////////////////////////////////////

// function rectangle(a,b){
//     if (a == 0 || b == 0){
//         console.log("Incorrect page size");
//     }else if(a > 0 || b > 0){
//         console.log(`Content rectangle is${" " + a * b + "[x^2]"}`);
//     }
// }

// rectangle(1,5)

///////////////////////////////////////////////////////////////////

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