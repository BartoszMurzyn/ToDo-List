const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

var items = [];

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    
    var day = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var date = day.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: date, newListItems: items});
});


app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    console.log(req.body.newItems);
    console.log(items);
    res.redirect("/");
});



app.listen(3000, function() {
    console.log("Server working on port 3000");
});
