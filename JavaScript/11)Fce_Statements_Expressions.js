//Funsction statements
// function calculateAge(birth){
//     return 2020 - birth;
// }


/*********Function expression*/

// console.log(calculateAge(2000));
// var calculateAge = function(birth){
//     return 2020 - birth;
// }

// console.log(calculateAge(2000));


var myJob = function(job, firstName){
    switch(job){
        case "ucitel":
            return firstName + " je " + job; //u return nemusi byt break 
        case "manager":
            return firstName + " je " + job;
        default:
            return "Nevím, co má " + firstName + " za praci. ";
    }
}

console.log(myJob("ucitel", "David"));
console.log(myJob("manager", "Jane"));
console.log(myJob("truhlar", "John"));