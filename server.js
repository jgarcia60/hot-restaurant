
const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
});


const reservations = [];
const waitList = [];

app.get("/", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/reserve", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "/reserve.html"));
});

app.get("/tables", function(req, res) {
    // res.send("This works");
    res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/api/tables", (req, res) => {
    res.json({
        reservations: reservations,
        waitList: waitList
    })
})

app.post("/api/reserve", (req, res) => {
    console.log(req.body);
    if (reservations.length >= 5) {
        waitList.push(req.body);
        res.json(false);
    } else {
        reservations.push(req.body);
        res.json(true);
    }
});