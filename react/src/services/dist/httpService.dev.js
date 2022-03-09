"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].interceptors.response.use(null, function (error) {
  var expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log(error);

    _reactToastify.toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

var _default = {
  get: _axios["default"].get,
  post: _axios["default"].post,
  put: _axios["default"].put,
  "delete": _axios["default"]["delete"]
};
exports["default"] = _default;