compareAmounts(amount, currency, amount2, currency2){
    if(currency == 'CZK' && currency2 == 'EUR'){
        amount2 = amount2 * this.exchangeRate;
    }
    if(currency == 'EUR' && currency2 == 'CZK'){
        amount = amount * this.exchangeRate;
    }
    return amount == amount2        

}

printCompareAmounts(){
    console.log("Compare two payment: ")
    console.log(` ${this.compareAmounts()}`)
}


console.log(banking.compareAmounts(10,"EUR", 2650, "CZK"))

banking.printCompareAmounts()

//proc to vypisuje TRUE???


//////proc je tam nula na konci? taky v funkce_reduce.js ...

getTotal(currency) {
    return this.transaction.reduce(function(total, transaction) {

        if(transaction.type == "Credit") {
            return total + transaction[currency];
        }else if(transaction.type == "Debit"){
            return total - transaction[currency];
        }
    },0).toFixed(2)
}

