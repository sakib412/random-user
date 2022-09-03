"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = exports.readFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readFile = (relPath = '../db/users.json') => {
  const str = _fs.default.readFileSync(_path.default.join(__dirname, relPath), {
    encoding: 'utf-8'
  });

  return JSON.parse(str);
};

exports.readFile = readFile;

const writeFile = (data, relPath = '../db/users.json') => {
  _fs.default.writeFileSync(_path.default.join(__dirname, relPath), JSON.stringify(data));
};

exports.writeFile = writeFile;