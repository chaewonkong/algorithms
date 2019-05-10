/* Selection Sort 

Sort given array by repeatedly finding the minimum element 
(considering ascending order) from unsorted part 
and putting it at the beginning. 

selectionSort(array[, reverse])
    * array: target array to sort
    * reverse: take boolean value. optional param. 
            true for descending, false for ascending.
*/

function selectionSort(arr, reverse = false) {
  function swap(i, j) {
    // Swap arr[i] with arr[j]
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  const n = arr.length;

  // Sort
  for (let i = 0; i < n - 1; i++) {
    // if reverse, idx represents index of max in arr.
    // if not reverse, idx represents index of min in arr.
    let idx = i;

    for (let j = i + 1; j < n; j++) {
      // if reverse, find max from remaining elements and assign index to idx
      if (reverse === false && arr[idx] > arr[j]) idx = j;
      // if not reverse, assign index of min to idx
      else if (reverse && arr[idx] < arr[j]) idx = j;
    }

    // if idx !== i, it means arr[i] need to be taken over by arr[idx]
    if (idx !== i) swap(idx, i);
  }

  return arr;
}
