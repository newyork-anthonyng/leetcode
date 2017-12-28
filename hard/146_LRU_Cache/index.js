/*
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 */

 // function Node(value) {
 //   this.value = value;
 //   this.next = null;
 //   this.previous = null;
 // }
 //
 // function LRUCache(maxSize) {
 //   let root = null;
 //   let size = 0;
 //
 //   function get(key) {
 //     let current = root;
 //     let answer = -1;
 //
 //     // navigate through list and see if we can find the answer
 //     while (current !== null) {
 //       if (current.value.key === key) {
 //         answer = current.value.value;
 //         break;
 //       }
 //
 //       current = current.next;
 //     }
 //
 //     // move the found node to the front of the list (to keep it fresh)
 //     if (current !== null && current !== root) {
 //       // pull the node out of where it was...
 //       const oldPrevious = current.previous;
 //       const oldNext = current.next;
 //       if (oldPrevious !== null) oldPrevious.next = oldNext;
 //       if (oldNext !== null) oldNext.previous = oldPrevious;
 //
 //       // ...and insert it at the beginning of the list
 //       root.previous = current;
 //       current.next = root;
 //       root = current;
 //       root.previous = null;
 //     }
 //
 //     return answer;
 //   }
 //
 //   function put(key, value) {
 //     // insert new node into the front of list
 //     const newNode = new Node({ key, value });
 //     if (root !== null) root.previous = newNode;
 //     newNode.next = root;
 //     root = newNode;
 //
 //     // removing end root
 //     if (size >= maxSize) {
 //       let current = root;
 //
 //       while (current !== null && current.next !== null) {
 //         current = current.next;
 //       }
 //
 //       const oldPrevious = current.previous;
 //       if (oldPrevious !== null) oldPrevious.next = null;
 //       if (current === root) root = null;
 //     } else {
 //       size = size + 1;
 //     }
 //   }
 //
 //   return {
 //     get,
 //     put
 //   }
 // }


module.exports = {
  LRUCache
}
