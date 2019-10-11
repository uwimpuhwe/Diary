"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allEntries = function allEntries(req, res) {
  res.status(200).json({
    status: 200,
    entry: _entryModel["default"]
  });
};

var _default = allEntries;
exports["default"] = _default;