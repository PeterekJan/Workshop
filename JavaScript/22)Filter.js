var books = [
    {
        title: "Henry 01",
        author: "JKR",
        published: 1997
    },
    {
        title: "Henry 02",
        author: "JKR",
        published: 1998
    },
    {
        title: "Henry 03",
        author: "JKR",
        published: 1999
    }];

//filtrovani na beznem poli

var names = ["jana", "anna", "Nada", "David"]

//najdi vse s "na"

var arrayResults = names.filter(function(oneName){
    var weTryFind = oneName.toLowerCase().includes("na")
    return weTryFind
})

console.log(arrayResults)

///////////////////////////////

//filtrovani na poli objektu
var results2 = books.filter(function(oneBook){
    var weTryFind2 = oneBook.author.toLowerCase().includes("k")
    var weTryFind3 = oneBook.title.toLowerCase().includes("0") //hledani ve dvou zaroven, 
    return weTryFind2 || weTryFind3 //nebo hledej v titlu
});
results2.forEach(function(oneResult){       //vypis vseho co obsahuje autor "k", tak vypise title.
    console.log(oneResult.title)
})

//console.log(results2) 


//////////////////////////

// Úkol
// Svědek viděl z místa vraždy odjíždět auto.
// Ví jen to, že poznávací značka obsahovala 22.
// Vaším úkolem je v níže uvedené databázi kriminálníků najít ty, kteří mají v poznávací značce 22.
// Jejich veškeré údaje následně vypište do konzole. Např. takto:

// Jméno: Martin
// Příjmení: Zelený
// Rok narození: 1985
// atd.

// To, co hledáte (v našem případě 22), bude zadáno pomocí promptu. Použijete tedy:
// prompt(). Do něj zadáte 22.

var criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}];

var witness = prompt();

var arrayResults = criminals.filter(function(oneSuspect){
    var tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
    return tryToFind
});

arrayResults.forEach(function(oneSuspect){
    
    console.log(`Jmeno:${oneSuspect.firstName}`)
    console.log(`Prijmeni:${oneSuspect.secondName}`)
    console.log(`Rok narozeni:${oneSuspect.birth}`)
    console.log(`SPZ:${oneSuspect.licencePlate}`)
    console.log(`Adresa:${oneSuspect.address}`)
    console.log(`Mesto:${oneSuspect.city}`)
    console.log(`-----------------------------`)
});

/////////////////////////////////////////////////////////////





