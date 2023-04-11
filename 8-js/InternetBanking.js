class Transaction {

    exchangeRate = 26.50;
    ranking = 0;
    date = null;
    amount = 0;
    currency = "";
    type = "";



    constructor(date, amount, currency, type) {

        if (currency != "CZK" && currency != "EUR") {
            throw "Only CZK and EUR is supported";
        };

        if (type != "credit" && type != "debit") {
            throw "Only credit and debit transaction are allowed";
        };



        this.ranking = this.setRanking(0);
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.type = type;


    };

    get EUR() {
        if (this.currency == "CZK") {
            return this.amount / this.exchangeRate;
        } else {
            return this.amount;
        }
    }

    get CZK() {
        if (this.currency == "CZK") {
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
    setRanking(ranking) {
        this.ranking = ranking;
    }



}


class InternetBanking {

    transactions = [];
    #currentId = 0;

    get totalEur() {
        //console.log("------------------------get totalEur--------------------")

        return this.getTotal("EUR");
    }

    get totalCzk() {
        return this.getTotal("CZK");
    }

    getTotal(currency) {
        return this.transactions.reduce(function (total, transaction) {
            console.log(transaction[currency])
            if (transaction.type == "credit") {
                return total + transaction[currency];
            } else {
                return total - transaction[currency];
            }
        }, 0).toFixed(2);
    }

    pushTransaction(transaction) {
        transaction.setRanking(this.transactions.length + 1);
        this.transactions.push(transaction);

    }

    credit(date, amount, currency) {
        this.pushTransaction(new Transaction(date, amount, currency, "credit"));

    }

    debit(date, amount, currency) {
        this.pushTransaction(new Transaction(date, amount, currency, "debit"));
    }

    compareTransactionById(index1, index2) {
        if (this.transactions[index1].amount == this.transactions[index2].amount ) {
            console.log(`Transaction ${this.transactions[index1], this.transactions[index2]} is the same for both payments.`);
        } else {
            console.log(`Transaction IDs for the two payments are different.`);
        };
    }

  
    printAllTransaction() {
        console.log("List of all transactions:");
        console.log(this.transactions);
    }
    everyID() {
        this.transactions.forEach(function (transaction) {
            console.log(transaction.ranking);
        });
    }

}

let banking = new InternetBanking();


banking.credit("22.2.2022", 20, "CZK");
banking.credit("22.2.2024", 5, "EUR");
banking.credit("22.2.2025", 5, "EUR");
banking.credit("22.2.2025", 5, "EUR");
banking.debit("22.2.2024", 10, "CZK");
banking.debit("22.2.2025", 1, "EUR");
banking.debit("22.2.2025", 1, "EUR");
banking.debit("22.2.2025", 1, "EUR");

//console.log(banking)

console.log("---------------Compare Transaction---------------")
let transaction1 = new Transaction("22.2.2022", 20, "CZK", "credit");
let transaction2 = new Transaction("22.2.2023", 5, "EUR", "credit");

banking.printAllTransaction()
//console.log(transaction1.EUR)
//console.log(transaction1.CZK)

banking.compareTransactionById(2, 3);

//banking.compareByIds(3, 4)

//console.log(banking.totalEur)

console.log("------------------------------")
//banking.everyID()
console.log(banking.transactions[4].amount)

//console.log(banking.transactions[0])
