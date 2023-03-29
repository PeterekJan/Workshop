import { Owner } from "./Owner.js";
import { Transaction } from "./Transaction.js";

export class InternetBanking {

  owner;

  transactions = [];

  constructor(owner) {

    if( !(owner instanceof Owner)){
      throw "Owner must be instance of class Owner.";
    }

    this.owner = owner;

  }

  transaction(array) {
    if (!(array instanceof Transaction)) {
        throw "Transaction must be instance of class Transaction."
    }


    this.transactions.push(array);
    
}

        
      



}