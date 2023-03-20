class Transaction {

    exchangeRate = 26.50;
    id = "";
    amount = 0;
    currency = "";
    type = "";
    date = null;
    
    constructor(amount, currency, type) {
        this.id = null;
        this.amount = amount;
        this.currency = currency;
        this.type = type;
        this.date = Date();


    };

    get EUR() {
        if(this.currey == "CZK"){
            return this.amount / this.ratio;
        }else{
            this.amount;
        }
    }
    
    get CZK() {
        if(this.currency == "CZK") {
          return this.amount;
        } else {
          return this.amount * this.ratio;
        }
      }

    toString() {
        return this.amount + this.currency;
    }





}

class InternetBanking {

    transaction = [];



}

let banking = InternetBanking();
