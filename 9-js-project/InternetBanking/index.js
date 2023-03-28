import { InternetBanking } from "./myLib/InternetBanking.js";
//import { Transaction } from "./myLib/Transaction.js";
//import { Helpers } from "./myLib/Helpers.js";
//import { Owner } from "../myGarage/myLib/Owner.js";

import express from "express";
import bodyParser from "body-parser";

const app = express();  //ulozena konfigurace serveru
app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní

app.get("/Hello", function(req, res) {    

    res.send({result: "Hello"})  //vytvoření endpointu, zkouškove poslaní zpravy

});


let transactions = [];

app.get("/", function(req, res) { 

    if(transactions == null){
        res.status(400).send(error(400,"You need to create transactions first."))
    } else {
        res.send(transactions)
    }
});


app.post("/transactions", function(req, res){ 

    let body = req.body;

    try {

        transactions = new InternetBanking(body.transactions);

        res.sendStatus(201);

    } catch (e) {

        res.status(400).send(error(400,e));
    }

});

app.post("/credit"), function(req,res) {

    let body = req.body;

    try {

        transactions = new InternetBanking(credit());

        res.sendStatus(201);

    } catch(e) {
    

        res.status(400).send(error(400,e));

    }

}






app.listen(3000, function(){  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
    console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
});
