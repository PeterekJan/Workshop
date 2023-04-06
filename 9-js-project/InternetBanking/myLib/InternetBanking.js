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

        return this.transactions.reduce(function (total, transaction) {
            if (transaction.currency == currency) { //neni přiřazena currency k dane hodnote 
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

    compareByIds(ids) {

        //napsat znova funkci comapre(vyfiltrovani IDs a validace)

        let transactions = ids.map(function (id) {
            return this.transactions.find(function (t) {
                return t.id === id;
            }, this);
        }, this);

        //validace  podminka delka pole ids == delka transactions
        let firstTransaction = transactions[0];
        let allTransactionsAreEqual = transactions.every(function (t) {
            return this.compareTransactions(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
        }, this); 

        if (allTransactionsAreEqual) {
            return `Všechny transakce s ID ${ids.join(", ")} jsou stejné.`;
        } else {
            return `Transakce s ID ${ids.join(", ")} se liší.`;
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







}
