const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

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

RecipesSchema.plugin(mongoosePaginate);

mongoose.model("Recipes", RecipesSchema);