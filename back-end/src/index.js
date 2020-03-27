const cors = require("cors");
const express = require("express");

const App = express();
App.use(express.json());
App.use(cors());


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://oministack:oministack@oministack-7rhd9.mongodb.net/oministack?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
require("./models/Recipes");

const recipes = require("./controllers/recipes");
App.post("/recipes", recipes.create);
App.get("/recipes", recipes.index);
App.post("/recipe", recipes.getOne);

App.listen(8080, () => {
  console.log("App Inicializado em localhost:8080/recipes");
});
