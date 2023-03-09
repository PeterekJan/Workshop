
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
  
  /*
  console.log("Square: " + stats.square("a"));
  console.log("Rectangle: " + stats.rectangle("6", "4"));
  console.log("Geometry (10,2): " + stats.geometry(10,2));
  console.log("Geometry (6): " + stats.geometry(6));
  console.log("Geometry (\"A\", 3): " + stats.geometry("A",3));
  */
  
  class Stats {
    
    // definice atributu / proměnné
    object = {};
    
    // konstruktor - vytvoří výchozí stav objektu / třídy
    constructor(array) {
      this.array = array;
      
      console.log("Výchozí stav objektu");
      console.log(this.object);
      
      this.object = {
        min: null,
        max: null,
        first: this.first()
      };
      
      console.log("Objekt po init v konstruktoru");
      console.log(this.object);
    }
    
    // funkce
    first() {
      return this.array[0];
    }
    
    getMax() {
      
      return this.array[this.array.length-1];
    }
    
    setMin() {
      this.object.min = -160;
    }
    
    output() {
      this.object.max = this.getMax();
      this.setMin();
      
      return this.object;
    }
    
    printOutput() {
      console.log(this.output());
    }
  }
  
  var st = new Stats([8,3,0,-9]);
  //console.log(st.output());
  st.printOutput();