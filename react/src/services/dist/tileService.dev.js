"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTiles = getTiles;
exports.getTile = getTile;
exports.saveTile = saveTile;

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = _interopRequireDefault(require("../config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiEndpoint = _config["default"] + "/tiles";

function getTiles() {
  return _httpService["default"].get(apiEndpoint);
}

function tileUrl(id) {
  return "".concat(apiEndpoint, "/").concat(id);
}

function getTile(tileId) {
  return _httpService["default"].get(tileUrl(tileId));
}

function saveTile(tile) {
  return _httpService["default"].post(tile);
}