
//vypocet veku pomoci console.log//

function calculateAge1(birth){
    console.log(2020 - birth);
}

calculateAge1(2000);
calculateAge1(1990);
calculateAge1(1980);

/////////////////////////////////////////
function calculateAge2(birth){
    return 2020 - birth;
}

var ageDavid = calculateAge2(2000);
var ageJohn = calculateAge2(1990);
var ageDiana = calculateAge2(1980);

console.log(ageDavid,ageJohn,ageDiana)


////////////////////////////////////////////

function calculateAge(birth){
    return 2020 - birth;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0 ){
        console.log("Pocet let do duchodu " + retirement + " let" + " u " + firstName);
    } else {
        retirement = -(retirement);
        console.log(firstName + " je uz v duchodu " + retirement + " let");
    }
    
}

yearsUntilRetirement(2000, "David")
yearsUntilRetirement(1990, "John")
yearsUntilRetirement(1900, "Diana")
