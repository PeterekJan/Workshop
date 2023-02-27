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
const obj = {apples: 1, bananas: 1, pears: 1 };

const getMax = object => {
    return Object.keys(object).filter(x => {
         return object[x] == Math.max.apply(null, 
Object.values(object));
   });
};

console.log(getMax(test))


/////////////////////////////Vypise vsechny nejvetši hodnoty jako pole////////////////////////////////////////////


const getMax2 = object => {
    let max = Math.max(...Object.values(object))
    return Object.keys(object).filter(key => object[key]==max)
  }
  
  let obj3 = {a: 12, b: 11, c: 12};
  getMax2(obj3)

  console.log(getMax2(obj3))

  /////////////////////////////////Vypise vsechny nejvetši hodnoty jako pole///////////////////////////////////
