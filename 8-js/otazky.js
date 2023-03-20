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