const maxCrossingSubArray = (array, low, mid, high) => {
  let leftSum = 0;
  let sum = 0;
  let maxLeft = mid;

  for (let i = mid; i >= low; i--) {
    sum += array[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  let rightSum = 0;
  let maxRight = mid + 1;
  sum = 0;

  for (let i = mid + 1; i <= high; i++) {
    sum += array[i];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = i;
    }
  }

  return {
    sum: leftSum + rightSum,
    maxLeft,
    maxRight,
  };
};

const findMaximumSubArray = (array, low, high) => {
  if (low === high) {
    return {
      sum: array[low],
      maxLeft: low,
      maxRight: high,
    };
  } else {
    const mid = Math.floor((high + low) / 2);

    const leftResult = findMaximumSubArray(array, low, mid);
    const rightResult = findMaximumSubArray(array, Math.min(mid + 1, high), high);
    const crossResult = maxCrossingSubArray(array, low, mid, high);


    if (leftResult.sum >= rightResult.sum && leftResult.sum >= crossResult.sum) {
     return leftResult;
    } else if (rightResult.sum >= leftResult.sum && rightResult.sum >= crossResult.sum) {
     return rightResult;
    } else {
     return crossResult;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    maxCrossingSubArray,
    findMaximumSubArray,
  };
}

/*
 * For debugging
 */
// const array = [1, 2, 3, 4];
// findMaximumSubArray(array, 0, array.length - 1);
