"use strict";

/**
 * Capitalizes the first letter and lowercases the rest
 * @param {string} value
 * @returns {string}
 */
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/**
 * Returns a formatted full name
 * @param {string} first
 * @param {string} last
 * @returns {string}
 */
function fullName(first, last) {
  return `${capitalize(first)} ${capitalize(last)}`;
}

console.log(fullName("павеЛ", "тАРаСоВ"));
