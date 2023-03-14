
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


class Transaction {
  
  ratio = 26.50;
  
  amount = 0;
  currency = "";
  type = "";
  date = null;

  constructor(amount, currency, type) {
    
    if(currency != "CZK" && currency != "EUR") {
      throw "Only CZK and EUR is supported";
    }
    
    if(type != "credit" && type != "debit") {
      throw "Only credit and debit transactions are allowed";
    }
    
    this.amount = amount;
    this.currency = currency;
    this.type = type;
    this.date = Date();
  }
  
  get inEUR() {
    return this.currency == "CZK" ? this.amount / this.ratio : this.amount;
  }
  
  get inCZK() {
    return this.currency == "CZK" ? this.amount : this.amount * this.ratio;
  }
  
  toString() {
    return this.amount + this.currency;
  }
}

class InternetBanking {
  
  transactions = [];
  
  constructor() {}
  
  get totalEur() {
    
    let self = this;
    
    return this.transactions.reduce(function(total, transaction) {
      
      if(transaction.type == "credit") {
        return total + transaction.inEUR;
      } else {
        return total - transaction.inEUR;
      }
      
    }, 0).toFixed(2);
  }
  
  credit(amount, currency) {
    this.transactions.push(new Transaction(amount, currency, "credit"));
  }
  
  debit(amount, currency) {
    this.transactions.push(new Transaction(amount, currency, "debit"));
  }
  
  compareTransactions(transactionA, transactionB) {
    
    // read computed properties :)
    return transactionA.inCZK == transactionB.inCZK;
  }
}

let banking = new InternetBanking();

banking.credit(10, "EUR");
banking.credit(1, "EUR");
banking.debit(5, "CZK");

console.log(banking.transactions);
console.log("Total in EUR: " + banking.totalEur);

let transactionA = new Transaction(5, "EUR", "credit");
let transactionB = new Transaction(132.5, "CZK", "credit");
let transactionC = new Transaction(5, "CZK", "credit");

console.log("Is equal: " + transactionA.toString() + " == "+ transactionB.toString() +": " + banking.compareTransactions(transactionA, transactionB));
console.log("Is equal: " + transactionA.toString() + " == "+ transactionC.toString() +": " + banking.compareTransactions(transactionA, transactionC));