import { Car } from "./myLib/Car.js"
import { Garage } from "./myLib/Garage.js";
import { Owner } from "./myLib/Owner.js";

import {error} from "./myLib/Helpers.js";

import express from "express";
import bodyParser from "body-parser";

let garage = null;  //globalni promenná
const app = express();  //ulozena konfigurace serveru

app.use(bodyParser.json()); //automaticke parsovani do json v restovém rozhraní

app.get("/", function(req, res) {    // 

    // res.send({result: "Hello"})  //vytvoření endpointu, zkouškove poslaní zpravy

    if(garage == null){
        res.status(400).send(error(400,"You need to create garage first."))
    } else {
        res.send(garage)
    }
});



app.post("/create-garage", function(req, res){ 

    let body = req.body;

    try {

        garage = new Garage(new Owner(body.name, body.money));

        res.sendStatus(201);

    } catch (e) {

        res.status(400).send(error(400,e));
    }

});


app.post("/buy-car", function(req, res) {

    let body = req.body

    try {

        garage.buyCar(new Car(garage.getNewCarId(), body.brand, body.model, body.year, body.price));

        res.send({
            cars: garage.cars,
            moneyAvailable: garage.moneyAvailable
        });

    } catch (e) {

        res.status(400).send(error(400, e));
        
    }
});

app.listen(3000, function(){  //naslouchaní na portu 3000, vypsani do konzole pro usnadněni
    console.log("Example app server listening on localhost port 3000. Try http://localhost:3000");
});





// let car = new Car(1, "Mazda", "6", 2020, 1000000 );

// console.log(car.output);




// try {

//     garage = new Garage(new Owner("Jan Peterek", 100000000));

//     let car = new Car (1, "Mazda", "6", 2020, 1000000);

//     garage.buyCar(car);

//     console.log(garage)

// }catch(e) {

//     console.log(e);
//     console.log(garage)
// }