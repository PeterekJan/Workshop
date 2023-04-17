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




}
