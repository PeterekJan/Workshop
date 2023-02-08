// Je a neni to cislo

var numberOfpushUpsToday = 34; 

if(!isNaN(numberOfpushUpsToday)){
    console.log('It is a number')
}
else {
    console.log('It is not a number')
}

////////////////////////Vyřazeni čisla////////////////////////////////////////

var numberOfpushUpsToday = 34; 

if(typeof numberOfpushUpsToday === 'number' ){
    console.log(numberOfpushUpsToday)
}
else {
    console.log('It is not a number')
}



//////////////////////////////////////////////////////////////////////////////
var numberOfpushUpsToday = 34; 

if(Number.isFinite(numberOfpushUpsToday) ){
    console.log('It is a number')
}
else {
    console.log('It is not a number')

}

// Globální funkce isFinite()testuje, zda je předaná hodnota konečné číslo.
// Argumenty se v případě potřeby nejprve převedou na čísla.


///////////////////////////////////////////////////////////////////////////////////
    