export class Transaction {
    
    //exchangeRate = 26.50;
    id;
    date;
    amount;
    currency;
    type;
    
    
    constructor(date,amount, currency, type) {
    
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.type = type;


    };

    get output() {
        return "#" + this.id + " " + this.date + " " + this.amount + " "+ this.currency +" " +  this.type 
    }





}