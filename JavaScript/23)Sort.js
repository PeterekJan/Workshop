var books = [
    {
        title: "Harry Potter a kámen mudrců",
        author: "J. K. Rowlingová",
        published: 1997
    }, {
        title: "Harry Potter a vězeň z Azkabanu",
        author: "J. K. Rowlingová",
        published: 1999
    }, {
        title: "Harry Potter a Tajemná komnata",
        author: "J. K. Rowlingová",
        published: 1998
    }]
    
    
        //razeni bezneho pole
    
        var names = ["Anna", "Cecilie", "Barbora"];
        console.log(names);
        names.sort();
        console.log(names);
    
        var numbers = [1, 8, 3, 2, 15, 5]; //15 se bere jako 1 a za ni nasledujici 5... jakoby desetine cisla
        numbers.sort();
        console.log(numbers);
    
        ///////////////////////////
    
        let sortsArray = function(arrayBooks){   //Univerzalni razeni stringu
            arrayBooks.sort(function(a, b){
                if(a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1
                } else if (b.title.toLowerCase() < a.title.toLowerCase()){
                    return 1
                } else {
                    return 0
                }
            })
        }
    sortsArray(books)
    console.log(books)
    ///////////////////////////////////////////////////////////////
    let sortsArray2 = function(myNumbers){   ///univerzalni razeni cisel
        myNumbers.sort(function(a, b){
            if(a < b){
                return -1
            } else if (b < a){
                return 1
            } else {
                return 0
            }
        })
    }


    sortsArray2(numbers)
    console.log(numbers)


    //////////////////////////////////////////////najdi nejvyšši číslo v poli
    var numbers = [5,15,22,-8,25,358,48,55,98,78,]

var sortsArray3 = function(myNumbers){   ///univerzalni razeni cisel
    myNumbers.sort(function(a, b){
        if(a < b){
            return -1
        } else if (b < a){
            return 1
        } else {
            return 0
        }
        
    })
    }

sortsArray3(numbers)
console.log(numbers[numbers.length-1])


////////////////////////////srovnani cisel do rady///////////////////////////////////

var arr = [3,5,8,15,1,1.6]

    
arr.sort(function (a,b){
        return a - b
    });

console.log(arr)

    
    
    