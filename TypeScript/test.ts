class InternetBanking {
    transactions: Transaction[] = [];
    #exchangeRate = 26.50;

    get totalEur(): string {
        return this.getTotal("EUR");
    }

    get totalCzk(): string {
        return this.getTotal("CZK");
    }

    getTotal(currency: string): string {
        return this.transactions.reduce(function (total, transaction) {
            if (transaction.type == "credit") {
                return total + transaction[currency];
            } else {
                return total - transaction[currency];
            }
        }, 0).toFixed(2);
    }

    pushTransaction(transaction: Transaction) {
        transaction.setRanking(this.transactions.length + 1);
        this.transactions.push(transaction);
    }

    credit(date: Date, amount: number, currency: string) {
        this.pushTransaction(new Transaction(date, amount, currency, "credit"));
    }

    debit(date: Date, amount: number, currency: string) {
        this.pushTransaction(new Transaction(date, amount, currency, "debit"));
    }

    sameTransactionsByRanking(index1: number, index2: number) {
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
banking.sameTransactionsByRanking(2, 3);


console.log("-------- porovnani dvou existujicich (s prepoctem) transakci podle 'ranking' -------- ")
banking.compareTransactions(4, 5)


console.log("----------- výpis zůstatku na účtu (v obou měnách) -----------")
//console.log("EUR: " + banking.totalEur)
//console.log("CZK: " + banking.totalCzk)

console.log("------------------------------------------------------")
//banking.everyID()
//console.log(banking.transactions[5].amount)


//console.log(banking.transactions[1].exchangeRate)

//console.log(banking.transactions[0])
