//h) Objekty

//1. Nastudujte si co jsou to třídy (objekty) a jak se v JS zapisují - vytvořte třídu ``Car``
//2. Tato třída bude mít 3 atributy, které bude potřeba zadat během inicializace objektu.
//    - ``brand``
//    - ``model``
//    - ``year``

//3. Třída bude mít funkci s názvem ``output``, jejíž návratová hodnota bude "``brand``, ``model`` - rok výroby: ``year``"

class Car{
    constructor(brand,model,year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    };

    output(){
        //return console.log(`${this.brand}, ${this.model} - ${this.year}`)
        return `${this.brand}, ${this.model} - ${this.year}`
    }
};

let car1 = new Car("Hundaj", "i50", 2200)

console.log(car1.output())


console.log("------------------Class Statistics---------------")

// 4. Vytvořte objekt ``Statistics``, který bude implementovat fce z bodu ``f6``. Plus jednu hlavní fci ``calculate``.
// Ta bude mít jeden vstupní argument typu array a její návratová hodnota bude právě objekt viz ``f6``.
// Volání potom proběhne jako ``var result = Statistics().calculate([5,9,-9,-16,4])``


class Statistics{

    array = [];
    object = {
        count:null,
        min: null,
        max: null,
        total: null,
        avg: null,
        mode:[],
        median:null
    };

    constructor(array) {
        this.array = array;
        //this.validate(this.array)
        if(this.validate(this.array)){
            //console.log(this.output())
            this.printOutput()
        }else{
            console.log("Error, array is with invalid input!")
        }

    }
    //Define Validation input

    validate(num) {
        var result = true;

        for(var i = 0; i < num.length; i++) {
            var value = num[i];
            if(isNaN(value)) {
                result = false;
                break;
            }

        }
        return result

    }



    //Define Functions
    getCount() {
        var count = this.array.length;

        return count
    }

    getMin() {
        var min = this.array[0];
        for(var i = 0; i < this.array.length; i++){
            var element = this.array[i]
            if(element < min){
                min = element
            };
        };
        return min;
    }


    getMax() {
        var max = this.array[0];
        for(var i = 0; i < this.array.length; i++){
            var element = this.array[i];
            if(element > max){
                max = element
            };
        };
        return max
    }
    

    getTotal() {
        var total = 0;
        for(var i = 0;i < this.array.length; i++) {
            total += this.array[i];
        };
        return total
    }

    getAvg() {

        //second option

        // var avg = 0;
        // var total = 0;
        // for(var i = 0; i < this.array.length; i++){
        //     total += this.array[i]
        // };
        // avg = total/this.array.length´

        var avg = this.getTotal()/this.getCount();

        return avg        
    }

    getModus() {
        var countArr = {};
        this.array.forEach(function(a) {
            if(countArr[a] === undefined) {
                countArr[a] = 0;
            }
            countArr[a] += 1;
        })
                
        var mode = Object.keys(countArr).filter(function(x) {
            return countArr[x] == Math.max.apply(null, Object.values(countArr))
        })

        //Change array to single value if mode of arr is only one element
        if(mode.length === 1){
            var singleMode = 0;

            // mode.forEach(function(element){
            //     singleMode = element
            // })                    
            return mode[0]

        }else{

            return mode;    
        }
    }



    getMedian() {
        //var sortedArr = [];
        var median = 0;
        var sortedArr = [];

        sortedArr = this.array.sort(function(a,b){
            return a - b;
        })

        if(this.array.length % 2 !== 0 ){    
            median = sortedArr[Math.ceil(this.array.length/2)]


        }else{
            var evenMedian = sortedArr[(sortedArr.length/2)-1]
            var evenMedian2 = sortedArr[sortedArr.length/2]
            median = (evenMedian + evenMedian2)/2             
        };
        
        return median

        
        
    }

 
  //Put values to Object
  output() {

    this.object.count = this.getCount();
    this.object.min = this.getMin();
    this.object.max = this.getMax();
    this.object.total = this.getTotal();
    this.object.avg = this.getAvg();
    this.object.mode = this.getModus();
    this.object.median = this.getMedian();
   

    return this.object;
  }

  printOutput(){
    console.log(this.output())
    //console.log(this.getMedian())
  }

};


var result = new Statistics([8,15,-5,24,8,8])



//console.log(result.output());
//result.printOutput()

//console.log(result.getMedian())

console.log("(-----------------InternetBanking------------------)")
///////////////////////////////////////////////////////////////////////////////////


// class InternetBanking{
//     number = 0;
//     newObject = {
//         Currency: null


//     };
//     constructor(number){
//        this.number = number
//     }

//     kredit(){
//         var array = [];
//         array.push(this.number)

        

//         return array

//     }

//     output(){
//         this.newObject.Currency = this.kredit()

//         return this.newObject
//     }
//     printOutput(){
//         console.log(this.output())
//     }

    
// }
// var result2 = new InternetBanking (25)

// result2.printOutput()


class InternetBanking {
    exchangeRate = 26.50 
    transactions = [];
   
    accountBalance = {
        inCZK: 0,
        inEUR: 0
    };     
    constructor() {

    };


    creditPayment(timestamp, amount, currency) {
        let value = amount
        this.transactions.push({
            ID: this.generateID(),
            type: "Credit",
            timestamp,
            amount,
            currency
        })
        if(currency == "EUR"){
            value = value * this.exchangeRate
        }
        this.accountBalance["inCZK"] += value

    }
    debitPayment(timestamp, amount, currency) {
        let value = amount
        this.transactions.push({
            ID: this.generateID(),
            type: "Debit",
            timestamp,
            amount,
            currency
        })
        if(currency == "EUR"){
            value = value * this.exchangeRate;
        }
        this.accountBalance["inCZK"] -= value;


    }

    generateID() {
        var uniqueID = Math.floor(Math.random() * Date.now()).toString(16);
        return uniqueID
    }

    accountBalanceInEur() {
        var value = this.accountBalance.inCZK / this.exchangeRate;
        this.accountBalance["inEUR"] = value;
        return value
    }

    compareAmounts(amount, currency, amount2, currency2) {
        if(currency == 'CZK' && currency2 == 'EUR') {
            amount2 = amount2 * this.exchangeRate;
        }
        if(currency == 'EUR' && currency2 == 'CZK') {
            amount = amount * this.exchangeRate;
        }
        return amount == amount2        

    }

    returnTransactionId() {
        
        var allTransactionIDs = this.transactions.map(function(transaction) {
            return transaction.ID
        });
        return allTransactionIDs
    }

    compareByID(array) {
        
        array = this.returnTransactionId();
        var isDuplicate = array.some((item, index) => index !== array.indexOf(item));

        if (!isDuplicate) {
            return "Array doesn't contain duplicates.";
        } else {
            return "Array contains duplicates.";
        };
    }

    printcompareByID() {
        console.log("Compare transaction by ID: ");
        console.log(this.compareByID());
    }

    printAllTransaction() {
        console.log("List of all transactions:");
        console.log(this.transactions);
    }

    printAllCreditTransaction() {
        console.log("List of all credit transactions:");
        this.transactions.forEach(function(transaction) {             //vybere hodnoty, ale nevrati je
            if(transaction.type == "Credit") {
                console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
            };
        })
    }

    printAllDebitTransaction() {
        console.log("List of all debit transactions:");
        this.transactions.filter(transaction => transaction.type === "Debit").forEach(transaction => {
          console.log(`${transaction.timestamp} - ${transaction.amount} ${transaction.currency}`);
        });
    }

    printAccountBalance() {
        console.log("Account balance:");
        console.log(this.accountBalance);

    }
    
}
let banking = new InternetBanking();




banking.creditPayment("22.12.2005", 12, "EUR");
banking.creditPayment('5.5.2555', 1500, "CZK");
banking.debitPayment('4.4.2045', 20, "EUR");
banking.debitPayment('1.1.2058', 5, "CZK");
banking.debitPayment('1.1.2058', 0, "CZK");



//banking.compareAmounts(10,"EUR", 50, "CZK")

banking.accountBalanceInEur()
banking.compareByID()

banking.printAllTransaction()
banking.printAccountBalance()
banking.printAllCreditTransaction()
banking.printAllDebitTransaction()
banking.printcompareByID()

console.log(banking.compareAmounts(10,"EUR", 2650, "CZK"))


//console.log(banking);


