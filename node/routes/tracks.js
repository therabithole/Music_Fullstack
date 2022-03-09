const { Track, validate } = require("../models/Track");
const { Tile } = require("../models/Tile");
const validateObjectId = require("../middleware/validateObjectId");

const express = require("express");
const router = express.Router();

const { uploadBuffer } = require("../middleware/multer"); // not used

router.get("/", async (req, res) => {
  const tiles = await Track.find();
  res.send(tiles);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const tile = await Tile.findById(req.body.tileId);
  if (!tile) return res.status(400).send("Invalid Tile.");

  const track = new Track({
    name: req.body.name,
    singer: req.body.singer,
    album: req.body.album,
    tile: {
      _id: tile._id,
      name: tile.name,
    },
    imgId: req.body.imgId,

    // albumPic:  //change to multer file.id
  });

  await track.save();
  return res.send(track);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const tile = await Track.findById(req.params.id).select("-__v");
  if (!tile)
    return res.status(404).send("The track with the given ID was not found.");

  res.send(tile);
});

module.exports = router;
