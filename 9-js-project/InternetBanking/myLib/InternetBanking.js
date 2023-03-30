import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";

export class InternetBanking {

  owners;

  transactions = [];

  constructor(owners) {

    if( !(owners instanceof Owner)){
      throw "Owner must be instance of class Owner.";
    }

    this.owners = owners;

  }

  transaction(array) {
    if (!(array instanceof Transaction)) {
        throw "Transaction must be instance of class Transaction."
    }


    this.transactions.push(array);
    
}

        
      



}