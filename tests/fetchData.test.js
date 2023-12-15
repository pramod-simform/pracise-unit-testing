const fetchData = require("../src/fetchData");

describe("Fetch Data module test suite", () => {
  it("should resolve with correct data and message when param1 equals param2", () => {
    //arrange
    const param1 = 1;
    const param2 = 1;
    const expectedMessage = "Data received!";

    //act
    const sut = fetchData(param1, param2);

    //assert
    sut.then((data) => {
      expect(data).toBe(expectedMessage);
    });
    expect(sut).toBeInstanceOf(Promise);
  });

  it("should reject with different values and error message when param1 does not equal param2", () => {
    //arrange
    const param1 = 1;
    const param2 = 2;
    const expectedMessage = "Data did not matched!";

    //act
    const sut = fetchData(param1, param2);

    //assert
    sut.catch((message) => {
      expect(message).toBe(expectedMessage);
    });
  });

  //Codium
  it("should resolve the Promise after 1 second", async () => {
    //arrange
    //jest.useFakeTimers();
    
    const promise = fetchData();

    //jest.advanceTimersByTime(1000);

    //act
    const result = await promise;

    //assert
    expect(result).toBe("Data received!");
  });
});
