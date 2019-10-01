"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getOne = function getOne(req, res) {
  try {
    var foundEntry = _entryModel["default"].find(function (a) {
      return a.id === parseInt(req.params.id);
    });

    if (foundEntry) {
      res.status(200).json({
        status: 200,
        entry: foundEntry
      });
    }

    if (!foundEntry) {
      res.status(404).json({
        status: 404,
        message: 'entry of that Id does not exist'
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'server'
    });
  }
};

var _default = getOne;
exports["default"] = _default;