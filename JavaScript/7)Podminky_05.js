
/*Do proměnné password uložte libovolné heslo.

Pokud bude mít heslo více jak 13 znaků, tak vypište "Velmi silné heslo".
Pokud bude mít mezi 8 až 13 (včetně), tak vypište "Silné heslo".
Pokud méně než 8, tak vypište "Slabé heslo".

Zjistěte, zda heslo obsahuje znaky 1234 v tomto pořadí.
Pokud ano, tak se vypíše do konzole "Heslo nesmí obsahovat 1234".
Jinak se vypíše "Heslo je v pořádku".
*/

let password = "1234admin"

//kontrola delky
if(password.length> 13){
    console.log("Velmi silne heslo");
}else if(password.length >= 8 && password.length <= 13){
    console.log("Silne heslo");
}else{
    console.log("Slabe heslo");
}

//neobsahuje 1234

if(password.includes("1234")){
    console.log("heslo nesmi obsahovat 1234")
}else{
    console.log("Heslo je v pořádku")
}


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