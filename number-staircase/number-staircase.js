"use strict";

/**
 * Prints a number staircase using nested loops
 * @param {number} n
 */
const printNumberStaircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let numbersRow = "";
    for (let j = 0; j < i; j++) {
      numbersRow += " " + (i + j);
    }
    console.log(numbersRow.trim());
  }
};

module.exports = printNumberStaircase;
