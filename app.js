const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.set('view engine', 'ejs');

let items = [];
let workItems = [];

app.get("/", function (req, res) {

    let day = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let date = day.toLocaleDateString("en-US", options);

    res.render('list', {listTitle: date, newItemsList:items});
});

app.post("/", function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        console.log(items);
        res.redirect("/");
    }
})

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work", newItemsList: workItems})
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function () {
    console.log("Server working");
});