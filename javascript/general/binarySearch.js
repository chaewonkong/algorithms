/* Binary Search 
Algorithm in JavaScript

Return index of target value from sorted list.
If no result, return -1.
*/

function binarySearch(arr, target) {
  function search(lo, hi) {
    const mid = parseInt((lo + hi) / 2);
    if (lo === hi) {
      if (arr[lo] != target) return -1;
      return lo;
    } else if (target > arr[mid]) {
      return search(mid + 1, hi);
    } else {
      return search(lo, mid);
    }
  }

  return search(0, arr.length - 1);
}

const arr = [1, 2, 3, 4, 5];
for (let n = 0; n < 6; n++) {
  console.log(binarySearch(arr, n));
}
