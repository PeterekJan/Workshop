class Transaction {

    exchangeRate = 26.50;
    ranking = 0;
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

        this.ranking = this.setRanking(0);
        this.id = this.generateID()
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
    #exchangeRate = 26.50

    get totalEur() {

        return this.getTotal("EUR");
    }

    get totalCzk() {
        return this.getTotal("CZK");
    }

    getTotal(currency) {
        return this.transactions.reduce(function (total, transaction) {
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

    printAllTransaction() {
        console.log("List of all transactions:");
        console.log(this.transactions);
    }
    everyID() {
        this.transactions.forEach(function (transaction) {
            console.log(transaction.ranking);
        });
    }


    filterTransactionsByRanking(rankings) {
        return this.transactions.filter(function (transaction) {
            return rankings.includes(transaction.ranking);
        });
    }

    compareTransactions(rankings) {
        let filteredTransactions = this.filterTransactionsByRanking(rankings);

        let comparedTransactions = [];

        for (let i = 0; i < filteredTransactions.length - 1; i++) {
            let currentTransaction = filteredTransactions[i];
            let nextTransaction = filteredTransactions[i + 1];

            if (currentTransaction.amount === nextTransaction.amount &&
                currentTransaction.currency === nextTransaction.currency &&
                currentTransaction.type === nextTransaction.type) {
                comparedTransactions.push([currentTransaction, nextTransaction]);
            }
        }

        return comparedTransactions;
    }


    compareTransactions2(rankings) {
        const transactionsToCompare = this.transactions.filter(transaction => rankings.includes(transaction.ranking));
    
        if (transactionsToCompare.length < 2) {
          console.log('Not enough transactions to compare');
          return false;
        }
    
        const firstTransaction = transactionsToCompare[0];
        const isSameAmount = transactionsToCompare.every(transaction => transaction.amount === firstTransaction.amount);
        const isSameType = transactionsToCompare.every(transaction => transaction.type === firstTransaction.type);
        const isSameCurrency = transactionsToCompare.every(transaction => transaction.currency === firstTransaction.currency);
    
        if (isSameAmount && isSameType && isSameCurrency) {
          console.log('Transactions are the same');
          return true;
        } else {
          console.log('Transactions are different');
          return false;
        }
      }

      compareTransactions3(rankings) {
        let matchingRankings = [];
        let nonMatchingRankings = [];
    
        // filtrujeme transakce podle zadaných rankingů
        let filteredTransactions = this.transactions.filter(function (transaction) {
            return rankings.includes(transaction.ranking);
        });
    
        // porovnáváme a ukládáme rankingy shodných a neshodných transakcí
        for (let i = 0; i < filteredTransactions.length - 1; i++) {
            let currentTransaction = filteredTransactions[i];
            for (let j = i + 1; j < filteredTransactions.length; j++) {
                let comparedTransaction = filteredTransactions[j];
                if (currentTransaction.amount == comparedTransaction.amount
                    && currentTransaction.type == comparedTransaction.type
                    && currentTransaction.currency == comparedTransaction.currency) {
                    matchingRankings.push(currentTransaction.ranking, comparedTransaction.ranking);
                } else {
                    nonMatchingRankings.push(currentTransaction.ranking, comparedTransaction.ranking);
                }
            }
        }
    
        // vracíme výsledek
        if (matchingRankings.length > 0) {
            return (`Transaction are same : ${matchingRankings}`);
        } else {
            return (`Transaction are different${nonMatchingRankings}`);
        }
    }
    







}

let banking = new InternetBanking();



banking.credit("22.2.2022", 20, "CZK");
banking.credit("22.2.2024", 5, "EUR");
banking.credit("22.2.2025", 5, "EUR");
banking.credit("22.2.2025", 5, "CZK");
banking.credit("22.2.2025", 5, "CZK");
banking.debit("22.2.2024", 10, "CZK");
banking.debit("22.2.2025", 1, "EUR");
banking.debit("22.2.2025", 1, "EUR");
banking.debit("22.2.2025", 1, "EUR");

//console.log(banking)

console.log("--------------vypis všech transakci--------------")
banking.printAllTransaction()

console.log("---------------Compare two Transaction---------------")
let transaction1 = new Transaction("22.2.2022", 20, "CZK", "credit");
let transaction2 = new Transaction("22.2.2023", 5, "EUR", "credit");

//console.log("transaction1 to EUR: " + transaction1.EUR)
//console.log("transaction2 to CZK: " + transaction2.CZK)

//console.log("Is same " + transaction1 + " and " + transaction2 + " => " + banking.compareTransactionsAmounts(transaction1, transaction2))



console.log("-------- porovnani dvou existujicich (identickych) transakcí podle 'ranking' --------")
//banking.sameTransactionsByRanking(2, 3);


console.log("-------- porovnani dvou existujicich (s prepoctem) transakci podle 'ranking' -------- ")
//banking.compareTransactions(4, 5)


console.log("----------- výpis zůstatku na účtu (v obou měnách) -----------")
//console.log("EUR: " + banking.totalEur)
//console.log("CZK: " + banking.totalCzk)


console.log("----------------compareByIds------------")
//banking.compareByIds(3, 4)

console.log("------------------------------------------------------")
//banking.everyID()
//console.log(banking.transactions[5].amount)


//console.log(banking.transactions[1].exchangeRate)

//console.log(banking.transactions[0])


// příklad použití
// let comparedTransactions = banking.compareTransactions([2, 5, 4]);
// console.log(comparedTransactions);

banking.compareTransactions2([5,4]);
console.log(banking.compareTransactions3([1,2,5,4]))

