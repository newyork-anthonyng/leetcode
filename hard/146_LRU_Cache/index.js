/*
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 */

function Node(value) {
  this.previous = null;
  this.next = null;
  this.value = value;
}

function LRUCache(size) {
  let currentSize = 0;
  let root = null;
  let dictionary = {};

  function get(key) {
    const currentNode = dictionary[key] || null;

    if (currentNode === null) return -1;

    // Move node to the front of the list
    if (currentNode !== root) {
      // detach node from where it was...
      const oldNext = currentNode.next;
      const oldPrevious = currentNode.previous;
      if (oldNext !== null) oldNext.previous = oldPrevious;
      if (oldPrevious !== null) oldPrevious.next = oldNext;

      // ...and put it in the front of the list
      currentNode.next = root;
      currentNode.previous = null;
      root.previous = currentNode;
      root = currentNode;
    }

    return currentNode.value.value;
  }

  function removeFirstNodeWithKey(key) {
    const currentNode = dictionary[key] || null;

    if (currentNode !== null) {
      const oldPrevious = currentNode.previous;
      const oldNext = currentNode.next;

      if (oldPrevious !== null) oldPrevious.next = oldNext;
      if (oldNext !== null) oldNext.previous = oldPrevious;

      if (oldPrevious === null && oldNext === null) root = null;
    }

    return currentNode !== null;
  }

  function removeLastNodeFromRoot() {
    let currentNode = root;
    while (currentNode !== null) {
      if (currentNode.next === null) break;

      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      if (currentNode === root) {
        root = null;
      } else {
        if (currentNode.previous !== null) {
          currentNode.previous.next = null;
        }
      }

      dictionary[currentNode.value.key] = undefined;
    }
  }

  function put(key, value) {
    const didRemoveDuplicate = removeFirstNodeWithKey(key);
    if (didRemoveDuplicate) {
      currentSize -= 1;
    }

    if (currentSize >= size) {
      removeLastNodeFromRoot();
      currentSize -= 1;
    }

    // put new node in the front of the list
    const newNode = new Node({ key, value });
    if (root) root.previous = newNode;
    newNode.next = root;
    root = newNode;

    currentSize += 1;
    dictionary[key] = newNode;
  }

  return {
    get,
    put
  }
}


module.exports = {
  LRUCache
}
