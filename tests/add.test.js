const add = require("../src/add");

describe("add module test suite", () => {
  it("should return valid addition result", () => {
    //arrange
    const num1 = 2;
    const num2 = 2;
    const expected = 4;

    //act
    const act = add(num1, num2);

    //assert
    expect(act).toBe(expected);
  });

  //Codium
  it("should handle negative integer inputs", () => {
    //arrange
    const num1 = -2;
    const num2 = -2;
    const expected = -4;

    //act
    const act = add(num1, num2);

    //assert
    expect(act).toBe(expected);
  });

  //Codium
  it("should handle one negative and one positive integer inputs", () => {
    //arrange
    const num1 = -2;
    const num2 = 2;
    const expected = 0;

    //act
    const act = add(num1, num2);

    //assert
    expect(act).toBe(expected);
  });

  // Codium
  it("should return the sum of two decimal numbers", () => {
    // arrange
    const num1 = 2.5;
    const num2 = 3.7;
    const expected = 6.2;

    // act
    const result = add(num1, num2);

    // assert
    expect(result).toBe(expected);
  });

  //Codium
  it("should throw an error if one or both arguments are null", () => {
    // arrange
    const num1 = null;
    const num2 = 3;
    const expectedErrorMessage = "Please provide valid numbers!";

    // act
    function callAddFunction() {
      add(num1, num2);
    }

    // assert
    expect(callAddFunction).toThrowError(expectedErrorMessage);
  });

  // Codium
  it("should throw an error if one or both arguments are undefined", () => {
    // arrange
    const num1 = undefined;
    const num2 = 3;
    const expectedErrorMessage = "Please provide valid numbers!";

    // act
    function callAddFunction() {
      add(num1, num2);
    }

    // assert
    expect(callAddFunction).toThrowError(expectedErrorMessage);
  });

  // Codium
  it("should throw an error if one or both arguments are NaN", () => {
    // arrange
    const num1 = NaN;
    const num2 = 2;
    const errorMessage = "Please provide valid numbers!";

    // act
    function callAddFunction() {
      add(num1, num2);
    }

    // assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  // Codium
  it("should throw an error if one or both arguments are boolean", () => {
    // arrange
    const num1 = true;
    const num2 = false;
    const errorMessage = "Please provide valid numbers!";

    // act
    function callAddFunction() {
      add(num1, num2);
    }

    // assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  it("should throw an error if one or both arguments are string", () => {
    //arrange
    const num1 = "2";
    const num2 = 2;
    const errorMessage = "Please provide valid numbers!";

    // act
    function callAddFunction() {
      add(num1, num2);
    }

    // assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  it("should return invalid addition result for invalid result", () => {
    //arrange
    const num1 = 2;
    const num2 = 2;
    const expected = 5;

    //act
    const act = add(num1, num2);

    //assert
    expect(act).not.toBe(expected);
  });

  it("should throw error if one of or both numbers are not numbers", () => {
    //arrange
    const num1 = "abc";
    const num2 = 2;
    const errorMessage = "Please provide valid numbers!";

    //act
    function callAddFunction() {
      add(num1, num2);
    }

    //assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  it("should throw error if one of or both numbers are too large", () => {
    //arrange
    const num1 = 9999999999999999;
    const num2 = 1;
    const errorMessage = "Can not proceed with number outside safe range!";

    //act
    function callAddFunction() {
      add(num1, num2);
    }

    //assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  it("should throw error if one of or both numbers are too small", () => {
    //arrange
    const num1 = -9999999999999999;
    const num2 = 1;
    const errorMessage = "Can not proceed with number outside safe range!";

    //act
    function callAddFunction() {
      add(num1, num2);
    }

    //assert
    expect(callAddFunction).toThrow();
    expect(callAddFunction).toThrowError(errorMessage);
  });

  it("should throw exception if one of the argument missing", () => {
    //arrange
    const num1 = 2;

    //act
    function callAddFunction() {
      add(num1);
    }

    //assert
    expect(callAddFunction).toThrow();
  });

  it("should throw exception if one of the argument missing with error exact message", () => {
    //arrange
    const num1 = 2;
    const errorMessage = "Please provide valid numbers!";

    //act
    function callAddFunction() {
      add(num1);
    }

    //assert
    expect(callAddFunction).toThrowError(errorMessage);
  });
});
