import { InternetBanking} from "./myLib/InternetBanking.js";
import { Transaction } from "./myLib/Transaction.js";
import { error, validateString, validateNumber, isValid } from "./myLib/Helpers.js";
import { Owner } from "./myLib/Owner.js";

import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();  //ulozena konfigurace serveru
app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní

app.get("/Hello", function (req, res) {

    res.send({ result: "Hello" })  //vytvoření endpointu, zkouškove poslaní zpravy

});

/*******************************/

let internetBanking = null;


app.get("/", function (req, res) {

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))
    } else {
        res.send(internetBanking)
    }
});


app.post("/create-IB", function (req, res) {

    let body = req.body;

    try {

        let owner = new Owner(body.name) //body.money
        internetBanking = new InternetBanking(owner)

        res.sendStatus(201)

    } catch (e) {

        res.status(400).send({ error: e })
    }
});

app.post("/credit-2", function (req, res) {

    let body = req.body;

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))
    } else {

        validateNumber(body.amount)
        validateString(body.currency)
        let newCredit = new Transaction(body.amount, body.currency, "credit")

        internetBanking.pushTransaction(newCredit)

        res.send(internetBanking)
    }
});

app.post("/credit", function (req, res) {

    let body = req.body;

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))

    } else {

        internetBanking.credit(body.amount, body.currency)

        res.send(internetBanking)
    }
});

app.post("/debit", function (req, res) {
    let body = req.body

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))

    } else {

        internetBanking.debit(body.amount, body.currency)

        res.send(internetBanking)
    }
});




app.post("/sameTransactionsByRanking", function(req, res) {
        
    try {
        if(internetBanking == null) {
            throw "Need to create internetBanking first"
        }

        let ids = req.body;

        res.send({result: internetBanking.sameTransactionsByRanking(ranking)});

    } catch(e){

        res.status(400).send(error(400,e))
    }
    
  });
  













// app.post("/compareByIds", function (req, res) {

//     let body = req.body;

//     if (internetBanking == null) {
//         res.status(400).send(error(400, "You need to create internet banking first."))
//     if (transactions == null) {
//             res.status(400).send(error(400, "You need to create transactions first."))
//     } else {

//         internetBanking.compareByIds(...ids);
//         res.send(internetBanking);
       
//         }
//     }
// });





















/*

app.post("/credit", function (req, res) {

    let body = req.body;

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





app.listen(3000, function () {  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
    console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
});
