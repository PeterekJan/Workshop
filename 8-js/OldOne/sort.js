array = [5,2,5,1.2,10,2];


// var arrayNumber = array.map(Number);

// var sortedArray = arrayNumber.sort()


// console.log(sortedArray)

////////////////////////////////////////////////////////

// var numArray = [140000, 104, 99];
array.sort(function(a, b) {
  return a - b;
});

console.log(array);

///////////////////////////////////////////////

// function compareNumbers(a, b)
// {
//     return a - b;
// }

// numArray.sort(compareNumbers);
