var newArray = [3,10,0.1,0.1,15,88,101,88,72,88,-5];

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
        var min = 0;
        for(var i = 0;i < newArray.length; i++){
            var element = number[i];
            if(element < min){
                min = number[i]
            };
        };
        //console.log(number[1])
        //console.log(element)
        return min;
        
    };

var result = minNum(newArray)
//console.log(result)
newObject.min = result

function maxNum(number){
    var max = 0;
    for(var i = 0;i < newArray.length; i++){
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

function summary(newArray){
    var total = 0;
    for(var i = 0;i < newArray.length; i++){
        
    }
}

    
   



console.log(newObject)






