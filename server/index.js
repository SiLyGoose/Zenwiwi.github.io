var express = require('express');
var app = express();
var PORT = 3000;

app.get("/projects/JavKing/src/players/dashboard.html", (req, res) => {
    console.log(req, res);
});

app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup:", err);
    console.log("Server listening on port:", PORT);
});

