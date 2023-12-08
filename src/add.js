// add.js
function add(a, b) {
  if (!a || !b) {
    throw new Error("Please provide both numbers!");
  }

  const result = +a + +b;

  if (isNaN(result)) {
    throw new Error("Please provide valid numbers!");
  }

  if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
    throw new Error("Can not proceed with too large number!");
  }

  if (a < Number.MIN_SAFE_INTEGER || b < Number.MIN_SAFE_INTEGER) {
    throw new Error("Can not proceed with too small number!");
  }
  
  return result;
}

module.exports = add;
