const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");
const Grid = require("gridfs-stream");

module.exports = function () {
  const db = config.get("db");
  console.log(db, "db");
  Grid.mongo = mongoose.mongo;

  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
