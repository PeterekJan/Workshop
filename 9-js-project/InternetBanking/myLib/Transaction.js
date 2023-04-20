export class Transaction {

    
    #exchangeRate = 26.50;
    ranking = 0;
    id;
    date;
    amount;
    currency;
    type;


    constructor(amount, currency, type) {

        this.ranking = this.setRanking(0);
        this.id = this.generateID();
        this.date = Date();
        this.amount = amount;
        this.currency = currency;
        this.type = type;


    };

    generateID() {
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID;
    }
    
    setRanking(ranking) {
        this.ranking = ranking;
    }

    getHash() {
        return this.amount + this.currency + this.type;
    }

}