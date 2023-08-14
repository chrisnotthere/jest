const sum = require('./sum');

// describe - used to group tests together
describe("sum", () => {
  // simple addition test
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
  
  // .toBe - used to compare primitive values
  // .toEqual - used to compare objects and arrays, not their references

  test("object assignment", () => {
    const obj = {};
    
    // fails because obj is not the same object as the one in the test
    // expect(obj).toBe({});
    
    // passes because toEqual checks the value of an object, not the reference
    expect(obj).toEqual({});
  })
})

describe("truthy and falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeUndefined();
    expect(n).toBeNull();
    expect(n).toBeDefined();
  })

})

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3); // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3);
    expect(value).toBeCloseTo(0.30000000000000004);
    expect(value).toBeCloseTo(0.299);
  })
})

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  })

  it("but there is a 'stop' in Christoph", () => {
    expect("Christoph").toMatch(/stop/);
  })
})

describe("arrays", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer"
  ];

  it("the shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer");
    expect(new Set(shoppingList)).toContain("beer");
  })
})

describe("exceptions", () => {
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }

  it("compiling android goes as expected", () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow("you are using the wrong JDK");
    expect(compileAndroidCode).toThrow(/JDK/);
  })
})

