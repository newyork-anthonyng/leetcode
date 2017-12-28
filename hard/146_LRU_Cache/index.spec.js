const myModule = require("./");
const { Node, LRUCache } = myModule;

it("should handle one item in cache", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);

  const result = cache.get(1);
  expect(result).toEqual(1);
});

it("should handle two items in cache", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);

  const result = cache.get(1);
  expect(result).toEqual(1);
});

it("should empty out cache when full", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.put(3, 3);

  const result = cache.get(1);
  expect(result).toEqual(-1);
});

it("should empty out correct item when full and an item was retrieved", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1, 1);
  cache.put(3, 3);

  const result = cache.get(2);
  expect(result).toEqual(-1);
});

it("should empty out correct item when full and retrieving multiple times", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1, 1);
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);

  cache.put(4, 4);
  expect(cache.get(1)).toEqual(-1);

  expect(cache.get(3)).toEqual(3);
  expect(cache.get(4)).toEqual(4);
});

it("should work", () => {
  const cache = new LRUCache(2);
  cache.put(2, 1);
  cache.put(2, 2);
  expect(cache.get(2)).toEqual(2);
  cache.put(1, 1);
  cache.put(4, 1);
  expect(cache.get(2)).toEqual(-1);
});

it("should work 2", () => {
  const cache = new LRUCache(1);
  cache.put(2, 1);
  expect(cache.get(2)).toEqual(1);
  cache.put(3, 2);
  expect(cache.get(2)).toEqual(-1);
  expect(cache.get(3)).toEqual(2);
});

it("should work 3", () => {
  const cache = new LRUCache(2);
  cache.get(2);
  cache.put(2, 6);
  cache.get(1);
  cache.put(1, 5);
  cache.put(1, 2);
  cache.get(1);
  expect(cache.get(2)).toEqual(6);
});

fit("should work 4", () => {
  const action = [
    "LRUCache",
    "put",
    "put",
    "put",
    "put",
    "put",
    "get",
    "put",
    "get",
    "get",
    "put",
    "get",
    "put",
    "put",
    "put",
    "get",
    "put",
    "get",
    "get",
    "get",
    "get",
    "put",
    "put",
    "get",
    "get",
    "get",
    "put",
    "put",
    "get",
    "put",
    "get",
    "put",
    "get",
    "get",
    "get",
    "put",
    "put",
    "put",
    "get",
    "put",
    "get",
    "get",
    "put",
    "put",
    "get",
    "put",
    "put",
    "put",
    "put",
    "get",
    "put",
    "put",
    "get",
    "put",
    "put",
    "get",
    "put",
    "put",
    "put",
    "put",
    "put",
    "get"
  ];
  const inputs = [
    [10],
    [10, 13],
    [3, 17],
    [6, 11],
    [10, 5],
    [9, 10],
    [13],
    [2, 19],
    [2],
    [3],
    [5, 25],
    [8],
    [9, 22],
    [5, 5],
    [1, 30],
    [11],
    [9, 12],
    [7],
    [5],
    [8],
    [9],
    [4, 30],
    [9, 3],
    [9],
    [10],
    [10],
    [6, 14],
    [3, 1],
    [3],
    [10, 11],
    [8],
    [2, 14],
    [1],
    [5],
    [4],
    [11, 4],
    [12, 24],
    [5, 18],
    [13],
    [7, 23],
    [8],
    [12],
    [3, 27],
    [2, 12],
    [5],
    [2, 9],
    [13, 4],
    [8, 18],
    [1, 7],
    [6],
    [9, 29],
    [8, 21],
    [5],
    [6, 30],
    [1, 12],
    [10],
    [4, 15],
    [7, 22],
    [11, 26],
    [8, 17],
    [9, 29],
    [5]
  ];
  const expected = [
    null,
    null,
    null,
    null,
    null,
    null,
    -1,
    null,
    19,
    17,
    null,
    -1,
    null,
    null,
    null,
    -1,
    null,
    -1,
    5,
    -1,
    12,
    null,
    null,
    3,
    5,
    5,
    null,
    null,
    1,
    null,
    -1,
    null,
    30,
    5,
    30,
    null,
    null,
    null,
    -1,
    null,
    -1,
    24,
    null,
    null,
    18,
    null,
    null,
    null,
    null,
    -1,
    null,
    null,
    18,
    null,
    null,
    -1,
    null,
    null,
    null,
    null,
    null,
    18,
  ];

  const cache = new LRUCache(inputs[0][0]);
  for (let i = 1; i < action.length; i++) {
    const currentAction = action[i];
    const currentInputs = inputs[i];
    const expectedResult = expected[i];

    const result = cache[currentAction].apply(null, currentInputs);
    if (currentAction === "get") {
      expect(result).toEqual(expectedResult);
    }
  }
});
