"use strict";

/**
 * Prints a countdown from the given number to zero and then logs "Старт!"
 * @param {number} initialCount
 */
function startRocketCountdown(initialCount) {
  while (initialCount >= 0) {
    console.log(initialCount);
    initialCount--;
  }
  console.log("Старт!");
}

module.exports = startRocketCountdown;
