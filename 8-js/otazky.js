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


