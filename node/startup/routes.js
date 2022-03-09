const express = require("express");

const tracks = require("../routes/tracks");
const tiles = require("../routes/tiles");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api/tiles", tiles);
  app.use("/api/tracks", tracks);

  app.use(error);
};
