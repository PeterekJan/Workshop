//Funkce nemusí být vždy tak formálně napsána jako jsme si kukazovali výše v příkladech.
//Anonymní funkce není označována žádným vlastním názvem a zpravidla se k ní přistupuje prostřednictvím proměnné,
// takto:

const f = function(){
    //statements
}

f(); //called function
/////////////////////////////////////////////////////

const o = {
    name: "Anonymous Function",
    invoke: function(){
        return "You called me!"}
}

console.log(o.invoke());

//////////////////////Zkracena verze
const d = {
    name: "Anonymous Function",
    invoke(){
        return "You called me!"}
}

console.log(d.invoke());

////////////////////////////////////////////////////////////////////////////
var deleni = function (a, b){
     return a / b; 
    }

///////////////////////////////////////////////////////////////////

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

///////////////////////////////////////////////////////////////////

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

///////////////////////////////////////////////////////////////////
var sayHi = function() {
    console.log("Hello word");
}

setTimeout(sayHi,2000);


setTimeout(function(){
    console.log("Hello word"); //to same jinak
},2000)

////////////////////////////////////////////////////////////////////////

