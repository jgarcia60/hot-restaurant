const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

