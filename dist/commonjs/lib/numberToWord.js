"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberToWord = numberToWord;
exports.numberToWordMap = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen'
  /**
   * Return the number word for numbers 1-16.
   * Returns strings or numbers as is if there is no corresponding word.
   * Returns an empty string if value is not a string or number.
   * @param {string|number} value The value to convert to a word.
   * @returns {string}
   */

};
exports.numberToWordMap = numberToWordMap;

function numberToWord(value) {
  var type = (0, _typeof2["default"])(value);

  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}
