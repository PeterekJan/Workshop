import { validateString, validateNumber } from "./Helpers.js";
import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";


export class InternetBanking {

    owner;
    totalCzk = 0;
    totalEur = 0;


    transactions = [];
    #exchangeRate = 26.50;


    constructor(owner) {

        if (!(owner instanceof Owner)) {
            throw "Owner must be instance of class Owner.";
        }

        this.owner = owner;
    }

    get getTotalCzk() {
        validateNumber(this.totalCzk);
        return Math.round(this.totalCzk * 100) / 100;
    }

    get getTotalEur() {
        validateNumber(this.totalEur);
        return Math.round(this.totalEur * 100) / 100;
    }

    pushTransaction(item) {
        if (!(item instanceof Transaction)) {
            throw "Transaction must be instance of class Transaction.";
        };

        item.setRanking(this.transactions.length + 1); //při pushovani transakce zvyší ranking v transakci +1 ( +1 je pouse start přičítani od 1)
        this.transactions.push(item);
        this.writeTotal(item.currency, item.type, item.amount);
    }

    credit(amount, currency) {
        validateNumber(amount);
        validateString(currency);
        this.pushTransaction(new Transaction(amount, currency, "credit"));
    }

    debit(amount, currency) {
        validateNumber(amount);
        validateString(currency);
        this.pushTransaction(new Transaction(amount, currency, "debit"));
    }


    writeTotal(currency, type, amount) {

        if (currency == "CZK") {
            if (type == "debit") {
                this.totalCzk -= amount;
                this.totalEur -= amount / this.#exchangeRate;
            } else if (type == "credit") {
                this.totalCzk += amount;
                this.totalEur += amount / this.#exchangeRate;
            };


        } else if (currency == "EUR") {
            if (type == "debit") {
                this.totalEur -= amount;
                this.totalCzk -= amount * this.#exchangeRate;

            } else if (type == "credit") {
                this.totalEur += amount;
                this.totalCzk += amount * this.#exchangeRate;
            };
        };
    }

    filterTransactionsByRanking(rankings) {
        return this.transactions.filter(function (transaction) {
            return rankings.includes(transaction.ranking);
        });
    }

    compareTransactions3(rankings) {
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

    //porovnani 1Transakce s každou transakci
    compareTransactions5(rankings) {

        // filtrujeme transakce podle zadaných rankingů
        let filteredTransactions = this.transactions.filter(function (transaction) {
            return rankings.includes(transaction.ranking);
        });
        // slice vybere 2 člen aby netestoval 0. s 0. indexem
        return filteredTransactions.slice(1).every(function (transaction) {
            return transaction.getHash() == filteredTransactions[0].getHash();
        });
    }

    getOutputData() {
        return {
            owner: this.owner,
            CzkBalance: this.getTotalCzk,
            EurBalance: this.getTotalEur,
            transactions: this.transactions

        };
    }


}

