import { validateString, validateNumber } from "./Helpers.js";
import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";

export class InternetBanking {

    owner;
    accountBalance = {
        totalEur: 0,
        totalCzk: 0
    };
    transactions = [];



    constructor(owner) {

        if (!(owner instanceof Owner)) {
            throw "Owner must be instance of class Owner.";
        }

        this.owner = owner;
    }

    pushTransaction(item) {
        if (!(item instanceof Transaction)) {
            throw "Transaction must be instance of class Transaction."
        }

        this.transactions.push(item);
        this.writeTotal(item.currency, item.type, item.amount);

    }

    //zde udelat validaci amount == kladne
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

    getTotal() {
        let total = 0;
        return this.transactions.reduce(function (total, transaction) {
            if (transaction.currency === currency) {
                if (transaction.type == "debit") {
                    return total - transaction.amount;
                } else if (transaction.type == "credit") {
                    return total + transaction.amount;
                }
            }
        }, 0);
    }

    writeTotal(currency, type, amount) {
        if (currency == "EUR") {
            if (type == "debit") {
                this.accountBalance.totalEur -= amount;
            } else if (type == "credit") {
                this.accountBalance.totalEur += amount;
            }
        } else if (currency == "CZK") {
            if (type == "debit") {
                this.accountBalance.totalCzk -= amount;
            } else if (type == "credit") {
                this.accountBalance.totalCzk += amount;
            }
        }
    }

}
