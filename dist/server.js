"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = require("body-parser");

require("dotenv/config");

var _config2 = _interopRequireDefault(require("./config"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _response = require("./utils/response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Middleware

exports.app = app;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev')); // Routes

app.get('/', (req, res) => {
  res.json((0, _response.successResponse)({
    "message": "Server is running"
  }));
}); // handle errors

app.use(_errorHandler.default);

const start = async () => {
  try {
    app.listen(_config2.default.port, () => {
      console.log(`App listening on PORT: ${_config2.default.port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;