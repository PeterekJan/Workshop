

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


//funguje stejně jako ...


app.post("/credit", function (req, res) {

    let body = req.body;

    if (internetBanking == null) {
        res.status(400).send(error(400, "You need to create internet banking first."))

    } else {

        internetBanking.credit(body.amount, body.currency)

        res.send(internetBanking.getOutputData())
    }
});
