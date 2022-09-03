"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomUser = void 0;

var _response = require("../utils/response");

var _promises = require("fs/promises");

// import Users from '../db/users.json';
const getRandomUser = async (req, res) => {
  try {
    const randomUser = await (0, _promises.readFile)('../db/users.json', 'utf-8');
    return res.status(201).json((0, _response.successResponse)(randomUser));
  } catch (err) {
    return res.status(500).json((0, _response.errorResponse)(err.message));
  }
};

exports.getRandomUser = getRandomUser;