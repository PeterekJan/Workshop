import { InternetBanking } from "./myLib/InternetBanking.js";
import { Transaction } from "./myLib/Transaction.js";
import { error, validateString, validateNumber, isValid } from "./myLib/Helpers.js";
import { Owner } from "./myLib/Owner.js";

import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();  //ulozena konfigurace serveru
app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní


/*******************************/

let internetBanking = null;


app.get("/", function (req, res) {

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))
    } else {
        res.send(internetBanking.getOutputData())
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

        res.send(internetBanking.getOutputData())
    }
});


app.post("/credit", function (req, res) {

    let body = req.body;

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))

    } else {

        internetBanking.credit(body.amount, body.currency)

        res.send(internetBanking.getOutputData())
    }
});


app.post("/debit", function (req, res) {
    let body = req.body

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))

    } else {

        internetBanking.debit(body.amount, body.currency)

        res.send(internetBanking.getOutputData())
    }
});


//porovnani transakci a nasledny jejich vypis
app.post("/compareTransactions3", function (req, res) {
    let ids = req.body;

    try {
        if (internetBanking == null) {
            res.status(400).send(error(400, "Need to create internetBanking first"));
        } else if (internetBanking.transactions.length == 0) {
            res.status(400).send(error(400, "Need to create at least 2 transactions first"));

        }
        //res.send(ids)
        res.send({ result: internetBanking.compareTransactions3(ids) });

    } catch (e) {

        res.status(400).send(error(400, e))
    }

});


//porovnani 1. transakce s ostatnimi
app.post("/compareTransactions5", function (req, res) {
    let ids = req.body;

    try {
        if (internetBanking == null) {
            res.status(400).send(error(400, "Need to create internetBanking first"));
        } else if (internetBanking.transactions.length == 0) {
            res.status(400).send(error(400, "Need to create at least 2 transactions first"));

        }
        //res.send(ids)
        res.send({ result: internetBanking.compareTransactions5(ids) });

    } catch (e) {

        res.status(400).send(error(400, e))
    }

});

app.listen(3000, function () {  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
    console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
});
