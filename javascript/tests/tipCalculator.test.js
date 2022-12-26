const tipCalculator = require("../tipCalculator");

describe("tipCalculator()", () => {
  it("returns a string", () => {
    expect(typeof tipCalculator(2, 3)).toEqual("string");
  });
});
