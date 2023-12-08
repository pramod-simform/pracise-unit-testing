// add.js
function add(a, b) {
  validateInput(a, b);
  const convertedA = convertToNumber(a);
  const convertedB = convertToNumber(b);
  checkNumberRange(convertedA);
  checkNumberRange(convertedB);
  return performAddition(convertedA, convertedB);
}

function validateInput(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Please provide valid numbers!");
  }
}

function convertToNumber(num) {
  const convertedNum = +num;
  if (isNaN(convertedNum)) {
    throw new Error("Please provide valid numbers!");
  }
  return convertedNum;
}

function checkNumberRange(num) {
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    throw new Error("Can not proceed with number outside safe range!");
  }
}

function performAddition(a, b) {
  return a + b;
}

module.exports = add;