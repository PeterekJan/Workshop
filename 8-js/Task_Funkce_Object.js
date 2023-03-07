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

// 4. Vytvořte objekt ``Statistics``, který bude implementovat fce z bodu ``f6``. Plus jednu hlavní fci ``calculate``.
// Ta bude mít jeden vstupní argument typu array a její návratová hodnota bude právě objekt viz ``f6``.
// Volání potom proběhne jako ``var result = Statistics().calculate([5,9,-9,-16,4])``


class Statistics{
    constructor(count,min,max,total,avg,modus,median){
        this.count = null,
        this.min = null,
        this.max = null,
        this.total = null,
        this.avg = null,
        this.modus = null,
        this.median = null,

    };
};

var result = Statistics().calculate([5,9,-9,-16,4])