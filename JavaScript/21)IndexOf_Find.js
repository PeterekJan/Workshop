var employees = ["David", "Marek", "Jana"];
console.log(employees.indexOf("David"))   //vypis daneho prvku v pozici

console.log(employees.indexOf("Dalibor")) //-1 je nepravda

if(employees.indexOf("David") === -1){
    console.log("Uzivatel nebyl nalezen")
}else {
    console.log("Uzivatel byl nalezen")
};


///////////////////////////////////indexOf nefunguje na pole objektu /////////////////////////
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
    
    //findIndex na beznem poli
    var array1 = [8, 11, 8, 20, 39]
    
    var result = array1.findIndex(function(number){ //vrati prvni moznou
        return number > 15
    })
    
    console.log(result)
    
    //////////////////////// findIndex pro pole objektu
    
    var result2 = books.findIndex(function(oneBook){
        return oneBook.published === 1998
    })
    console.log(result2)


    ///////////////////////////////////////////////////////////////

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
    
        //find a bezne pole
    
        var myArray = [1, 3, 20, 2, 8]
    
        var result = myArray.find(function(oneNumber){
            return oneNumber > 4
        })
    
        console.log(result);
    
        //find a pole objektu ... vybere pouze prvni shodny prvek
    
        var result2 = books.find(function(oneBook){
            if (oneBook.published === 1999){
                return oneBook
            }
        })
        console.log(result2.title) //chceme vytahnout jen title

        /////////////////////////////////////////////////////////////

    