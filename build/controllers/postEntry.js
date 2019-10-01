"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postNew = function postNew(req, res) {
  var Ids = _entryModel["default"].map(function (item) {
    return item.id;
  });

  var newId = Ids.length + 1;
  var newItem = {
    id: newId,
    title: req.body.title,
    createdOn: new Date()
  };

  _entryModel["default"].push(newItem);

  res.status(201).json({
    status: 201,
    message: 'entry successfully posted',
    data: newItem
  });
};

var _default = postNew;
exports["default"] = _default;