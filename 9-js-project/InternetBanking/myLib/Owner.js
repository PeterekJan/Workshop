import { isValid, validateNumber, validateString } from "./Helpers.js";

export class Owner {

    name;
    //money;

    constructor(name, money) {

        isValid(name);
        validateString(name);
        //validateNumber(money);

        this.name = name;
        //this.money = money;




    }
}