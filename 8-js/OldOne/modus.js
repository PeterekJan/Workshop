// /**
//  * The "mode" is the number that is repeated most often.
//  *
//  * For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
//  *
//  * @param {Array} numbers An array of numbers.
//  * @return {Array} The mode of the specified numbers.
//  */
// function mode(numbers) {
//     // as result can be bimodal or multi-modal,
//     // the returned result is provided as an array
//     var numbers = [3, 5, 4, 4, 1, 1, 2, 3] //= [1, 3, 4]
//     var modes = [], count = [], i, number, maxIndex = 0;
 
//     for (i = 0; i < numbers.length; i += 1) {
//         number = numbers[i];
//         count[number] = (count[number] || 0) + 1;
//         if (count[number] > maxIndex) {
//             maxIndex = count[number];
//         }
//     }
 
//     for (i in count)
//         if (count.hasOwnProperty(i)) {
//             if (count[i] === maxIndex) {
//                 modes.push(Number(i));
//             }
//         }
 
//     return modes;
//     var modul = modes;
// }
// console.log(number)
// list = [1,2,3,4,5,6,7,7]
// counts = {}
// list.forEach(function(e) {
//   if(counts[e] === undefined) {
//     counts[e] = 0
//   }
//   counts[e] += 1
// })

// console.log(counts)


/////////////////////////////////////////////////////
// var array = ([2,2,5,1.2,10]);

// const mode = array => {
//     const mode = {};
//     let max = 0, count = 0;
  
//     for(let i = 0; i < array.length; i++) {
//       const item = array[i];
      
//       if(mode[item]) {
//         mode[item]++;
//       } else {
//         mode[item] = 1;
//       }
      
//       if(count < mode[item]) {
//         max = item;
//         count = mode[item];
//       }
//     }
     
//     return max;
//   };

// console.log(modus)



/////////////////////////////////////////////////////////////////


var nums = [1,2,2,3,3,4,6];

function getMode(array){
    var obj = {};
    array.forEach(number => {
        if (!obj[number]){
            obj[number] = 1;
        }else{
            obj [number] += 1;
        }
    });
console.log(obj);

    var highestValue = 0;
    var highestValueKey = -Infinity;

    for(var key in obj){
        var value = obj[key];
        if (value >= highestValue && Number(key) > highestValueKey){
            highestValue = value;
            highestValueKey = Number(key);
        }
    }

    return highestValueKey;

};




// list = [1,2,3,4,5,6,7,7]
// counts = {}
// list.forEach(function(e) {
//   if(counts[e] === undefined) {
//     counts[e] = 0
//   }
//   counts[e] += 1


  
// })

// console.log(counts)

///////////////////////////////////////////////////////

// const mode = (array) => {
//     const map = new Map();
//     let maxFreq = 0;
//     let mode;
  
//     for(const item of array) {
//       let freq = map.has(item) ? map.get(item) : 0;
//       freq++;
  
//       if(freq > maxFreq) {
//         maxFreq = freq;
//         mode = item;
//       }
      
//       map.set(item, freq);
//     }
  
//     return mode;
//   };
  
//   const testArray = [1, 1, 2, 3, 5, 8, 13];
//   console.log(`Mode of [${testArray}] is ${mode(testArray)}.`);


  ///////////////////////////////////////////////////////////////////
//   var array = [2,5,8,12,15,15,3]
//   const modus = arr => {
//     const mode = {};
//     let max = 0, count = 0;
  
//     for(let i = 0; i < arr.length; i++) {
//       const item = arr[i];
      
//       if(mode[item]) {
//         mode[item]++;
//       } else {
//         mode[item] = 1;
//       }
      
//       if(count < mode[item]) {
//         max = item;
//         count = mode[item];
//       }
//     }
     
//     return max;
//   };

//   console.log(modus(array))


  ////////////////////////////////////////////////////////////////////
 
 
//   var array = [2,5,8,12,15,15,3,2,2,5,5]

  
//   function findMode(array) {
//     // This function starts by creating an object where the keys are each unique number of the array and the values are the amount of times that number appears in the array.
  
//     let object = {}
  
//     for (let i = 0; i < array.length; i++) {
//       if (object[array[i]]) {
//         // increment existing key's value
//         object[array[i]] += 1
//       } else {
//         // make a new key and set its value to 1
//         object[array[i]] = 1
//       }
//     }
  
//     // assign a value guaranteed to be smaller than any number in the array
//     let biggestValue = -1
//     let biggestValuesKey = -1
  
//     // finding the biggest value and its corresponding key
//     Object.keys(object).forEach(key => {
//       let value = object[key]
//       if (value > biggestValue) {
//         biggestValue = value
//         biggestValuesKey = key
//       }
//     })
  
//     return biggestValuesKey
  
//   }

//   console.log(findMode(array))


////////////////////////////////////////////////////////////////////////////////////////

function getModes(array) {
    var frequency = []; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
    return modes;
  }
  console.log(getModes([3, 6, 1, 9, 2, 3, 6, 6, 3, 1, -8, 7]));

  ///////////////////////////////////////////////////////////////////////////////////
  function mode(numbers) {           //Neumi ze zaporných čísel !!
    var modes = [];
    var count = [];
    var number = 0;
    var maxIndex = 0;
 
    for (var i = 0; i < numbers.length; i++) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];  
        };
    };
 

    for (i in count){                         //for (var i in count)
        if (count.hasOwnProperty(i)){        //if(count[i] == maxIndex){
            if (count[i] === maxIndex){     //modes.push(Number(i));
                modes.push(Number(i));     // };
            };                            // };
        };
    };
 
    return modes;
};



// var modeArr = [3,3,3,2,2]
// console.log(mode(modeArr))

console.log(mode(newArray))


/////////////////////////////MODUS PEDRO/////////////////////////////////////////
function modus(array) {
  
  // initiate temp variable, which will containt key:value = number:total_count
  let temp = {};
  
  // loop through array
  for(i=0;i<array.length;i++) {
    let value = array[i];
    
    // if value is not set, initiate it with counter set to 1
    if(typeof temp[value] == "undefined") {
      temp[value] = 1;
    } else {
      temp[value]++;
    }
  }
  
  var modus = Object.keys(temp).reduce(function(a, b) {
    return temp[a] > temp[b] ? a : b 
  });
  
  var top = temp[modus];
  
  
  
  return modus;
}

console.log(modus([0,6,8,9,-9,-9,9,6,4,7,6,0,5,5]));

