const tipCalculator = require("../tipCalculator");

describe("tipCalculator()", () => {
  const answerOne = "Bill: 100, Tip: 10%, Total: 110";
  const answerTwo = "Bill: 100, Tip: 15%, Total: 115";
  const answerThree = "Bill: 57, Tip: 15%, Total: 65.55";
  const answerFour = "Bill: 233, Tip: 17%, Total: 272.61";
  const answerFive = "Please enter a number";

  it("returns a string", () => {
    expect(typeof tipCalculator(2, 3)).toEqual("string");
  }),
    it("returns answerOne when passed 100, 10", () => {
      expect(tipCalculator(100, 10)).toEqual(answerOne);
    }),
    it("returns answerTwo when passed 100, 15", () => {
      expect(tipCalculator(100, 15)).toEqual(answerTwo);
    }),
    it("returns answerThree when passed 57, 15", () => {
      expect(tipCalculator(57, 15)).toEqual(answerThree);
    }),
    it("returns answerFour when passed 233, 17", () => {
      expect(tipCalculator(233, 17)).toEqual(answerFour);
    }),
    it("returns error when passed aaaa, wwww", () => {
      expect(tipCalculator("aaaa", "wwww")).toEqual(answerFive);
    }),
    it("returns error when passed negative num", () => {
      expect(tipCalculator(-2, -10)).toEqual(answerFive);
    });
});
