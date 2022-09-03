"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _product = require("../controllers/product.controllers");

const productRouter = (0, _express.Router)();
productRouter.route('/').get(_product.getAllProductsController).post(verifyJWT, isAdmin, _product.addProductController);
productRouter.route('/:id').get(_product.getOneProductController).delete(verifyJWT, isAdmin, _product.deleteProductController);
var _default = productRouter;
exports.default = _default;