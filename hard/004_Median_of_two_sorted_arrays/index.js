/*
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/

function findMedianSortedArrays(nums1, nums2) {
  const medianIndexes = getMedianIndexes(nums1.length + nums2.length);

  const copy1 = nums1.slice();
  const copy2 = nums2.slice();
  let currentIndex = 0;
  const capturedNumbers = [];

  while (true) {
    if (copy1[0] === undefined || copy2[0] < copy1[0]) {
      capturedNumbers.push(copy2.shift());
    } else {
      capturedNumbers.push(copy1.shift());
    }

    if (medianIndexes.length === 1) {
      if (currentIndex === medianIndexes[0]) {
        return capturedNumbers[capturedNumbers.length - 1];
      }
    } else {
      if (currentIndex === medianIndexes[1]) {
        return average(capturedNumbers[capturedNumbers.length - 1], capturedNumbers[capturedNumbers.length - 2]);
      }
    }

    currentIndex += 1;
  }
}

function getMedianIndexes(number) {
  if (number % 2 === 0) {
    return [number / 2 - 1, number / 2];
  }

  return [Math.floor(number / 2)];
}

function average(...nums) {
  return sum(...nums) / nums.length;
}

function sum(...nums) {
  return nums.reduce((total, num) => {
    return total + num;
  }, 0);
}

module.exports = {
  findMedianSortedArrays
};
