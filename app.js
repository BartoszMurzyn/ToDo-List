const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

let items = []

app.get("/", function (req, res) {

    let day = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let date = day.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: date, newItemsList:items});
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    console.log(items);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server working");
});