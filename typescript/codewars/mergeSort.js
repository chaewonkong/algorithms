function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  function divide(lo, hi) {
    if (lo === hi) return;
    let mid = ~~((lo + hi) / 2);
    divide(lo, mid);
    divide(mid + 1, hi);
    merge(lo, mid, hi);
  }
  function merge(lo, mid, hi) {
    let left = lo;
    let right = mid + 1;
    const tmp = [];
    while (left <= mid || right <= hi) {
      if (left <= mid && (arr[left] < arr[right] || right > hi)) {
        tmp.push(arr[left]);
        left += 1;
      } else {
        tmp.push(arr[right]);
        right += 1;
      }
    }
    arr.splice(lo, hi - lo + 1, ...tmp);
  }
  divide(0, arr.length - 1);
  return arr;
}
console.log(mergeSort([9, 1, 4, 5, 2, 3]));
