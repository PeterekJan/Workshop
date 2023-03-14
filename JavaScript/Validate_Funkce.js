
// class Statistics {
  
//     constructor() {
//     }
    
//     square(a) {
//       return this.isValidNum(a) ? a*a : "Error";
//     }
    
//     rectangle(a,b) {
//       return this.isValidNum(a,b) ? a*b : "Error";
//     }
    
//     /*
//      *  Number validation
//      */
//     isValidNum(...num) {
      
//       var result = true;
      
//       for(var i=0;i<num.length;i++) {
//         var value = num[i];
        
//         // If not a number or negative number was found, set result to false and stop loop
//         if(isNaN(value) || value < 0) {
//           result = false;
//           break;
//         }
//       }
      
//       return result
//     }
//   }
  
//   var stats = new Statistics();
  
//   console.log("Square: " + stats.square("a"));
//   console.log("Rectangle: " + stats.rectangle("6", "4"));

///////////////////////////////////////////////////////////////////////////////////////////

class Statistics {
  
  constructor() {
  }
  
  square(a) {
    return this.isValidNum(a) ? a*a : "Error";
  }
  
  rectangle(a,b) {
    return this.isValidNum(a,b) ? a*b : "Error";
  }
  
  geometry(a,b) {
    
    if(this.isValidNum(a,b)) {
      return a*b;
    } else if(this.isValidNum(a)) {
      return a*a;
    } else {
      return "Error";
    }
  }
  
  /*
   *  Number validation
   */
  isValidNum(...num) {
    
    var result = true;
    
    for(var i=0;i<num.length;i++) {
      var value = num[i];
      
      // If not a number or negative number was found, set result to false and stop loop
      if(isNaN(value) || value < 0) {
        result = false;
        break;
      }
    }
    
    return result
  }
}

var stats = new Statistics();

console.log("Square: " + stats.square("a"));
console.log("Rectangle: " + stats.rectangle("6", "4"));
console.log("Geometry (10,2): " + stats.geometry(10,2));
console.log("Geometry (6): " + stats.geometry(6));
console.log("Geometry (\"A\", 3): " + stats.geometry("A",3));



////////////////////////////////v rámci objektu-konstruktoru zapis funkce ktera pak udela validaci dat/////////////////////////////////////////
//task_funkce_Object.js
/*
constructor(array) {
  this.array = array;
  //this.validate(this.array)
  if(this.validate(this.array)){
      console.log(this.output())
  }else{
      console.log("Error, array is with invalid input!")
  }

}
//Define Validation input

validate(num) {
  var result = true;

  for(var i = 0; i < num.length; i++) {
      var value = num[i];
      if(isNaN(value)) {
          result = false;
          break;
      }

  }
  return result

}

*/


