class Transaction {

    exchangeRate = 26.50;
    id;
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



        this.id = this.generateSimpleID();
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

    generateSimpleID() {
        
        var newId = 0;
        for(var i = 0; i < 20; i++)
        
        
        return newId

    }
}






class InternetBanking {

    transactions = [];

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
        this.transactions.push(transaction)
    }

    credit(date, amount, currency) {
        this.pushTransaction(new Transaction(date, amount, currency, "credit"));
    }

    debit(date, amount, currency) {
        this.pushTransaction(new Transaction(date, amount, currency, "debit"));
    }

    compareTransactionIds(transaction1, transaction2) {
        if (transaction1.id === transaction2.id) {
            console.log(`Transaction ${transaction1.id} is the same for both payments.`);
        } else {
            console.log(`Transaction IDs for the two payments are different.`);
        };
    }

    compareByIds(...ids) {
        if (ids.length < 2) {
            console.log("Chybí ID transakcí k porovnání.");
            return;
        }

        let transactions = ids.map(function (id) {
            return this.transactions.find(function (t) {
                return t.id === id;
            }, this);
        }, this);

        //let transactions = ids.map(id => this.transactions.find(t => t.id === id));

        let firstTransaction = transactions[0];
        let allTransactionsAreEqual = transactions.every(function (t) {
            return this.compareTransactions(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
        }, this); //pri šipkove metodě neni potřeba mit toto this

        if (allTransactionsAreEqual) {
            console.log(`Všechny transakce s ID ${ids.join(", ")} jsou stejné.`);
        } else {
            console.log(`Transakce s ID ${ids.join(", ")} se liší.`);
        };
    }

    compareTransactions(transaction1, transaction2) {
        return (
            transaction1.amount === transaction2.amount &&
            transaction1.currency === transaction2.currency &&
            transaction1.date === transaction2.date &&
            transaction1.type === transaction2.type
        );
    }




    printAllTransaction() {
        console.log("List of all transactions:");
        console.log(this.transactions);
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

//banking.compareTransactionIds(transaction1, transaction2);

banking.compareByIds(3, 4)

//console.log(banking.totalEur)

