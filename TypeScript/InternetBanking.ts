class Transaction1 {
    exchangeRate = 26.50;
    ranking = 0;
    id: string;
    date: string;
    amount = 0;
    currency = "";
    type = "";

    constructor(date: string, amount: number, currency: string, type: string) {
        if (currency !== "CZK" && currency !== "EUR") {
            throw new Error("Only CZK and EUR are supported");
        }

        if (type !== "credit" && type !== "debit") {
            throw new Error("Only credit and debit transactions are allowed");
        }

        this.ranking = this.setRanking(0);
        this.id = this.generateID();
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.type = type;
    }

    get EUR(): number {
        if (this.currency === "CZK") {
            return this.amount / this.exchangeRate;
        } else {
            return this.amount;
        }
    }

    get CZK(): number {
        if (this.currency === "CZK") {
            return this.amount;
        } else {
            return this.amount * this.exchangeRate;
        }
    }

    toString(): string {
        return this.amount + this.currency;
    }

    generateID(): string {
        const uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID;
    }

    setRanking(ranking: number): number {
        this.ranking = ranking;
        return this.ranking;
    }
}


class InternetBanking1 {
    transactions: Transaction1[] = [];
    #exchangeRate = 26.5;

    get totalEur(): string {
        return this.getTotal("EUR");
    }

    get totalCzk(): string {
        return this.getTotal("CZK");
    }

    private getTotal(currency: string): string {
        return this.transactions.reduce(function (total, transaction) {
            if (transaction.type === "credit") {
                return total + transaction[currency];
            } else {
                return total - transaction[currency];
            }
        }, 0).toFixed(2);
    }

    pushTransaction(transaction: Transaction1): void {
        transaction.setRanking(this.transactions.length + 1);
        this.transactions.push(transaction);
    }

    credit(date: string, amount: number, currency: string): void {
        this.pushTransaction(new Transaction1(date, amount, currency, "credit"));
    }

    debit(date: string, amount: number, currency: string): void {
        this.pushTransaction(new Transaction1(date, amount, currency, "debit"));
    }

    sameTransactionsByRanking(index1: number, index2: number): void {
        if (this.transactions.length < 2) {
            throw "Chybí ID transakcí k porovnání.";
        }

        if (
            this.transactions[index1].amount === this.transactions[index2].amount &&
            this.transactions[index1].currency === this.transactions[index1].currency &&
            this.transactions[index1].date === this.transactions[index1].date &&
            this.transactions[index1].type === this.transactions[index1].type
        ) {
            console.log(`Transactions with ranking: ${index1} and ${index2} are the same.`);
        } else {
            console.log(`Transaction IDs for the two payments are different.`);
        }
    }

    compareTransactions(index1: number, index2: number): void {

        if (this.transactions[index1].currency === "EUR" && this.transactions[index2].currency === "EUR") {
            if (this.transactions[index1].amount === this.transactions[index2].amount &&
                this.transactions[index1].type === this.transactions[index1].type) {
                console.log(`Transactions with ranking: ${index1} and ${index2} are the same.`);
            } else {
                console.log("aaaaaaaaaaaaaaaaaa");
            }
        } else if (this.transactions[index1].currency === "CZK" && this.transactions[index2].currency === "CZK") {
            if (this.transactions[index1].amount === this.transactions[index2].amount &&
                this.transactions[index1].type === this.transactions[index1].type) {
                console.log(`Transactions with ranking: ${index1} and ${index2} are the same.`);
            } else {
                console.log("bbbbbbbbbbbbbb");
            }
        } else if (this.transactions[index1].currency === "EUR" && this.transactions[index2].currency === "CZK") {
            if ((this.transactions[index1].amount / this.#exchangeRate) === this.transactions[index2].amount &&
                this.transactions[index1].type === this.transactions[index1].type) {
                console.log(`Transactions with ranking: ${index1} and ${index2} are the same.`);
            } else {
                console.log("cccccccccccccccccc");
            }
        } else if (this.transactions[index1].currency === "CZK" && this.transactions[index2].currency === "EUR") {
            if (this.transactions[index1].amount === (this.transactions[index2].amount / this.#exchangeRate) &&
                this.transactions[index1].type === this.transactions[index1].type) {
                console.log(`Transactions with ranking: ${index1} and ${index2} are the same.`);
            } else {
                console.log(`Transaction IDs for the two payments are different.`);
            }
        }
    }

    compareByIds(...rankings: number[]): void {
        if (rankings.length < 2) {
            console.log("Chybí ID transakcí k porovnání.");
            return;
        }

        let transactions = rankings.map((ranking: number) =>
            this.transactions.find((t) => t.ranking === ranking)
        ).filter((t): t is Transaction1 => t !== undefined);

        let firstTransaction = transactions[0];
        let allTransactionsAreEqual = transactions.every((t) =>
            this.compareTransactions2(t, firstTransaction)
        );

        if (allTransactionsAreEqual) {
            console.log(`Všechny transakce s ID ${rankings.join(", ")} jsou stejné.`);
        } else {
            console.log(`Transakce s ID ${rankings.join(", ")} se liší.`);
        }
    }

    compareTransactions2(transaction1: Transaction1, transaction2: Transaction1): boolean {
        return (
            transaction1.amount === transaction2.amount &&
            transaction1.currency === transaction2.currency &&
            transaction1.date === transaction2.date &&
            transaction1.type === transaction2.type
        );
    }
    printAllTransaction(): void {
        console.log("List of all transactions:");
        console.log(this.transactions);
    }

    everyID(): void {
        this.transactions.forEach((transaction) => {
            console.log(transaction.ranking);
        });
    }
}

let IB = new InternetBanking1();

IB.credit("22.2.2022", 20, "CZK");
IB.credit("22.2.2024", 5, "EUR");
IB.credit("22.2.2025", 5, "EUR");
IB.credit("22.2.2025", 5, "CZK");
IB.credit("22.2.2025", 5, "CZK");
IB.debit("22.2.2024", 10, "CZK");
IB.debit("22.2.2025", 1, "EUR");
IB.debit("22.2.2025", 1, "EUR");
IB.debit("22.2.2025", 1, "EUR");

//console.log(banking)

console.log("--------------vypis všech transakci--------------");
IB.printAllTransaction();

console.log("---------------Compare two Transaction---------------");
//let transaction1 = new Transaction("22.2.2022", 20, "CZK", "credit");
//let transaction2 = new Transaction("22.2.2023", 5, "EUR", "credit");

//console.log("transaction1 to EUR: " + transaction1.EUR)
//console.log("transaction2 to CZK: " + transaction2.CZK)

//console.log("Is same " + transaction1 + " and " + transaction2 + " => " + IB.compareTransactionsAmounts(transaction1, transaction2))



console.log("-------- porovnani dvou existujicich (identickych) transakcí podle 'ranking' --------");
IB.sameTransactionsByRanking(2, 3);


console.log("-------- porovnani dvou existujicich (s prepoctem) transakci podle 'ranking' -------- ");
IB.compareTransactions(4, 5);


console.log("----------- výpis zůstatku na účtu (v obou měnách) -----------");
//console.log("EUR: " + IB.totalEur)
//console.log("CZK: " + IB.totalCzk)

console.log("------------------------------------------------------");
//IB.everyID()
//console.log(IB.transactions[5].amount)


//console.log(IB.transactions[1].exchangeRate)

//console.log(IB.transactions[0])
