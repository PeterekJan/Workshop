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
