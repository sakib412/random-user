"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successResponse = exports.errorResponse = void 0;

const errorResponse = (message = "Something went worng, Please try again.") => {
  const data = {
    message
  };
  return {
    is_success: false,
    data: data
  };
};

exports.errorResponse = errorResponse;

const successResponse = (data = {}) => {
  return {
    is_success: true,
    data
  };
};

exports.successResponse = successResponse;