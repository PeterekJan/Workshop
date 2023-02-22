var numbers = [5,15,22,-8,25,358,48,55,98,78,]

function sortsArray3(myNumbers){   ///univerzalni razeni cisel
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





console.log(numbers)
// console.log(numbers[numbers.length-1])