const reverseString = require("../src/reverseString");

describe("reverseString method test suite", () => {
  let sut;

  beforeEach(() => {
    sut = reverseString;
  });

  it("should return the correct reverse string", () => {
    const string = "abc";
    const expected = "cba";

    const result = sut(string);

    expect(result).toBe(expected);
  });
  
  it("should not fail even pass the blank string", () => {
    const string = "";
    const expected = "";
    
    const result = sut(string);
    
    expect(result).toBe(expected);
  });

  it("should return the incorrect reverse string", () => {
    const string = "abc";
    const expected = "abc";

    const result = sut(string);

    expect(result).not.toBe(expected);
  });

  it("should throw exception for the number input", () => {
    const string = 1;
    const expectedMessage = "str.split is not a function";

    let result = () => sut(string);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw exception for the undefined value", () => {
    const string = undefined;
    const expectedMessage = "Cannot read properties of undefined (reading 'split')";

    let result = () => sut(string);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw exception for the null value", () => {
    const string = null;
    const expectedMessage = "Cannot read properties of null (reading 'split')";

    let result = () => sut(string);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });
});
