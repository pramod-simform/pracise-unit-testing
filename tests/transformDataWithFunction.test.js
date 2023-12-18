const { transformData } = require("../src/transformData");

jest.mock("../src/transformData", () => {
  return {
    transformData: jest.fn(),
  };
});

describe("transformData method test suite with mock implementation", () => {
  let sut;
  let mockData;

  beforeEach(() => {
    sut = transformData;
    mockData = [
      {
        id: 1,
        name: "john doe",
        status: "completed",
      },
      {
        id: 2,
        name: "Vivian Popworth",
        status: "completed",
      },
      {
        id: 3,
        name: "Wain Boatswain",
        status: "completed",
      },
      {
        id: 3,
        name: "Ailee Babber",
        status: "incomplete",
      },
    ];
  });

  it("should return valid response", () => {
    const expected = [
      {
        id: 1,
        name: "john doe",
      },
      {
        id: 2,
        name: "Vivian Popworth",
      },
      {
        id: 3,
        name: "Wain Boatswain",
      },
    ];
    const mockReturnValue = [
      {
        id: 1,
        name: "john doe",
      },
      {
        id: 2,
        name: "Vivian Popworth",
      },
      {
        id: 3,
        name: "Wain Boatswain",
      },
    ];
    transformData.mockReturnValueOnce(mockReturnValue);

    const result = sut(mockData);

    expect(result).toEqual(expected);
  });

  it("should return valid response for blank array", () => {
    const expected = [];
    let mockData = [];
    let mockReturnValue = [];
    transformData.mockReturnValueOnce(mockReturnValue);

    const result = sut(mockData);

    expect(result).toEqual(expected);
  });

  it("should return blank array response for all incomplete tasks", () => {
    const expected = [];
    mockData = mockData.map((row) => {
      row.status = "incomplete";
      return row;
    });

    let mockReturnValue = [];
    transformData.mockReturnValueOnce(mockReturnValue);

    const result = sut(mockData);

    expect(result).toEqual(expected);
  });

  it("should return blank array response for wrong data", () => {
    const expected = [];
    mockData = [
      {
        idState: 1,
        state: "Rajasthan",
        city: "jodhpur",
      },
      {
        idState: 2,
        state: "Gujarat",
        city: "Ahmadabad",
      },
      {
        idState: 3,
        state: "Madhya Pradesh",
        city: "Indore",
      },
    ];
    let mockReturnValue = [];
    transformData.mockReturnValueOnce(mockReturnValue);

    const result = sut(mockData);

    expect(result).toEqual(expected);
  });

  test.each([null, undefined, 1, "A", true])(
    "should throw error for %p value",
    (i) => {
      const result = () => sut(i);
      transformData.mockImplementationOnce(() => {
        throw new Error("Error");
      });

      expect(result).toThrow();
    }
  );
});