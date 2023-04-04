class Data {
    array = [];
    total = 0;
    
    // toto je metoda - modifikuje interní stav objektu / instance třídy. Nemá return
    pushValue(value) {
        this.array.push(value);
        
        // abych nemusel pokaždé volat writeTotal(), tak to zavolám tady, což mi zajistí, že se to vypočte pokaždé, když do toho pole něco přidám
        this.writeTotal();
    }
    
    // tohle je funkce, má return a vrací nějaká data, sama žádná data nemodifikuje
    getTotal() {
        return this.array.reduce(function(total, value) {
            return total + value
        }, 0);
    }
    
    // to samé co výše, jenom demonstrativně ukazuje delší zápis s dočasným uložením do proměnné
    getTotalAlternative() {
        let totalValue = this.array.reduce(function(total, value) {
            return total + value
        }, 0);

        return totalValue;
    }

    // opět metoda, nemá return. Volá fci getTotal(), aby získala finální součet a její hodnotu přiřadí / uloží do this.total
    writeTotal() {
        this.total = this.getTotal();
    }
}

let dataObject = new Data();

dataObject.pushValue(1);
console.log(dataObject);

dataObject.pushValue(3);
console.log(dataObject);