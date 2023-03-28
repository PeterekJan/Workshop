export class Transaction {
    
    exchangeRate = 26.50;
    id = 0;
    date = null;
    amount = 0;
    currency = "";
    type = "";
    
    
    constructor(date,amount, currency, type) {
        
        if(currency != "CZK" && currency != "EUR") {
            throw "Only CZK and EUR is supported";
        };

        if(type != "credit" && type != "debit") {
            throw "Only credit and debit transaction are allowed";
        };        
        
        

        this.id = this.generateSimpleID();
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.type = type;


    };

    get EUR() {
        if(this.currency == "CZK") {
            return this.amount / this.exchangeRate;
        }else{
            return this.amount;
        }
    }
    
    get CZK() {
        if(this.currency == "CZK") {
          return this.amount;
        } else {
          return this.amount * this.exchangeRate;
        }
      }

    toString() {
        return this.amount + this.currency;
    }

    generateID() {
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID;
    }

    generateSimpleID(){
        if (!Transaction.id) { //if transaction.id not exist
        Transaction.id = 0;
        }

        Transaction.id++;
        return Transaction.id;
    }

}