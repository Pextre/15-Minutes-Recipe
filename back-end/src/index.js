const express = require("express");
const App = express();


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/recipes", { useNewUrlParser: true, useUnifiedTopology: true });
require("./models/Recipes");

const recipes = require("./controllers/recipes");
App.get("/recipes", recipes.index);

App.listen(8080, () => {
  console.log("App Inicializado em localhost:8080/recipes");
});