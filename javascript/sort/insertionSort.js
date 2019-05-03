/* Insertion Sort

At each iteration, insertion sort removes one element from the input data, 
finds the location it belongs within the sorted list, and inserts it there.
*/

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    while (i > 0 && array[i - 1] > array[i]) {
      let key = array[i];
      array[i] = array[i - 1];
      array[i - 1] = key;
      i -= 1;
    }
  }
  return array;
}
