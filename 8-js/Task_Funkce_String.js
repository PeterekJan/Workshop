// Napište funkci, která bude mít na vstupu 2 argumenty ``name`` a ``age``.
// - Tato funkce na výstupu uživatele pozdraví a spočítá rok, kdy se narodil (nebereme v potaz datum, ale pouze rok)
// -   Vítej ``name``. Narodil ses v roce ``year``.
console.log("--------SayHello---------")

function sayHallo(name, age){
    var today = new Date();
    var year = today.getFullYear() - age
    console.log(`Vitej ${name}. Narodil ses v roce ${year}`)
};

sayHallo("Jan",30)

console.log("--------Contrary---------")
///////////////////////////////////////////////////////////////////
// Napište funkci, jejíž vstupním parametrem bude string a výstupním bude string pozpátku (tj z ``Hello!`` bude ``!olleH``)

function contrary(word){
    var aaa = word.split("")
    var bbb = [];
    for(var i = aaa.length -1; i >= 0; i--){
        bbb.push(aaa[i]);
        //console.log(aaa[i])      
        //console.log("---------konec cyklu------")        
    };
    var word = bbb.join('');
    console.log(word);
    //console.log(`${aaa[5]}${aaa[4]}${aaa[3]}${aaa[2]}${aaa[1]}${aaa[0]}`);
    return       
};
contrary("HELLO!");

console.log("--------Anagram---------")

// 3. Napište funkci, která bude mít na vstupu 2 argumenty.
// Tato funkce ověří, zda jeden string je anagram druhého.
// Pokud ano, vrátí se ``true``, pokud ne, pak se vrátí ``false``

function anagram(a,b){
    var word = a.split('');
    var anagram = b.split('');

word.sort(function(a, b){
    if(a < b){
        return -1
    } else if (b < a){
        return 1
    } else {
        return 0
    };
    
});
anagram.sort(function(a, b){
    if(a < b){
        return -1
    } else if (b < a){
        return 1
    } else {
        return 0
    };
    
});

console.log(word);
console.log(anagram);

if(word.toString() === anagram.toString()){
    return true
//console.log("aaaa");  

}else{
    return false
};
    
//console.log("NNNN")    
//console.log(word.toString())


};
anagram("silent","listen")

// 4. Napište funkci, která bude mít na vstupu 1 argument a zjistí, zda se jedná o palindrom.
// Návratová hodnota bude typu ``Boolean``

console.log("--------Palindrom---------")


function palindrom(any){
    var array = any.split('');
    var newArray = [];
    

    //console.log(array)
for(var i = array.length -1; i >= 0; i--){
    newArray.push(array[i])
}
//console.log(newArray)

if(array.toString() === newArray.toString()){
    //console.log("SAME")
    return true
};
//console.log(newArray.toString())
};
palindrom("aba");

console.log("--------iAmYourFather---------")

// 5. Napiště funkci, která nám do konzole vypíše hezký komentář ve tvaru
// (```I am your father``` je string z předané proměnné pomocí argumentu)
//- String může být libovolně dlouhý (ale řekněme, že max délka může být 20 znaků
//- String bude vždy vystředěn (tzn bude zarovnán na střed) (hint: počet mezer nalevo i napravo je shodný)

function iAmYourFather(any,sign){
    var specialSign = sign;
    var specialSign2 = " " 
    var firstLine = [];
    var firstLine2 = [];
    var secondLine = [];
    var secondLine2 = [];
    var secondLine3 = [];
    var thirdLine = [];



//firstLine
for(var i = 0;i < 25; i++){
    firstLine.push(specialSign)
};

//firstLine2
for(var i = 0;i < any.length; i++){
    firstLine2.push(specialSign)
};



//secondLine, thirdLine
for(var i = 0;i < firstLine.length -2 ; i++){
    secondLine.push(specialSign2)
};
//secondLine2,
for(var i = 0;i < any.length ; i++){
    secondLine2.push(specialSign2)
};
//secondLine3,thirdLine3
for(var i = 0;i < firstLine.length -2 ; i++){
    secondLine3.push(specialSign2)
};


// first line
 var sss = firstLine.concat(firstLine2,firstLine)
 var sss = sss.join('')
 
// second line
secondLine.unshift(specialSign + specialSign)
secondLine3.push(specialSign + specialSign)
var ddd = secondLine.concat(secondLine2,secondLine3)
var ddd = ddd.join('');

//third line
thirdLine = secondLine.concat(any,secondLine3)
var eee = thirdLine.join('');

// //console.log(eee)

console.log(sss)
console.log(ddd)
console.log(eee)
console.log(ddd)
console.log(sss)

// console.log(`firstLine:${firstLine.length}`)
// console.log(`firstLine2:${firstLine2.length}`)
// console.log(`sss:${sss.length}`)
// console.log(`secondLine:${secondLine.length}`)
// console.log(`secondLine2:${secondLine2.length}`)
// console.log(`secondLine3:${secondLine3.length}`)
// console.log(`ddd:${ddd.length}`)
// console.log(`thirdLine:${thirdLine.length}`)
// console.log(`thirdLine2:${thirdLine2.length}`)
// console.log(`thirdLine3:${thirdLine3.length}`)
// console.log(`eee:${eee.length}`)

};

iAmYourFather("aaaaaaaaaaaaaaaaaaaaaaaaaaaa","8")




console.log("--------Yoda---------")
// 7. Napište fci ``yoda``, která bude mít na vstupu proměnnou typu ``string``.
// Tato funkce vezme daný string, a obrátí pořadí slov.
// Tedy na vstupu ``I am your father`` bude na výstupu ``father your am I``

function yoda(a){

var sign = a[a.length-1]

if(a[a.length-1] == '.'||a[a.length-1] == ','||a[a.length-1] == '!'||a[a.length-1] == '?'){
    var withouSign = a.substr(0,a.length-1)
    //var firstLower = withouSign[0].toLowerCase() + withouSign.slice(1)
    //var sentence = firstLower.split(" ")
    var sentence = withouSign.split(" ")
    var yodaSentence = [];
    for(i = sentence.length-1;i >=0; i--){
        yodaSentence.push(sentence[i])
    };
   var yodaSentence2 = yodaSentence.join(" ")
   var yodaSentence3 = yodaSentence2[0].toUpperCase() + yodaSentence2.slice(1) + sign
   
}else{
    //var firstLower = a[0].toLowerCase() + a.slice(1)
    //var sentence = firstLower.split(" ")
    var sentence = a.split(" ")
    var yodaSentence = [];
    for(i = sentence.length-1;i >=0; i--){
        yodaSentence.push(sentence[i])
    };
   var yodaSentence2 = yodaSentence.join(" ")
   var yodaSentence3 = yodaSentence2[0].toUpperCase() + yodaSentence2.slice(1)

}
console.log(yodaSentence3)

// var ccc = yodaSentence.filter(function(any){
//     var weTryfind = any.includes('i')
//     return weTryfind
// });

// console.log(ccc)

};
yoda("I am your father.")




