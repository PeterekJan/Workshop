import { isValid, validateNumber, validateString } from "./Helpers.js";

export class Owner {

    name;
   // money;

    constructor(name) {

        isValid(name);
        validateString(name);
       // validateNumber(money);

        this.name = name;
       // this.money = money;




    }
}