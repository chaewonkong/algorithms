/* Radix Sort

sort data with integer keys by grouping keys by the individual digits 
which share the same significant position and value.
*/

function radixSort(array, r) {
  /* Radix Sorting Algoritm: return sorted array

        array: integer array to sort
        r: radix
        getMax(array): return max el from given array
        countSort(array, exp): return sorted array based on exp-th place value
     */

  function getMax(array) {
    let mx = array[0];
    for (el of array) {
      if (el > mx) mx = el;
    }
    return mx;
  }

  function countSort(array, exp) {
    // create new [] to store sorted output for each place value
    const output = [];
    // create new [] to store occurences
    const counts = Array(r).fill(0);
    // Store count of occurrences in count []
    for (let i = 0; i < r; i++) {
      counts[Math.floor(array[i] / exp) % r]++;
    }
    // console.log(counts);
    // Change counts[i] to be cummulative sum from counts[0] to counts[i-1]
    // so that counts[i] now contains
    // actual position of this digit in output[]
    for (let i = 1; i < r; i++) {
      counts[i] = counts[i] + counts[i - 1];
    }

    // Build the output []
    for (let i = array.length - 1; i >= 0; i--) {
      let placeVal = Math.floor(array[i] / exp) % r;
      output[counts[placeVal] - 1] = array[i];
      counts[placeVal]--;
    }
    return output;
  }

  // set mx with maximum element in array
  const mx = getMax(array);

  // Do counting sort for every digit.
  // exp = radix^i where i is current digit number
  for (let exp = 1; mx / exp > 0; exp *= r) {
    array = countSort(array, exp);
  }

  return array;
}
