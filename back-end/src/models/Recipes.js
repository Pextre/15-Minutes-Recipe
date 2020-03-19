const mongoose = require('mongoose');

/**
 * {
    name: `Receita ${i}`,
    key: i,
    date: createDateString(),
    ingredients: ["rice", "bean", "penaut"],
    directions: ["rice", "bean", "penaut"]
    }
 */

const RecipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  recipesImageUrl: {
    type: String,
    required: true
  },
  urlYouTube: {
    type: String,
    required: false
  },
  ingredients: [String],
  directions: [String]
});

mongoose.model("Recipes", RecipesSchema);