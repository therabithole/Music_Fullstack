const Joi = require("joi");
const mongoose = require("mongoose");
const { tileSchema } = require("./Tile");

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  imgId: {
    type: String, // replace with multer gridFSsteam
  },
  singer: {
    type: String,
  },
  album: {
    type: String,
  },
  tile: {
    type: tileSchema,
  },
});

const Track = mongoose.model("Track", trackSchema);

function validateTrack(track) {
  const schema = {
    name: Joi.string().min(2).max(50),
    singer: Joi.string(),
    album: Joi.string(),
    imgId: Joi.string(),
    tileId: Joi.objectId().required(),
  };

  return Joi.validate(track, schema);
}

exports.trackSchema = trackSchema;
exports.Track = Track;
exports.validate = validateTrack;
