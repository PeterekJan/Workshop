// var newArray = [-2,-3,-5,-6,8,15,15,-88,101,-95,10,1,5,5,5,4,18];

// newObject = {
//     count: newArray.length,
//     min: 0,
//     max: 0,
//     total:0,
//     avg: 0,
//     modus:[],
//     median:0
    
// };

// function minNum(number){
//     var min = number[0];
//     for(var i = 0; i < number.length; i++){
//         var element = number[i];
//         if(element < min){
//             min = element;
//         };
//     };
//         //console.log(number[0]);
//         //console.log(element);
//     return min;
        
// };

// var result = minNum(newArray);
// //console.log(result)
// newObject.min = result;

// function maxNum(number){
//     var max = number[0];
//     for(var i = 0;i < number.length; i++){
//         var element = number[i];
//         if(element > max){
//             max = number[i];
//         };
//     };
//     //console.log(number[5]);
//     //console.log(element);
//     return max;
    
// };

// var result2 = maxNum(newArray);
// //console.log(result2);
// newObject.max = result2;


// //var result3 = Math.max.apply(null,newArray);
// //console.log(result3);

// function sum(number){
//     var total = 0;
//     for(var i = 0; i < number.length; i++){
//         total += number[i];

//     };
//     //console.log(total);
//     //console.log(number[1]);
//     return total;
// };

// var result4 = sum(newArray);
// newObject.total = result4;
// //console.log(sum(newArray));

// function total(number){
//     var total = 0;
//     for(var i = 0;i < number.length; i++ ){
//         total += number[i];
//     };
//     return total;
// };
    
// function avg(number){
//     var avg = 0;
//     avg = (total(number)/number.length).toFixed(2);
//     avg = Number(avg);

// return avg; 
// };

// var result5 = avg(newArray);
// newObject.avg = result5;


// function sorting(array){
//     array.sort(function(a, b){
//         if(a < b){
//             return -1;
//         } else if (b < a){
//             return 1;
//         } else {
//             return 0;
//         };
        
//     });
     
// };

// var sortedArray = newArray.slice();

// sorting(sortedArray)

// console.log(`sortedArray ${sortedArray}`)
// //console.log(`newArray ${newArray}`)




// function count(array){
//     var counter = {};
//     array.forEach(function(a){
//         //console.log("iteration ["+a+"]")
//         if(counter[a] === undefined){       //podminka k vytvoreni promenné
//             counter[a] = 0;                 //deklarace počateční hodnoty
//             //console.log("declaration ["+a+"]")
//         };   
//         counter[a] += 1;  //navyseni hodnoty pri nalezeni stejneho prvku
//     });
//     return counter;
// };
// //console.log(count(newArray));

// //var countedArr = {};
// var countedArr = count(newArray)



// // for (var k in counter) {
// //     if (counter[k] == maxFreq) {
// //       modes.push(k);
// //     };
// //     //console.log([k])
// //     console.log(frequency[k],[k])
// //   };
// //   return modes;











// function median(array){
//     var median = 0;
//     if(array.length % 2 !== 0){
//         var median = array[(Math.floor((array.length)/2))]
//     }else{
//         var evenMedian = array[((array.length)/2) - 1]
//         var evenMedian2 = array[((array.length)/2) ]
//         var median = (evenMedian + evenMedian2)/2
//         //var median = array[2]
        
//     };
//         //console.log(evenMedian2)

//     return median;
      
// };

// //median(sortedArray);
// newObject.median = median(sortedArray)
// //console.log(median(sortedArray))




// //console.log(newObject)





///////////////////Vypis jedne nejvetši hodnoty///////////////////////////

// let obj = {a: 1, b: 3, c:10, d:10,e:1}
// max = Math.max(...Object.values(obj))
// maxIndex = Object.keys(obj).find(key => obj[key] === max)
// console.log(maxIndex)

//////////////////////Nejvetši jedna hodnota/////////////////////////////

// const getMaxKey = o => Object.entries(o)
//   .reduce((r, e) => e[1] > r[1] ? e : r)[0]

// const obj2 = {a: 1, b: 3, c:10, d:10}

// const result = getMaxKey(obj2)

// console.log(result)


////////////////////////Nejvetsi jedna hodnota////////////////////////////

// const chars = {a: 2, b: 2, undefined: 1}

//set maximum value to 0 and maxKey to an empty string
// let max = 0;
// let maxKey = "";

// for(let char in chars){
//   if(chars[char]> max){
//     max = chars[char];
//     maxKey= char
//   }
// }

// console.log(maxKey)

////////////////////////Vypise vsechny nejvetši hodnoty jako pole////////////////////////////////
var obj = {
    apples: 2,
    bananas: 2,
    pears: 1 
};

// function getMax(object){
//     return Object.keys(object).filter(function(x) {
//          return object[x] == Math.max.apply(null, Object.values(object));
//    });
// };

// console.log(getMax(obj))

//console.log(Math.max.apply(null,Object.keys(obj)))


/////////////////////////////Vypise vsechny nejvetši hodnoty jako pole////////////////////////////////////////////

