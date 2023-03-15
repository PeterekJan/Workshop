class InternetBanking {
    constructor() {
      this.transactions = [];
      this.balance = {
        CZK: 0,
        EUR: 0
      };
      this.exchangeRate = 26.50;
    }
  
    addCreditOperation(timestamp, amount, currency) {
      try {
        if (currency !== 'CZK' && currency !== 'EUR') {
          throw new Error(`Neplatná měna: ${currency}`);
        }
        if (currency === 'EUR') {
          amount = amount * this.exchangeRate;
        }
        this.transactions.push({
          type: 'credit',
          timestamp,
          amount,
          currency
        });
        this.balance[currency] += amount;
      } catch (error) {
        console.error(`Chyba při přidávání kreditní operace: ${error.message}`);
      }
    }
  
    addDebitOperation(timestamp, amount, currency) {
      try {
        if (currency !== 'CZK' && currency !== 'EUR') {
          throw new Error(`Neplatná měna: ${currency}`);
        }
        if (currency === 'EUR') {
          amount = amount * this.exchangeRate;
        }
        this.transactions.push({
          type: 'debit',
          timestamp,
          amount,
          currency
        });
        this.balance[currency] -= amount;
      } catch (error) {
        console.error(`Chyba při přidávání debetní operace: ${error.message}`);
      }
    }
  
    compareAmounts(amount1, currency1, amount2, currency2) {
      try {
        if (currency1 !== 'CZK' && currency1 !== 'EUR') {
          throw new Error(`Neplatná měna: ${currency1}`);
        }
        if (currency2 !== 'CZK' && currency2 !== 'EUR') {
          throw new Error(`Neplatná měna: ${currency2}`);
        }
        if (currency1 === 'EUR') {
          amount1 = amount1 * this.exchangeRate;
        }
        if (currency2 === 'EUR') {
          amount2 = amount2 * this.exchangeRate;
        }
        return amount1 === amount2;
      } catch (error) {
        console.error(`Chyba při porovnávání částek: ${error.message}`);
      }
    }
  
    printAllTransactions() {
      console.log('Všechny transakce:');
      this.transactions.forEach(transaction => {
        console.log(`${transaction.timestamp} - ${transaction.type} - ${transaction.amount} ${transaction.currency}`);
      });
    }
  
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
    bank.addCreditOperation('2022-01-02 11:00:00', 10, 'EUR');
  
    console.log(bank)