class InternetBanking {
    exchangeRate = 26.50 
    transactions = [];
   
    accountBalance = {
        CZK: 0
    }; 
    
    constructor() {

    };


    creditPayment(timestamp, amount, currency) {
        if(currency === 'EUR') {
            amount = amount * this.exchangeRate
        };

        this.transactions.push({
            ID: this.generateID(),
            type: "Credit",
            timestamp,
            amount,
            currency
        })
        this.accountBalance["CZK"] += amount

    }
    debitPayment(timestamp, amount, currency) {
        if(currency === 'EUR') {
            amount = amount * this.exchangeRate
        }

        this.transactions.push({
            ID: this.generateID(),
            type: "Debit",
            timestamp,
            amount,
            currency
        })        
        this.accountBalance["CZK"] -= amount
    }
    generateID(){
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16)
        return uniqueID
    }
    compareAmounts(anount, currency, amount2, currency2){
        

    } 


}


let banking = new InternetBanking();

banking.creditPayment("22.12.2005", 10, "EUR");
banking.creditPayment('5.5.2555', 0, "CZK");
banking.debitPayment('4.4.2045', 20, "EUR");
banking.debitPayment('1.1.2058', 5, "CZK");

console.log(banking);


