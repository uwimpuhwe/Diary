"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _items = _interopRequireDefault(require("./routes/items"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import router from './server/routes/items';
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var PORT = 4001;
app.use('/', _items["default"]);
app.get('/', function (req, res) {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to myDiary '
  });
}); // app.listen(4001, function() {
//     console.log(`server is running on PORT ${PORT}`);
// });

app.listen(process.env.PORT || 4001, function () {
  return console.log('server running on PORT 4001');
});
var _default = app;
exports["default"] = _default;