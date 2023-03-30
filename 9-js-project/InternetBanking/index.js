import { InternetBanking } from "./myLib/InternetBanking.js";
import { Transaction } from "./myLib/Transaction.js";
import { error } from "./myLib/Helpers.js";
import { Owner } from "./myLib/Owner.js";

import express from "express";
import bodyParser from "body-parser";

const app = express();  //ulozena konfigurace serveru
app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní

app.get("/Hello", function(req, res) {    

    res.send({result: "Hello"})  //vytvoření endpointu, zkouškove poslaní zpravy

});




//let transactions = [];

// app.get("/", function(req, res) { 

//     if(transactions == null){
//         res.status(400).send(error(400,"You need to create transactions first."))
//     } else {
//         res.send(transactions)
//     }
// });

/*

let internetBanking = null;
let moneyAvaiable = 10

try {

    internetBanking = new InternetBanking(new Owner("Jan Peterek", moneyAvaiable))

    let transaction = new Transaction(1,"22.2.2022",20, "CZK", "credit")
    //let transaction2 = new Transaction(2,"24.2.2022",22, "CZK", "credit")

    internetBanking.transaction(transaction)
    //internetBanking.transaction(transaction2)

    console.log(internetBanking)

} catch(e) {

    console.log(e)
    //console.log(internetBanking)
}

*/





// app.listen(3000, function(){  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
//     console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
// });
