"use strict";

/**
 * Generates a chess board of size x * x
 * @param {number} x
 * @returns {string[][]}
 */
function generateChessBoard(x) {
  const board = [];

  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      if ((i + j) % 2 === 0) {
        row.push(".");
      } else {
        row.push("#");
      }
    }
    board.push(row);
  }

  return board;
}

module.exports = generateChessBoard;
