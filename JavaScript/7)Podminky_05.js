
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