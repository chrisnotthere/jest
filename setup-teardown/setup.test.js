let animals = ["elephant", "zebra", "bear", "tiger"];

// beforeAll is a function that runs before all tests
beforeAll(() => {
  // console.log('before all tests')
});

afterEach(() => {
  // console.log('after each test')
});

afterAll(() => {
  // console.log('after all tests')
});

describe("animals array", () => {

  // here we are resetting the animals array to its original state
  // it will only run before each test within this describe block
  beforeEach(() => {
    // console.log('before each test')
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  it("should have a length of 4", () => {
    expect(animals.length).toBe(4);
  });

  it('should not contain the string "monkey"', () => {
    expect(animals.includes("monkey")).toBe(false);
  });

  it("should add animal to end of array", () => {
    animals.push("monkey");
    expect(animals[animals.length - 1]).toBe("monkey");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("cat");
    expect(animals[0]).toBe("cat");
  });

  it("should remove animal from end of array", () => {
    animals.pop();
    expect(animals[animals.length - 1]).toBe("bear");
  });
});

describe("testing something else", () => {
  it("true should be true", () => {
    expect(true).toBe(true);
  });
});
