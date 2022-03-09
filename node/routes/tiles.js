const { Tile, validate } = require("../models/Tile");
const validateObjectId = require("../middleware/validateObjectId");

const mongoose = require("mongoose");
const { uploadBuffer } = require("../middleware/multer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const tiles = await Tile.find();
  res.send(tiles);
});

router.post("/", async (req, res) => {
  const tile = new Tile({
    name: req.body.name,
  });

  await tile.save();
  return res.send(tile);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const tile = await Tile.findById(req.params.id).select("-__v");
  if (!tile)
    return res.status(404).send("The tile with the given ID was not found.");

  res.send(tile);
});

module.exports = router;
