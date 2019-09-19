"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modifyEntry = function modifyEntry(res, req) {
  var found = _entryModel["default"].find(function (a) {
    return a.id === parseInt(req.params.id);
  });

  if (found) {
    var update = {
      id: found.id,
      title: req.body.title
    };

    var Index = _entryModel["default"].indexOf(found);

    _entryModel["default"].splice(Index, 1, update);

    return res.status(202).json({
      status: 202,
      message: 'already updated'
    });
  }
};

var _default = modifyEntry;
exports["default"] = _default;