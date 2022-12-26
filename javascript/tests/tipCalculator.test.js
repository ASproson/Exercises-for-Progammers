const tipCalculator = require("../tipCalculator");

describe("tipCalculator()", () => {
  it("returns number", () => {
    expect(typeof tipCalculator(2, 3)).toEqual("number");
  });
  it("returns 5 when passed 2, 3", () => {
    expect(tipCalculator(2, 3)).toEqual(5);
  });
});
