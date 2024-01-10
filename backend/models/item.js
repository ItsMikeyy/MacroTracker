const mongoose = require("mongoose")
const Schema = mongoose.Schema

const nutritionSchema = new Schema({
    name: String,
    calories: Number,
    servingSize: Number,
    protein: Number,
    fat: Number,
    sodium: Number,
    cholesterol: Number,
    sugar: Number,
    calcium: Number,
    iron: Number,
    va: Number,
    vc: Number,
    vd: Number,
  });

  const itemModel = new mongoose.model("item", nutritionSchema)
  module.exports = itemModel;