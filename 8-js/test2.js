class InternetBanking {
    constructor() {
      this.transactions = [];
      this.balance = {
        CZK: 0,
        EUR: 0
      };
      this.exchangeRate = 26.50;
    }
  
    // Funkce pro přidání kreditní operace
    addCreditOperation(timestamp, amount, currency) {
      if (currency === 'EUR') {
        amount = amount * this.exchangeRate; // přepočet na CZK
      }
      this.transactions.push({
        type: 'credit',
        timestamp,
        amount,
        currency
      });
      this.balance[currency] += amount; // aktualizace zůstatku
    }
  
    // Funkce pro přidání debetní operace
    addDebitOperation(timestamp, amount, currency) {
      if (currency === 'EUR') {
        amount = amount * this.exchangeRate; // přepočet na CZK
      }
      this.transactions.push({
        type: 'debit',
        timestamp,
        amount,
        currency
      });
      this.balance[currency] -= amount; // aktualizace zůstatku
    }
  
    // Funkce pro porovnání dvou částek v různých měnách
    compareAmounts(amount1, currency1, amount2, currency2) {
      if (currency1 === 'EUR') {
        amount1 = amount1 * this.exchangeRate; // přepočet na CZK
      }
      if (currency2 === 'EUR') {
        amount2 = amount2 * this.exchangeRate; // přepočet na CZK
      }
      return amount1 === amount2;
    }
  
    // Funkce pro výpis všech transakcí
    printAllTransactions() {
      console.log('Všechny transakce:');
      this.transactions.forEach(transaction => {
        console.log(`${transaction.timestamp} - ${transaction.type} - ${transaction.amount} ${transaction.currency}`);
      });
    }
  
    // Funkce pro výpis zůstatku na účtu
    printBalance() {
      console.log(`Zůstatek na účtu:`);
      console.log(`CZK: ${this.balance.CZK} Kč`);
      console.log(`EUR: ${this.balance.EUR} €`);
    }
  
    // Funkce pro výpis všech kreditních operací
    printCreditOperations() {
      console.log('Kreditní operace:');
      this.transactions.filter(transaction => transaction.type === 'credit').forEach(transaction => {
        console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
      });
    }
  
    // Funkce pro výpis všech debetních operací
    printDebitOperations() {
      console.log('Debetní operace:');
      this.transactions.filter(transaction => transaction.type === 'debit').forEach(transaction => {
        console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
      });
    }
  }
  
  // Použití objektu InternetBanking
  const bank = new InternetBanking();
  
  // Přidání několika transakcí
  bank.addCreditOperation('2022-01-01 10:00:00', 1000, 'CZK');
  bank.addCreditOperation('2022-01-02 11:00:00', 50, 'EUR');

  console.log(bank)
  
  