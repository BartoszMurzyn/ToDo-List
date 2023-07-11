const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    
    var day = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var date = day.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: date})
});


app.post("/", function (request, respond) {
    console.log(request.body.newItem);
})



app.listen(3000, function() {
    console.log("Server working on port 3000");
});
