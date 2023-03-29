
//transaction
if(currency != "CZK" && currency != "EUR") {
    throw "Only CZK and EUR is supported";
};

if(type != "credit" && type != "debit") {
    throw "Only credit and debit transaction are allowed";
};   