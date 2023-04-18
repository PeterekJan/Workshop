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
        //console.log("------------------------get totalEur--------------------")

        return this.getTotal("EUR");
    }

    get totalCzk() {
        return this.getTotal("CZK");
    }

    getTotal(currency) {
        return this.transactions.reduce(function (total, transaction) {
            //console.log(transaction[currency])
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

    //porovnani dvou existujicich (identickych) transakcí podle 'ranking'
    sameTransactionsByRanking(index1, index2) {
        if (this.transactions.length < 2) {
            throw "Chybí ID transakcí k porovnání.";
        }

        if (this.transactions[index1].amount === this.transactions[index2].amount &&
            this.transactions[index1].currency === this.transactions[index1].currency &&
            this.transactions[index1].date === this.transactions[index1].date &&
            this.transactions[index1].type === this.transactions[index1].type) {
            console.log("Transactions with ranking:" + " " + index1 + " and " + index2 + " is the same.");
        } else {
            console.log(`Transaction IDs for the two payments are different.`);
        };
    }

    // porovnani dvou existujicich (s prepoctem) transakci podle 'ranking'
    // hrozně prvoplanově napsano, neni to funkční.
    compareTransactions(index1, index2) {

        if (this.transactions[index1].currency == "EUR" && this.transactions[index2].currency == "EUR") {
            if (this.transactions[index1].amount == this.transactions[index2].amount &&
                this.transactions[index1].type == this.transactions[index1].type) {
                console.log("Transactions with ranking:" + " " + index1 + " and " + index2 + " is the same.");
            } else {
                console.log("aaaaaaaaaaaaaaaaaa")
            }

        } else if (this.transactions[index1].currency == "CZK" && this.transactions[index2].currency == "CZK") {
            if (this.transactions[index1].amount == this.transactions[index2].amount &&
                this.transactions[index1].type == this.transactions[index1].type) {
                console.log("Transactions with ranking:" + " " + index1 + " and " + index2 + " is the same.");

            } else {
                console.log("bbbbbbbbbbbbbb")
            }


        } else if (this.transactions[index1].currency == "EUR" && this.transactions[index2].currency == "CZK") {
            if (((this.transactions[index1].amount) / this.#exchangeRate) == this.transactions[index2].amount &&
                this.transactions[index1].type == this.transactions[index1].type) {
                console.log("Transactions with ranking:" + " " + index1 + " and " + index2 + " is the same.");

            } else {
                console.log("cccccccccccccccccc")
            }


        } else if (this.transactions[index1].currency == "CZK" && this.transactions[index2].currency == "EUR") {
            if (this.transactions[index1].amount == ((this.transactions[index2].amount) / this.#exchangeRate) &&
                this.transactions[index1].type == this.transactions[index1].type) {
                console.log("Transactions with ranking:" + " " + index1 + " and " + index2 + " is the same.");
            } else {
                console.log(`Transaction IDs for the two payments are different.`);
            };

        }
    }
    //funkcni pro node, ne pro API

    // compareByIds(...ids) {
    //     if (ids.length < 2) {
    //         console.log("Chybí ID transakcí k porovnání.");
    //         return;
    //     }

    //     let transactions = ids.map(function (ranking) {
    //         return this.transactions.find(function (t) {
    //             return t.ranking === ranking;
    //         }, this);
    //     }, this);

    //     //let transactions = ids.map(id => this.transactions.find(t => t.id === id));

    //     let firstTransaction = transactions[0];
    //     let allTransactionsAreEqual = transactions.every(function (t) {
    //         return this.compareTransactions2(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
    //     }, this); //pri šipkove metodě neni potřeba mit toto this

    //     if (allTransactionsAreEqual) {
    //         console.log(`Všechny transakce s ID ${ids.join(", ")} jsou stejné.`);
    //     } else {
    //         console.log(`Transakce s ID ${ids.join(", ")} se liší.`);
    //     };
    // }

    // compareTransactions2(transaction1, transaction2) {
    //     return (
    //         transaction1.amount === transaction2.amount &&
    //         transaction1.currency === transaction2.currency &&
    //         transaction1.date === transaction2.date &&
    //         transaction1.type === transaction2.type
    //     );
    // }

    filterTransactionsByRanking(rankings) {
        return this.transactions.filter(function (transaction) {
            return rankings.includes(transaction.ranking);
        });
    }
    //vypise stejne transakce
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


console.log("-----------------porovnani transakci podle pole hodnot rankings---------------------")
//banking.compareTransactions([5, 4]);
console.log(banking.compareTransactions3([1, 2, 5, 4]))

console.log("----------------compareByIds------------")
//banking.compareByIds(3,4)

console.log("------------------------------------------------------")
//banking.everyID()
//console.log(banking.transactions[5].amount)


//console.log(banking.transactions[1].exchangeRate)

//console.log(banking.transactions[0])


