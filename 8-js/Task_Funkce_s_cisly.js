// f) Funkce s čísly
//    1. Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` 
//      (číslo musí být větší než 0), vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

function square(a){
    if(a <= 0){
        console.log("Invalid value");
    }else if(typeof a === 'string'){
        console.log("Value can't be string")
    }else{
        console.log(`The result is: ${a * a}`)
    }
   
}
square(2)

console.log("------------square -----------")

/////////////2.Metoda//////////////
// function square(a){
//     a <= 0 ? console.log("Invalid value ") : typeof a === 'string' ? console.log("Value can't be string") : console.log(a*a)
   
//     return

// };
// square("aaaa")


//    2. Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
//       (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě


function rectagle(i,j){
    if(typeof i === 'string' || typeof j === 'string' ){
        console.log("Value can't be string")
    }else if(typeof j === 'undefined'){
        console.log("Value j can't be undefined")
    }else {
        console.log(`Value of rectagle's content is: ${i * j}`)
    }

}

rectagle(2,3)

console.log("--------rectagle------------")

//    3. Vytvořte fci ``highest``, která bude mít na vstupu pole čísel.
//       Úkolem fce bude v tomto poli najít nejvyšší číslo a to vrátit / vypsat do konzole.




function highest(number){
   var max = number[0];
   for(var i = 0; i < number.length; i++){
        var element = number[i]
        if(element > max){
            max = element;
        }
    }
    return max;
}
var arr = [7,88,25,15,5,72,1.6,1,2,8]


console.log(`The highest elemenet is: ${highest(arr)}`)






////////////////////////////////





//    4. Vytvořte fci ``calculateGeometry``, která bude mít na vstupu dva parametry ``a`` a ``b``,
//       přičemž ``b`` může zůstat prázdné. Tato fce vypočte obsah čtverce nebo obdélníku na základě toho, jaká data přijdou z parametrů.
//       Tj, pokud nebude ``b`` vyplněno, jedná se pravděpodobně o čtverec

//    5. Zajistěte, aby všechny geometrické fce bylo možno volat i s hodnotou 0.1 a zároveň aby jako argument akceptovaly pouze číselné typy.
//       Tzn aby nebylo možné zadat "xxx" jako hodnotu

//    6. Napište fci, která bude mít jako vstupní hodnotu pole čísel (reálná čísla). Tato fce vrátí objekt s parametry:
//        - ``count`` - počet prvků
//        - ``min`` - minimální hodnota
//        - ``max`` - maximální hodnota
//        - ``total`` - součet hodnot
//        - ``avg`` - aritmetický průměr
//        - ``modus`` - modus
//        - ``median`` - medián
