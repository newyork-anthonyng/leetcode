const myModule = require("./");
const { isNumber } = myModule;

it("should return true for a number", () => {
  expect(isNumber("0")).toEqual(true);
});

it("should return true for a number with spaces", () => {
  expect(isNumber(" 0.1 ")).toEqual(true);
});

it("should return false for a string with just letters", () => {
  expect(isNumber("abc")).toEqual(false);
});

it("should return false for a string with a letter and a number", () => {
  expect(isNumber("1 a")).toEqual(false);
});

it("should return true for scientific numbers", () => {
  expect(isNumber("2e10")).toEqual(true);
});

it("should return false for an empty string", () => {
  expect(isNumber(" ")).toEqual(false);
});
