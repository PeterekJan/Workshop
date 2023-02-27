// Napište funkci, která bude mít na vstupu 2 argumenty ``name`` a ``age``.
// - Tato funkce na výstupu uživatele pozdraví a spočítá rok, kdy se narodil (nebereme v potaz datum, ale pouze rok)
// -   Vítej ``name``. Narodil ses v roce ``year``.

function sayHallo(name, age){
    var today = new Date();
    var year = today.getFullYear() - age
    console.log(`Vitej ${name}. Narodil ses v roce ${year}`)
};

sayHallo("Jan",30)

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

function anagram(a,b){
    var word = a.split('');
    var anagram = b.split('');
    var aa = [];
    var bb = [];
for(var i = 0;i < a.length;i++ ){
    //console.log(word[i])
    //console.log(anagram[i])
    aa.push(word[i]);
    bb.push(anagram[i]);
    };
    console.log(aa)
    console.log(bb)

if(word[i] === anagram[i]){
    console.log("TADAA")
}





};
anagram("silent","listen")


