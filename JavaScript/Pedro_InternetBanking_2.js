class Transaction {
    id;
    amount;
    currency;
    exchangeRateToCZK;
    
    rawCZKAmount;
    
    constructor(id, amount, currency, exchangeRateToCZK) {
      this.id = id;
      this.amount = amount;
      this.currency = currency;
      this.exchangeRateToCZK = exchangeRateToCZK;
      
      this.setRawCZK();
    }
    
    setRawCZK() {
      
      this.rawCZKAmount = this.currency == "CZK" ? this.amount : this.amount * this.exchangeRateToCZK;
    }
  }
  
  class InternetBanking {
    transactions = [];
    
    #exchangeRateToCZK = 26.50;
    #lastId = 0;
    
    credit(amount, currency) {
      this.transactions.push(new Transaction(this.getId(), amount, currency, this.#exchangeRateToCZK));
    }
    
    getId() {
      this.#lastId++;
      
      return this.#lastId;
    }
    
    changeExchangeRateToCZK(amount) {
      this.#exchangeRateToCZK = amount;
    }
  }
  
  let ib = new InternetBanking();
  
  ib.credit(100, "CZK");
  ib.credit(20, "EUR");
  
  ib.changeExchangeRateToCZK(20);
  
  ib.credit(20, "EUR");
  
  console.log(ib);