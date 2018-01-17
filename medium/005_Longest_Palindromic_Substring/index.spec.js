const myModule = require("./");
const longestPalindrome = myModule.longestPalindrome;

it("should work with odd-numbered palindromes", () => {
  expect(longestPalindrome("babad")).toEqual("bab");
});

it("should work with even-numbered palindromes", () => {
  expect(longestPalindrome("cbbd")).toEqual("bb");
});
