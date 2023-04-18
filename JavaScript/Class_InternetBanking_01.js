class InternetBanking {
    exchangeRate = 26.50 
    transactions = [];
   
    accountBalance = {
        CZK: 0
    };     
    constructor() {

    };


    creditPayment(timestamp, amount, currency) {
        let value = amount
        this.transactions.push({
            ID: this.generateID(),
            type: "Credit",
            timestamp,
            amount,
            currency
        })
        if(currency == "EUR"){
            value = value * this.exchangeRate
        }
        this.accountBalance["CZK"] += value

    }
    debitPayment(timestamp, amount, currency) {
        let value = amount
        this.transactions.push({
            ID: this.generateID(),
            type: "Debit",
            timestamp,
            amount,
            currency
        })
        if(currency == "EUR"){
            value = value * this.exchangeRate;
        }
        this.accountBalance["CZK"] -= value;


    }

    generateID(){
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID
    }
    compareAmounts(amount, currency, amount2, currency2){
        if(currency == 'CZK' && currency2 == 'EUR'){
            amount2 = amount2 * this.exchangeRate;
        }
        if(currency == 'EUR' && currency2 == 'CZK'){
            amount = amount * this.exchangeRate;
        }
        return amount == amount2        

    }
    printAllTransaction(){
        console.log("List of all transactions:");
        console.log(this.transactions);
    }

    printAllCreditTransaction(){
        console.log("List of all credit transactions:");
        this.transactions.forEach(function(transaction){             //vybere hodnoty, ale nevrati je
            if(transaction.type == "Credit"){
                console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`)
            }
        })

        //jina složitejší varianta
        
        // this.transactions.filter(transaction => transaction.type === "Credit").forEach(transaction => {
        //     console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
        // });
      
    }
    // getCreditTransactions(){ //vrati hodnoty, ale nevytiskne je. Lepsi pro dalsi zpracovani dat
    //     return this.transaction.filter(function(transaction){
    //         return transaction.type == "Credit"
    //     })
    // }

    // printCreditTransactions(){
    //     console.log(this.getCreditTransactions());
    // }

    printAllDebitTransaction(){
        console.log("List of all debit transactions:");
        this.transactions.filter(transaction => transaction.type === "Debit").forEach(transaction => {
          console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
        });
      
    }

    printAccountBalance(){
        console.log("Account balance:");
        console.log(this.accountBalance);

    }
    
}



let banking = new InternetBanking();

banking.creditPayment("22.12.2005", 10, "EUR");
banking.creditPayment('5.5.2555', 10, "CZK");
banking.debitPayment('4.4.2045', 10, "EUR");
banking.debitPayment('1.1.2058', 5, "CZK");
banking.debitPayment('1.1.2058', 7, "CZK");


banking.compareAmounts(10,"EUR", 10, "EUR");
//console.log(banking.compareAmounts(10,"EUR", 10, "EUR"))

banking.printAllTransaction()
banking.printAccountBalance()
banking.printAllCreditTransaction()
banking.printAllDebitTransaction()




//console.log(banking);


