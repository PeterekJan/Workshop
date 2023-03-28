import { InternetBanking } from "./myLib/InternetBanking.js";
import { Transaction } from "./myLib/Transaction.js";
import { Helpers } from "./myLib/Helpers.js";
import { Owner } from "../myGarage/myLib/Owner.js";

import express from "express";
import bodyParser from "body-parser";

const app = express();  //ulozena konfigurace serveru
app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní








app.listen(3000, function(){  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
    console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
});
