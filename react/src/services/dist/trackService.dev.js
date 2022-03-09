"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTracks = getTracks;
exports.getTrack = getTrack;

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = _interopRequireDefault(require("../config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiEndpoint = _config["default"] + "/tracks";

function getTracks() {
  return _httpService["default"].get(apiEndpoint);
}

function trackUrl(id) {
  return "".concat(apiEndpoint, "/").concat(id);
}

function getTrack(trackId) {
  return _httpService["default"].get(trackUrl(trackId));
}