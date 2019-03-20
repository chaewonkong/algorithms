// Merge Sort with JS

function mergeSort(arr) {
  function divide(lo, hi) {
    if (lo === hi) return;
    let mid = parseInt((lo + hi) / 2);
    divide(lo, mid);
    divide(mid + 1, hi);
    merge(lo, mid, hi);
  }
  function merge(lo, mid, hi) {
    let left = lo;
    let right = mid + 1;
    const temp = [];
    while (left <= mid || right <= hi) {
      if (left <= mid && (right > hi || arr[left] < arr[right])) {
        temp.push(arr[left]);
        left += 1;
      } else {
        temp.push(arr[right]);
        right += 1;
      }
    }

    arr.splice(lo, hi - lo + 1, ...temp);
  }
  divide(0, arr.length - 1);
  return arr;
}

const arr = [9, 1, 4, 5, 2, 3];
console.log(mergeSort(arr));
