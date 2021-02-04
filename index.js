const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const restaurants = require("./restaurants.json");
const markets = require("./markets.json");
const shops = require("./shops.json");
const exampleMarket = require("./examples/market.json");
const exampleShops = require("./examples/shops.json");
app.use(cors());

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

app.get("/market", (req, res) => {
  res.send(exampleMarket);
});

app.get("/shops/:id", (req, res) => {
  const id = req.params.id;
  res.send(exampleShops[id]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
