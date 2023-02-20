
function rectangle(a, b) {
  
    a = Number(a);
    b = typeof b != "undefined" ? Number(b) : a;
    
    if(isNaN(a) || a <= 0) {
      return "`a` is not a number or is less or equal 0";
    } else if(isNaN(b) || b <= 0) {
      return "`b` is not a number or is less or equal 0";
    }
    
    return a * b;
  }
  
  console.log(rectangle("a"));
  console.log(rectangle("4", "3"));
  console.log(rectangle(4));
  console.log(rectangle("4"));
  console.log(rectangle(0, 1));
  console.log(rectangle(1, -4));
  console.log(rectangle("a", 7));
  
  // undefined vs null
  
  let object = {a: "a", b: "b"};
  console.log(object);
  object.a = null;
  console.log(object);
  object.b = undefined;
  console.log(object);


  ////////////////////////////Max number... 2 moznosti s validaci//////////////////////////////////
  
function highest(arr) {
  // Filter array, if NaN found, return error
  if(arr.filter(function(item) { return isNaN(item) }).length > 0) {
    console.log("Error, string found: ");
    return null;
  } 
  
  // Sort descendent
  arr.sort(function(a, b){return b - a})
  
  // Return first index of array
  return arr[0];
}

function highestSimple(arr) {
  
  // 1. check if all are numbers (optional)
  for(i=0;i<arr.length;i++) {
    if(isNaN(arr[i])) {
      console.log("Error `" + arr[i] + "` is NaN");
      return null;
    }
    
    // (optional) set all to numbers
    arr[i] = Number(arr[i]);
  }
  
  // look for highest number
  var highest = null;
  
  for(i=0;i<arr.length;i++) {
    
    // if current number is higher that temp highest, replace value
    if(highest == null || highest < arr[i]) {
      highest = arr[i];
    }
  }
  
  // return highest
  return highest;
}


var arr = [5,9.5,15,-6, "150"];

// take first number from array as highest
console.log("Highest: " + highest(arr));
console.log("Highest simple: " + highestSimple(arr));