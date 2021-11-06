const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/blockchain", function (req, res) {
  res.send("Hello World");
});

app.post("/transaction", function (req, res) {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

app.get("/mine", function (req, res) {});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
