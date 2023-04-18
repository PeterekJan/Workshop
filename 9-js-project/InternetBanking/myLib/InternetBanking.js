import { validateString, validateNumber } from "./Helpers.js";
import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";


export class InternetBanking {

    owner;
    accountBalance = {
        totalCzk: 0,
        totalEur: 0
    };

    transactions = [];
    #exchangeRate = 26.50;



    constructor(owner) {

        if (!(owner instanceof Owner)) {
            throw "Owner must be instance of class Owner.";
        }

        this.owner = owner;
    }

    get getTotalCzk() {
        return Math.round(this.accountBalance.totalCzk * 100) / 100;
    }

    get getTotalEur() {
        return Math.round(this.accountBalance.totalEur * 100) / 100;
    }

    pushTransaction(item) {
        if (!(item instanceof Transaction)) {
            throw "Transaction must be instance of class Transaction."
        }

        item.setRanking(this.transactions.length + 1); //při pushovani transakce zvyší ranking v transakci +1 ( +1 je pouse start přičítani od 1)
        this.transactions.push(item);
        this.writeTotal(item.currency, item.type, item.amount);
        

    }


    credit(amount, currency) {
        validateNumber(amount)
        validateString(currency)
        this.pushTransaction(new Transaction(amount, currency, "credit"));
    }

    debit(amount, currency) {
        validateNumber(amount)
        validateString(currency)
        this.pushTransaction(new Transaction(amount, currency, "debit"));
    }
    

    writeTotal(currency, type, amount) {
       // validateNumber(this.accountBalance.totalCzk);
        // validateNumber(this.accountBalance.totalEur);

        if (currency == "CZK") {
            if (type == "debit") {
                this.accountBalance.totalCzk -= amount;
                this.accountBalance.totalEur -= amount / this.#exchangeRate;
                //this.accountBalance.totalEur = Number(this.accountBalance.totalEur.toFixed(2));
            } else if (type == "credit") {
                this.accountBalance.totalCzk += amount;
                this.accountBalance.totalEur += amount / this.#exchangeRate;
                //this.accountBalance.totalEur = Number(this.accountBalance.totalEur.toFixed(2));
            }
            

        } else if (currency == "EUR") {
            if (type == "debit") {
                this.accountBalance.totalEur -= amount;
                this.accountBalance.totalCzk -= amount * this.#exchangeRate;
                //this.accountBalance.totalCzk = Number(this.accountBalance.totalEur.toFixed(2));

            } else if (type == "credit") {
                this.accountBalance.totalEur += amount;
                this.accountBalance.totalCzk += amount * this.#exchangeRate;
                //this.accountBalance.totalCzk = Number(this.accountBalance.totalCzk.toFixed(2));

            }
        }
    }
    
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

    compareByIds(...ids) {
        if (ids.length < 2) {
            console.log("Chybí ID transakcí k porovnání.");
            return;
        }

        let transactions = ids.map(function (ranking) {
            return this.transactions.find(function (t) {
                return t.ranking === ranking;
            }, this);
        }, this);

        //let transactions = ids.map(id => this.transactions.find(t => t.id === id));

        let firstTransaction = transactions[0];
        let allTransactionsAreEqual = transactions.every(function (t) {
            return this.compareTransactions2(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
        }, this); //pri šipkove metodě neni potřeba mit toto this

        if (allTransactionsAreEqual) {
            console.log(`Všechny transakce s ID ${ids.join(", ")} jsou stejné.`);
        } else {
            console.log(`Transakce s ID ${ids.join(", ")} se liší.`);
        };
    }

    compareTransactions2(transaction1, transaction2) {
        return (
            transaction1.amount === transaction2.amount &&
            transaction1.currency === transaction2.currency &&
            transaction1.type === transaction2.type
        );
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

