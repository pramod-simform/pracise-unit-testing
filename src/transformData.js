function transformData(inputData) {
  return inputData
    .filter((item) => item.status === "completed")
    .map((item) => ({ id: item.id, name: item.name }));
}

module.exports = {
  transformData,
};
