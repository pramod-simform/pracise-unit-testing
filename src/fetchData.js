// fetchData.js
function fetchData(param1, param2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param1 === param2) {
        resolve("Data received!");
      }
      reject("Data did not matched!");
    }, 1000);
  });
}

module.exports = fetchData;
