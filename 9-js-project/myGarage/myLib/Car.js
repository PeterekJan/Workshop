import { isValid, validateNumber, validateString } from "./Helpers.js";

export class Car {

    id;

    brand;
    model;
    year;

    price;

	constructor(id, brand, model, year, price) {

        isValid(id, brand, model, year, price);
        validateNumber(id, year, price);
        validateString(brand, model)

        this.id = id;

        this.brand = brand;
        this.model = model;
        this.year = year;

        this.price = price;
          
    }
    get output() {
        return "#" + this.id + " " + this.brand + " " + this.model + " (" + this.year + ") - price: " + this.price 
    }

}