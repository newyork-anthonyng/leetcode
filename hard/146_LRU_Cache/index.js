/*
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 */

function Node(value) {
  this.value = value;
  this.previous = previous;
  this.next = next;
}

function LRUCache(size) {
 let currentSize = 0;
 let root = null;
 let tail = null;
 const dictionary = {};

 function removeNodeWithKey(key) {
   const node = dictionary[key];
   if (node) {
     removeNodeFromCurrentPosition(node);

     dictionary[key] = null;
     return true
   }

   return false;
 }

 function removeLastNodeFromList() {
   if (!tail) return;

   dictionary[tail.value.key] = null;
   if (tail === root) {
     root = null;
     tail = null;
   } else {
     removeNodeFromCurrentPosition(tail);
   }
 }

 function removeNodeFromCurrentPosition(node) {
   if (node === tail) {
     tail = node.previous;
   }

   if (node === root) {
     root = node.next;
   }

   const oldNext = node.next;
   const oldPrevious = node.previous;
   if (oldNext) oldNext.previous = oldPrevious;
   if (oldPrevious) oldPrevious.next = oldNext;

   return node;
 }

 function put(key, value) {
   const didRemoveDuplicateNode = removeNodeWithKey(key);
   if (didRemoveDuplicateNode) {
     currentSize -= 1;
   }

   if (currentSize >= size) {
     removeLastNodeFromList();
     currentSize -= 1;
   }

   const newNode = new Node({ key, value });
   const newRoot = insertNodeIntoRoot(newNode);
   dictionary[key] = newRoot;
   if (!tail) tail = newRoot;
   currentSize += 1;
 }

 function insertNodeIntoRoot(node) {
   if (!root) {
     root = node;
     root.previous = null;
     root.next = null;
     return root;
   }

   root.previous = node;
   node.next = root;
   node.previous = null;
   root = node;

   return node;
 }

 function get(key) {
   const currentNode = dictionary[key];
   if (!currentNode) return -1;

   // move Node to the front of the List
   if (currentNode !== root) {
     const updatedNode = removeNodeFromCurrentPosition(currentNode);

     insertNodeIntoRoot(updatedNode);
   }

   return currentNode.value.value;
 }

 return {
   put,
   get
 }
}

module.exports = {
  LRUCache
}
