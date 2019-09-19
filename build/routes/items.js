"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getAll = _interopRequireDefault(require("../controllers/getAll"));

var _getEntrybyId = _interopRequireDefault(require("../controllers/getEntrybyId"));

var _postEntry = _interopRequireDefault(require("../controllers/postEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/api/v1/entries', _getAll["default"]);
router.get('/api/v1/entries/:id', _getEntrybyId["default"]);
router.post('/api/v1/entries', _postEntry["default"]);
var _default = router;
exports["default"] = _default;