var arr = ["a",5,8,15,1,1.6]

    
arr.sort(function (a,b){
    if(typeof a === 'string' || typeof b === 'string'){
        console.log("Value can't be string")
    };
        return a - b
        
    });

    
console.log(`The highest value is: ${arr[arr.length -1]}`)


//jak urcit podminku aby arr neobsahoval string?


var arr = [5,"a",25,15,5,1.6]

    
arr.sort(function (a,b){
    return a - b
        
    });

for(var y = 0; y < arr.length; y++){
    if( typeof arr[y] === 'string' ){
        console.log("Value in array can't be string")
  
    };
};
console.log(`The highest value is: ${arr[arr.length -1]}`)

// //Neumim to lip udelat. Vypise nejvyšší čislo a i chybu

var arr = [5,88,"a",25,15,5,72,1.6,1,2,8]

    
arr.sort(function (a,b){
    return a - b
        
    });


function highest(a,b){
    a = Number(a);
    b = typeof b != "undefined" ? Number(b) :a;

    if(typeof a === 'string' || typeof b === 'string'){
        return "Value in array can't be string"
    }else if(typeof a === 'number'){
        return `The highest value is: ${arr[arr.length -1]}`
    }
}

console.log(arr)
console.log(highest(arr))

// //naozaj nakokot

var arr = [5,88,"a",25,15,5,72,1.6,1,2,8]


function highest(a,b){

    arr.sort(function (a,b){
        return a - b
        });

    a = Number(a);
    b = typeof b != "string" ? Number(b) : a;

    if(typeof a === 'string' || typeof b === 'string'){
        return "Value in array can't be string"
    }else if(typeof a === 'number'){
        return `The highest value is: ${arr[arr.length -1]}`
    };
};

console.log(arr)
console.log(highest(arr))



