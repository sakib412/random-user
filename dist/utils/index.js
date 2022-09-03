"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.randChoice = randChoice;

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!  

  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}