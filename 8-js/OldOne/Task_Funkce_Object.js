//h) Objekty

//1. Nastudujte si co jsou to třídy (objekty) a jak se v JS zapisují - vytvořte třídu ``Car``
//2. Tato třída bude mít 3 atributy, které bude potřeba zadat během inicializace objektu.
//    - ``brand``
//    - ``model``
//    - ``year``
class Car{
    constructor(brand,model,year){
        this.brand = brand,
        this.model = model,
        this.year = year
    };

    output(brand,model,year){
        return brand, model - year
    }
};










//3. Třída bude mít funkci s názvem ``output``, jejíž návratová hodnota bude "``brand``, ``model`` - rok výroby: ``year``"
