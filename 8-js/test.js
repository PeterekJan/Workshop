class InternetBanking {

    ratio = 26.50
    accounBalance = null;
    all_payment = [];
    debit_payment = [];
    credit_payment = [];
    comparison = null;
    
    
    constructor(count,currency) {

        //this.timestamp = timestamp;
        this.count = count;
        this.currency = currency;


    }

    toCZK (){
        
    }

    creditPayment(count,currency){
        if(currency == 'CZK'){
            this.all_payment.push(count);
            this.credit_payment.push(count);
        }else if(currency == 'EU'){
            this.all_payment.push(count*this.ratio);
            this.credit_payment.push(count*this.ratio);
        };
    }
    debitPayment(count,currency){
        if(currency == 'CZK'){
            this.all_payment.push(-count);
            this.debit_payment.push(-count);
        }else if(currency == 'EU'){
            this.all_payment.push(-count*this.ratio);
            this.debit_payment.push(-count*this.ratio);
        };
    }

    countAll(){
        var suma = 0;
        for(var i = 0; i < this.all_payment.length; i++){
            suma += this.all_payment[i] 
        }
        this.accounBalance = suma

    }

    // comparison(count,currency,count2,currency2){
    //     var count = 0
    //     var count2 = 0
        
    //     if(currency == "EU" ){
    //         count = count* this.ratio
    //     }
    //     if(currency2 == "EU" ){
    //         count2 = count2 * this.ratio
    //     };

    //     if(count === count2){
    //         return true
    //     }else{
    //         return false
    //     }
        




   // }

    

    
}




var result = new InternetBanking()

result.creditPayment(20,"CZK")
result.creditPayment(20,"EU")
result.debitPayment(15,"CZK")
result.debitPayment(20,"EU")

//result.comparison(20,"EU",20,"EU")


result.countAll()
console.log(result)
