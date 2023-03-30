import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";

export class InternetBanking {

    owner;
    transactions = [];
    total;

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

    }

    //zde udelat validaci amount == kladne
    credit(amount, currency) {
        this.pushTransaction(new Transaction(amount, currency, "credit"));
    }

    debit(amount, currency) {
        this.pushTransaction(new Transaction(amount, currency, "debit"));
    }

}
