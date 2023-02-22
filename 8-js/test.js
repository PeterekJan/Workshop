var newArray = [-2,-3,-5,-6,8,15,15,-88,101,-95,10,1,5,5,5,4,18];

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
            min = element;
        };
    };
        //console.log(number[0]);
        //console.log(element);
    return min;
        
};

var result = minNum(newArray);
//console.log(result)
newObject.min = result;

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
        total += number[i];

    };
    //console.log(total);
    //console.log(number[1]);
    return total;
};

var result4 = sum(newArray);
newObject.total = result4;
//console.log(sum(newArray));

function total(number){
    var total = 0;
    for(var i = 0;i < number.length; i++ ){
        total += number[i];
    };
    return total;
};
    
function avg(number){
    var avg = 0;
    avg = (total(number)/number.length).toFixed(2);
    avg = Number(avg);

return avg; 
};

var result5 = avg(newArray);
newObject.avg = result5;


function sorting(array){
    array.sort(function(a, b){
        if(a < b){
            return -1;
        } else if (b < a){
            return 1;
        } else {
            return 0;
        };
        
    });
     
};

var sortedArray = newArray.slice();

sorting(sortedArray)

console.log(`sortedArray ${sortedArray}`)
//console.log(`newArray ${newArray}`)


// function modus(array){

// }


var empty = []
i = 0
max = 0
while (i<sortedArray.length){

   if (sortedArray[i]==sortedArray[i+1]){
       empty = sortedArray[i] 
   i += 1
    }else{
      i +=1
      }

 }
 
 console.log(empty)





function median(array){
    var median = 0;
    if(array.length % 2 !== 0){
        var median = array[(Math.floor((array.length)/2))]
    }else{
        var evenMedian = array[((array.length)/2) - 1]
        var evenMedian2 = array[((array.length)/2) ]
        var median = (evenMedian + evenMedian2)/2
        //var median = array[2]
        
    };
        //console.log(evenMedian2)

    return median;
      
};

//median(sortedArray);
newObject.median = median(sortedArray)
//console.log(median(sortedArray))




console.log(newObject)