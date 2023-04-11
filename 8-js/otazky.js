let transactions = ids.map(function(id) {
    return this.transactions.find(function(t) {
      return t.id === id;
    });
  }.bind(this));

//let transactions = ids.map(id => this.transactions.find(t => t.id === id));


//funkce bind...


//řešeni bez funkce bind
let transactions = ids.map(function(id) {
    return this.transactions.find(function(t) {
      return t.id === id;
    }, this);
  }, this);


  //////////////////////////////////////////////////////////////////////////////////////////////

      // compareByIds(...ids) {
    //     if (ids.length < 2) {
    //         console.log("Chybí ID transakcí k porovnání.");
    //         return;
    //     }

    //     let transactions = ids.map(function (id) {
    //         return this.transactions.find(function (t) {
    //             return t.id === id;
    //         }, this);
    //     }, this);

    //     //let transactions = ids.map(id => this.transactions.find(t => t.id === id));

    //     let firstTransaction = transactions[0];
    //     let allTransactionsAreEqual = transactions.every(function (t) {
    //         return this.compareTransactions(t, firstTransaction) //Pokud není nalezena žádná transakce se zadaným ID, tak proměnná t si zachová hodnotu null. Na konci funkce se pak zkontroluje, zda proměnná t má hodnotu různou od null. Pokud ano, znamená to, že byla nalezena transakce se zadaným ID
    //     }, this); //pri šipkove metodě neni potřeba mit toto this

    //     if (allTransactionsAreEqual) {
    //         console.log(`Všechny transakce s ID ${ids.join(", ")} jsou stejné.`);
    //     } else {
    //         console.log(`Transakce s ID ${ids.join(", ")} se liší.`);
    //     };
    // }

    // compareTransactions(transaction1, transaction2) {
    //     return (
    //         transaction1.amount === transaction2.amount &&
    //         transaction1.currency === transaction2.currency &&
    //         transaction1.date === transaction2.date &&
    //         transaction1.type === transaction2.type
    //     );
    // }
