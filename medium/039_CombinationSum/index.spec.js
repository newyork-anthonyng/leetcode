const myModule = require("./");
const combinationSum = myModule.combinationSum;
const optimized = myModule.optimized;

const checkAnswer = (expected, result) => {
  expect(expected.length).toEqual(result.length);

  expected.forEach((expectedAnswer, i) => {
    const wasFound = result.find(ele => {
      return JSON.stringify(ele) === JSON.stringify(expectedAnswer);
    });

    expect(wasFound).not.toBeUndefined();
  });
};

describe("combinationSum", () => {
  it("should work with target=7, candidates=[2,3,6,7]", () => {
    const target = 7;
    const candidates = [2, 3, 6, 7];
    const result = [[7], [2, 2, 3]];

    checkAnswer(combinationSum(candidates, target), result);
  });

  it("test case 2", () => {
    const target = 69;
    const candidates = [48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23];
    const result = [[20,20,29],[20,23,26],[20,24,25],[20,49],[22,22,25],[22,23,24],[22,47],[23,23,23],[23,46],[24,45],[26,43],[28,41],[29,40],[32,37],[33,36]];

    checkAnswer(combinationSum(candidates, target), result);
  });
});

describe("optimized", () => {
  it("should work with target=7, candidates=[2,3,6,7]", () => {
    const target = 7;
    const candidates = [2, 3, 6, 7];
    const result = [[7], [2, 2, 3]];

    checkAnswer(optimized(candidates, target), result);
  });

  it("test case 2", () => {
    const target = 69;
    const candidates = [48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23];
    const result = [[20,20,29],[20,23,26],[20,24,25],[20,49],[22,22,25],[22,23,24],[22,47],[23,23,23],[23,46],[24,45],[26,43],[28,41],[29,40],[32,37],[33,36]];

    checkAnswer(optimized(candidates, target), result);
  });
});

