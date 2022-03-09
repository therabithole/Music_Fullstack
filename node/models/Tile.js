const Joi = require("joi");
const mongoose = require("mongoose");

const tileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
});

const Tile = mongoose.model("Tile", tileSchema);

function validateTile(tile) {
  const schema = {
    name: Joi.string().min(2).max(50),
  };

  return Joi.validate(genre, schema);
}

exports.tileSchema = tileSchema;
exports.Tile = Tile;
exports.validate = validateTile;
