class Transaction {

  ratio = 26.50;

  id = "";
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

    this.id = this.generateId();
    this.amount = amount;
    this.currency = currency;
    this.type = type;
    this.date = Date();
  }

  // computed properties - not visible in console :-)
  get EUR() {
    return this.currency == "CZK" ? this.amount / this.ratio : this.amount;
  }

  get CZK() {
    return this.currency == "CZK" ? this.amount : this.amount * this.ratio;
  }

  // return string e.g. 10EUR
  toString() {
    return this.amount + this.currency;
  }

  // tohle jsem někde našel :-D
  generateId(){
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
  }
}

class InternetBanking {

  owner = "";
  transactions = [];

  constructor(owner) {
    this.owner = owner;
  }

  get totalEur() {
    return this.getTotal("EUR");
  }

  get totalCzk() {
    return this.getTotal("CZK");
  }

  getTotal(currency) {
    return this.transactions.reduce(function(total, transaction) {

      if(transaction.type == "credit") {
        return total + transaction[currency];
      } else {
        return total - transaction[currency];
      }

    }, 0).toFixed(2);
  }

  pushTransaction(transaction) {

    this.transactions.push(transaction);
  }

  credit(amount, currency) {

    this.pushTransaction(new Transaction(amount, currency, "credit"));
  }

  debit(amount, currency) {
    this.pushTransaction(new Transaction(amount, currency, "debit"));
  }

  compareTransactions(transactionA, transactionB) {

    // read computed properties :)
    return transactionA.CZK == transactionB.CZK
  }

  compareTransactionsbyID(idA, idB) {

    let transactionA = this.transactions.filter(function(item) {
      return item.id == idA;
    });

    let transactionB = this.transactions.filter(function(item) {
      return item.id == idB;
    });

    // transakce musí být právě 1 - nemůže být 0 (žádnou nenašel) a nemůže jich být ani více (v reálněm světě se asi nestane mít duplicitní ID)
    if(transactionA.length != 1 || transactionB.length != 1) {
      throw "Error while looking for transactions by ID"
    }

    // transactions are arrays, take first index
    // return transactionA[0].inCZK == transactionB[0].inCZK; - ale nechci mít ten stejný kód na více místech
    return this.compareTransactions(transactionA[0], transactionB[0]);
  }
}

/* *************************************** */

let banking = new InternetBanking("Jan Peterek");

banking.credit(10, "EUR");
banking.credit(1, "EUR");
banking.debit(5, "CZK");

console.log(banking.transactions);
console.log("Total in EUR: " + banking.totalEur);
console.log("Total in CZK: " + banking.totalCzk);

console.log("============== COMPARE TRANSACTIONS ==============");

let transactionA = new Transaction(5, "EUR", "credit");
let transactionB = new Transaction(132.5, "CZK", "credit");
let transactionC = new Transaction(5, "CZK", "credit");

console.log("Is equal: " + transactionA.toString() + " == "+ transactionB.toString() +": " + banking.compareTransactions(transactionA, transactionB));
console.log("Is equal: " + transactionA.toString() + " == "+ transactionC.toString() +": " + banking.compareTransactions(transactionA, transactionC));


console.log("============== COMPARE TRANSACTIONS BASED ON ID ==============");
banking.pushTransaction(transactionA);
banking.pushTransaction(transactionB);
banking.pushTransaction(transactionC);

//console.log(banking.transactions);

// Tu to je trochu komplikované, jelikož ty IDčka se pokaždé vygenerují nová, takže se na ně musím odkazovat před již vytvořené instance

console.log("Is equal: #" + transactionA.id + " (" + transactionA.toString() + ") == #" + transactionB.id + " (" + transactionB.toString() + "): " + banking.compareTransactionsbyID(transactionA.id, transactionB.id));
console.log("Is equal: #" + transactionA.id + " (" + transactionA.toString() + ") == #" + transactionC.id + " (" + transactionC.toString() + "): " + banking.compareTransactionsbyID(transactionA.id, transactionC.id));