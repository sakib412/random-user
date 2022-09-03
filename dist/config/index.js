"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

const env = process.env.NODE_ENV || 'development';
const baseConfig = {
  env,
  isDev: env === 'development',
  port: process.env.PORT || 5000,
  secrets: {}
};
let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;

  case 'prod':
  case 'production':
    envConfig = require('./prod').config;
    break;

  default:
    envConfig = require('./dev').config;
}

var _default = (0, _lodash.merge)(baseConfig, envConfig);

exports.default = _default;