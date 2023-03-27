import { validateNumber, validateString } from "./Helpers.js";


export class Owner {

    name;
    money;

    constructor (name, money) {


        validateNumber(money);
        validateString(name)

        this.name = name;
        this.money = money;

    }
}