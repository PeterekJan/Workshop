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

    
    
    