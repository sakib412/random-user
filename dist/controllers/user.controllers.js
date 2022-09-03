"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getRandomUser = exports.getAllUsers = exports.createUser = void 0;

var _uuid = require("uuid");

var _utils = require("../utils");

var _file = require("../utils/file");

var _response = require("../utils/response");

const getRandomUser = async (_req, res) => {
  try {
    const users = (0, _file.readFile)();
    const randomUser = (0, _utils.randChoice)(users);
    return res.status(200).json((0, _response.successResponse)(randomUser));
  } catch (err) {
    return res.status(500).json((0, _response.errorResponse)(err.message));
  }
};

exports.getRandomUser = getRandomUser;

const getAllUsers = async (req, res) => {
  try {
    const {
      limit
    } = req.query;
    let users = (0, _file.readFile)();

    if (limit && (0, _utils.isNumeric)(limit)) {
      console.log(limit);
      users = users.slice(0, Number(limit));
    }

    return res.status(200).json((0, _response.successResponse)(users));
  } catch (err) {
    return res.status(500).json((0, _response.errorResponse)(err.message));
  }
};

exports.getAllUsers = getAllUsers;

const createUser = async (req, res) => {
  try {
    const {
      name,
      gender,
      contact,
      address,
      photoUrl
    } = req.body;
    let users = (0, _file.readFile)();
    const index = users.findIndex(user => user.name === name && user.contact === contact);

    if (index > -1) {
      return res.status(409).json((0, _response.errorResponse)('User with this name and contact already exist! Try with a different name or contact'));
    }

    const body = {
      id: (0, _uuid.v4)(),
      name,
      gender,
      contact,
      address,
      photoUrl
    };
    users.push(body);
    (0, _file.writeFile)(users);
    return res.status(201).json((0, _response.successResponse)(body));
  } catch (err) {
    return res.status(500).json((0, _response.errorResponse)(err.message));
  }
};

exports.createUser = createUser;

const updateUser = async (req, res) => {
  try {
    const {
      id,
      name,
      gender,
      contact,
      address,
      photoUrl
    } = req.body;
    let users = (0, _file.readFile)();
    const index = users.findIndex(user => user.id === id);

    if (index < 0) {
      return res.status(404).json((0, _response.errorResponse)('User not found with this id'));
    }

    users[index] = {
      name,
      gender,
      contact,
      address,
      photoUrl
    };
    (0, _file.writeFile)(users);
    return res.status(201).json((0, _response.successResponse)(users[index]));
  } catch (err) {
    return res.status(500).json((0, _response.errorResponse)(err.message));
  }
};

exports.updateUser = updateUser;