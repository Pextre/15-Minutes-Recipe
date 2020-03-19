const mongoose = require("mongoose");

const Recipes = mongoose.model("Recipes");

module.exports = {
  index: async (req, res) => {
    await Recipes.create({
      name: "Ovo Frito",
      recipesImageUrl: "url.com",
      urlYouTube: "url.youtube.com",
      ingredients: ["Ovo de galinha", "Manteiga"],
      directions: ["Ovo de galinha", "Manteiga"]
    });
    const data = await Recipes.find();
    return res.json(data);
  }
}