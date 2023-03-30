export class Transaction {
    
    exchangeRate = 26.50;
    ranking;
    id;
    date;
    amount;
    currency;
    type;
    
    
    constructor(id,date,amount, currency, type) {
        this.ranking = this.generateSimpleID();
        this.id = this.generateID();
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.type = type;


    };

    generateSimpleID(){
        if (!Transaction.ranking) { //if transaction.id not exist
        Transaction.ranking = 0;
        }

        Transaction.ranking++;
        return Transaction.ranking;
    }

    generateID() {
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID;
    }






}