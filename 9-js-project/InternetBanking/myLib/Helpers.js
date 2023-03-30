
// //transaction
// if(currency != "CZK" && currency != "EUR") {
//     throw "Only CZK and EUR is supported";
// };

// if(type != "credit" && type != "debit") {
//     throw "Only credit and debit transaction are allowed";
// };


export function isUndefined(...arg) {

    arg.forEach(function (value) {

        if (typeof value === "undefined") {

            throw "Missing argument";
        }
    });
}

export function isValid(...arg) {

    arg.forEach(function (value) {

        if (typeof value === "undefined" || value.length === 0) {

            throw "Missing argument.";
        }
    });
}

export function validateNumber(...arg) {

    arg.forEach(function (value) {
        if (isNaN(value)) {

            throw "Value has to be numeric.";
        }
        if (value < 0) {

            throw "Value can't be negative"
        }
    });
}

export function validateString(...arg) {

    arg.forEach(function (value) {
        if (typeof value !== 'string') {

            throw "Value has to be string.";
        }
    });
}

export function error(status, msg) {  //error handling, pro opakovani error msg
    var err = new Error();

    err.status = status;
    err.message = msg;

    return err;
}