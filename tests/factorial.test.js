const factorial = require("../src/factorial").default;

jest.mock("../src/factorial", () => {
  return {
    default: jest.fn(),
  };
});

describe("factorial method test suite", () => {
  let sut;

  beforeEach(() => {
    sut = factorial;
  });

  it("should return same factorial for 0 and 1 numbers", () => {
    const expected = 1;

    const resultForZero = sut(0);
    const resultForOne = sut(1);

    expect(resultForZero).toBe(expected);
    expect(resultForOne).toBe(expected);
  });

  it("should return valid factorial for other number value", () => {
    const input = 10;
    const expected = 3628800;

    const result = sut(input);

    expect(result).toBe(expected);
  });

  it("should throw error message for negative number value", () => {
    const input = -1;
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for string value", () => {
    const input = "A";
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for string number value", () => {
    const input = "-1";
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for undefined value", () => {
    const input = undefined;
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for null value", () => {
    const input = null;
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for boolean value", () => {
    const input = false;
    const expectedMessage = "Maximum call stack size exceeded";

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });
});

describe("factorial method test suite with mock function", () => {
  let sut;

  beforeEach(() => {
    sut = factorial;
  });

  it("should return same factorial for 0 and 1 numbers", () => {
    const expected = 1;
    factorial.mockReturnValue(1);

    const resultForZero = sut(0);
    const resultForOne = sut(1);

    expect(resultForZero).toBe(expected);
    expect(resultForOne).toBe(expected);
  });

  it("should return valid factorial for other number value", () => {
    const input = 10;
    const expected = 3628800;
    factorial.mockReturnValue(3628800);

    const result = sut(input);

    expect(result).toBe(expected);
  });

  it("should throw error message for negative number value", () => {
    const input = -1;
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementation(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for string value", () => {
    const input = "A";
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementationOnce(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for string number value", () => {
    const input = "-1";
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementationOnce(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for undefined value", () => {
    const input = undefined;
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementationOnce(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for null value", () => {
    const input = null;
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementationOnce(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });

  it("should throw error message for boolean value", () => {
    const input = false;
    const expectedMessage = "Maximum call stack size exceeded";
    factorial.mockImplementationOnce(() => {
      throw new Error("Maximum call stack size exceeded");
    });

    const result = () => sut(input);

    expect(result).toThrow();
    expect(result).toThrow(expectedMessage);
  });
});
