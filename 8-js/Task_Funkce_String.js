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




