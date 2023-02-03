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