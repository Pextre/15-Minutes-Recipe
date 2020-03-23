const mongoose = require("mongoose");

const Recipes = mongoose.model("Recipes");

module.exports = {
  create: async (req, res) => {
    const { name, recipesImageUrl, urlYouTube, ingredients, directions } = req.body;
    try {
      const data = await Recipes.create({
        name,
        recipesImageUrl,
        urlYouTube,
        ingredients,
        directions
      });
      return res.json(data);
    } catch (error) {
      return res.status(400).send({ "error": error.message });
    }
  },
  index: async (req, res) => {
    const { page = 1 } = req.query;
    const limit = 100;
    const data = await Recipes.paginate({}, { page, limit });
    return res.json(data);
  },
  getOne: async (req, res) => {
    const { id } = req.query;
    const { name, urlYouTube, ingredients } = req.body;

    const hasId = (id == undefined || id == null || id === '') ? false : true;
    const hasName = (name == undefined || name == null || name === '') ? false : true;
    const hasUrlYouTube = (urlYouTube == undefined || urlYouTube == null || urlYouTube === '') ? false : true;
    const hasIngredients = (ingredients == undefined || ingredients == null || ingredients.lenght === 0) ? false : true;


    if (hasId) {
      try {
        const data = await Recipes.findById(id);
        return res.json(data);
      } catch (error) {
        if (error.name === "CastError")
          return res.send({ "error": "Invalid id! Length or id type is invalid" });
      }
    }
    else if (hasName || hasUrlYouTube || hasIngredients) {
      let data = { "message": "No data found" }
      if (!hasName)
        data = await Recipes.findOne({ urlYouTube, ingredients }) || data;
      else if (!hasIngredients)
        data = await Recipes.findOne({ name, urlYouTube }) || data;
      else if (!hasUrlYouTube)
        data = await Recipes.findOne({ name, ingredients }) || data;
      else
        data = await Recipes.findOne({ name, ingredients, urlYouTube }) || data;
      return res.json(data);
    }
    else {
      return res.status(400).send({ "error": "Use method GET" });
    }
  }
}