export class InternetBanking {

    transactions = [];

    get totalEur() {
       //console.log("------------------------get totalEur--------------------")

        return this.getTotal("EUR");
    }
    
    get totalCzk() {
        return this.getTotal("CZK");
    }

    getTotal(currency) {
        return this.transactions.reduce(function(total, transaction) {
            console.log(transaction[currency])
            if(transaction.type == "credit") {
                return total + transaction[currency];
            }else{
                return total - transaction[currency];
            }
        },0).toFixed(2);
    }

    pushTransaction(transaction) {
        this.transactions.push(transaction)
    }

    credit(date, amount, currency){
        this.pushTransaction(new Transaction(date, amount, currency, "credit"));
    }

    debit(date, amount, currency) {
        this.pushTransaction(new Transaction(date, amount, currency, "debit"));
    }

    compareTransactionIds(transaction1, transaction2) {
        if(transaction1.id === transaction2.id) {
            console.log(`Transaction ${transaction1.id} is the same for both payments.`);
        } else {
            console.log(`Transaction IDs for the two payments are different.`);
        };
    }

    compareByIds(...ids) {
        if (ids.length < 2) {
          console.log("Chybí ID transakcí k porovnání.");
          return;
        }
      
        let transactions = ids.map(function(id) {
            return this.transactions.find(function(t) {
              return t.id === id;
            },this);
          },this);

        //let transactions = ids.map(id => this.transactions.find(t => t.id === id));
             
        let firstTransaction = transactions[0];
        let allTransactionsAreEqual = transactions.every(function(t){
            return this.compareTransactions(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
        },this); //pri šipkove metodě neni potřeba mit toto this
      
        if (allTransactionsAreEqual) {
          console.log(`Všechny transakce s ID ${ids.join(", ")} jsou stejné.`);
        } else {
          console.log(`Transakce s ID ${ids.join(", ")} se liší.`);
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
      
      


    printAllTransaction() {
        console.log("List of all transactions:");
        console.log(this.transactions);
    }

}