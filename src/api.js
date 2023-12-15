async function fetchDataFromAPI() {
  return await fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}

async function processData() {
  try {
    const data = await fetchDataFromAPI();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  processData,
  fetchDataFromAPI,
};
