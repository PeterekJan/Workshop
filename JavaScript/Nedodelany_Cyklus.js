var vysledek = 0;
function hod(){
    for(var i = 0; i < 6; i++){
        function jednotlivyHod(){
            for(var j = 0; j < 20; j++){
                var number = Math.ceil(Math.random() * 6);
                return number}}
        var result = jednotlivyHod();
        vysledek = vysledek + result;
   
}
}
        console.log(`Soucet je ${vysledek}`) 

hod();
if(vysledek >= 25){
    console.log(`Vitez,`);
}else{
    console.log("Zkus Znova");
}
