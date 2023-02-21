var newArray = [-2,-3,-5,-6,8,15,-88,25,101,-95];

newObject = {
    count: newArray.length,
    min: 0,
    max: 0,
    total:0,
    avg: 0,
    modus:[],
    median:0
    
};

function minNum(number){
    var min = number[0];
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element < min){
            min = element
        };
    };
        //console.log(number[0])
        //console.log(element)
    return min;
        
};

var result = minNum(newArray)
//console.log(result)
newObject.min = result

function maxNum(number){
    var max = number[0];
    for(var i = 0;i < number.length; i++){
        var element = number[i];
        if(element > max){
            max = number[i];
        };
    };
    //console.log(number[5]);
    //console.log(element);
    return max;
    
};

var result2 = maxNum(newArray);
//console.log(result2);
newObject.max = result2;


//var result3 = Math.max.apply(null,newArray);
//console.log(result3);

function sum(number){
    var total = 0;
    for(var i = 0; i < number.length; i++){
        total += number[i]

    };
    //console.log(total)
    //console.log(number[1])
    return total
};

var result4 = sum(newArray);
newObject.total = result4
//console.log(sum(newArray))

function total(number){
    var total = 0;
    for(var i = 0;i < number.length; i++ ){
        total += number[i]
    };
    return total;
};
    
function avg(number){
    var avg = 0;
    avg = (total(number)/number.length).toFixed(2)
    avg = Number(avg)

return avg; 
};

var result5 = avg(newArray)
newObject.avg = result5

function sortArray(array){
    array.sort(function(a,b){
        return a - b;
    });
}
        


console.log((sortArray(newArray));



// function medianOdd(number){
//     if(number.length % 2 == 0){

//     }
// }

console.log(newObject)