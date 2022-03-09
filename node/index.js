const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 10000 })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 10000,
  })
);

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
