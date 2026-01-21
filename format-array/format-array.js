"use strict";

/**
 * Converts an array of numbers into a string joined by arrows
 * @param {number[]} arr
 * @returns {string}
 */
const formatArray = (arr) => {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      result += arr[i] + " -> ";
    } else {
      result += arr[i];
    }
  }

  return result;
};

module.exports = formatArray;
