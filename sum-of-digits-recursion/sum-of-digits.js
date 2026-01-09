"use strict";

function sumOfDigits(number) {
  if (number === 0) {
    return 0;
  }

  const lastDigit = number % 10;
  const remainingNumber = Math.floor(number / 10);

  return lastDigit + sumOfDigits(remainingNumber);
}

console.log(sumOfDigits(123));
