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
})

it("should work 3", () => {
  const cache = new LRUCache(2);
  cache.get(2);
  cache.put(2, 6);
  cache.get(1);
  cache.put(1, 5);
  cache.put(1, 2);
  cache.get(1);
  expect(cache.get(2)).toEqual(6);
})
