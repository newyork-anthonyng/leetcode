/*
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 */

function LRUCache(size) {
  let list = [];

  function get(key) {
    const indexOfItem = list.findIndex((element) => {
      return element.key === key;
    });
    const foundItem = list[indexOfItem];

    if (!foundItem) return -1;

    // remove item from list
    list = list.slice(0, indexOfItem).concat(list.slice(indexOfItem + 1));
    list.unshift(foundItem);

    return foundItem.value;
  }

  function put(key, value) {
    const indexOfItem = list.findIndex((element) => element.key === key);
    if (indexOfItem !== -1) {
      list = list.slice(0, indexOfItem).concat(list.slice(indexOfItem + 1));
    }

    if (list.length >= size) {
      list = list.slice(0, -1);
    }

    list.unshift({ key, value });
  }

  return {
    get,
    put
  }
}

module.exports = {
  LRUCache,
  Node
}
