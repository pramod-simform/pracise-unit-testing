const { fetchDataFromAPI, processData } = require("../src/api");

jest.mock("../src/api", () => {
  const originalModule = jest.requireActual("../src/api");
  return {
    ...originalModule,
    fetchDataFromAPI: jest.fn(),
    processData: jest.fn(), // Mock fetchDataFromAPI
  };
});

describe("API test suite", () => {
  let sut;
  const mockData = [
    { id: 1, title: "Mock Todo 1", userId: 1, completed: false },
    { id: 2, title: "Mock Todo 2", userId: 2, completed: false },
  ];

  // beforeEach(async () => {
  //   sut = await processData();
  // }, 20000);

  // it("processData returns data from the API in thenable block", async () => {
  //   await processData()
  //     .then((data) => {
  //       // Add expectations here to validate the structure or content of the returned data
  //       expect(data).toBeDefined();
  //       expect(Array.isArray(data)).toBe(true); // Assuming the API returns an array of todos
  //       // Add more specific expectations based on the structure of the returned data
  //     })
  //     .catch((error) => console.log(error));
  // }, 20000);

  // it("should resolve data with some resolved data with async await", () => {
  //   expect(sut).resolves.not.toHaveLength(0);
  // }, 20000);

  test("processData returns data from fetchDataFromAPI", async () => {
    processData.mockReturnValue(Promise.resolve(mockData));

    const processedData = await processData();
    // expect(fetchDataFromAPI).toHaveBeenCalledTimes(1);
    expect(processedData).toEqual(mockData);
  }, 20000);

  test.only("processData handles errors from fetchDataFromAPI", async (done) => {
    const errorMessage = "API Error";
    // fetchDataFromAPI.mockRejectedValue(errorMessage);
    processData.mockRejectedValue(errorMessage); // Mock fetchDataFromAPI to throw an error

    try {
      return await processData().catch((error) => {
        expect(error).toBe(errorMessage);
      });
      console.log("test")

      // If the above line doesn't throw an error, fail the test
      // done("Expected processData to throw an error");
    } catch (error) {
      // // expect(fetchDataFromAPI).toHaveBeenCalledTimes(1);
      // expect(error).toBe(errorMessage);
      done("Expected processData to throw an error");
    }
  }, 60000);
});
