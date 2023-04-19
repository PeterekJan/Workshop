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

        if (currency == "CZK") {
            if (type == "debit") {
                this.accountBalance.totalCzk -= amount;
                this.accountBalance.totalEur -= amount / this.#exchangeRate;
            } else if (type == "credit") {
                this.accountBalance.totalCzk += amount;
                this.accountBalance.totalEur += amount / this.#exchangeRate;



            }

        } else if (currency == "EUR") {
            if (type == "debit") {
                this.accountBalance.totalEur -= amount;
                this.accountBalance.totalCzk -= amount * this.#exchangeRate;

            } else if (type == "credit") {
                this.accountBalance.totalEur += amount;
                this.accountBalance.totalCzk += amount * this.#exchangeRate;

            }
        }
    }





}
