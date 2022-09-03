"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controllers/user.controllers");

const userRouter = (0, _express.Router)();
userRouter.get('/random', _user.getRandomUser);
userRouter.get('/all', _user.getAllUsers);
userRouter.post('/save', _user.createUser); // userRouter.route('/:id')
//     .get(getOneProductController)
//     .delete(verifyJWT, isAdmin, deleteProductController)

var _default = userRouter;
exports.default = _default;