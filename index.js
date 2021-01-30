const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const restaurants = require("./restaurants.json");
const markets = require("./markets.json");
const shops = require("./shops.json");

app.get("/", (req, res) => {
  res.send("Sepetteslim Test Api by Hasan Aktas!");
});

app.get("/markets", (req, res) => {
  res.send(markets);
});

app.get("/restaurants", (req, res) => {
  res.send(restaurants);
});

app.get("/shops", (req, res) => {
  res.send(shops);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
