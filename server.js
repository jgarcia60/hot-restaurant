
const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
});


let tables = [];
let waitlist = [];

app.get("/home", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.post("/reserve", (req, res) => {
    if (tables.length >= 5) {
        waitlist.push(req.body);
    } else {
        tables.push(req.body);
    }
    res.json(tables);
    res.json(waitlist)
});