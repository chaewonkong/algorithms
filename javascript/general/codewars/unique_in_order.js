/* Unique In Order

Implement the function unique_in_order 
which takes as argument a sequence 
and returns a list of items without any elements 
with the same value next to each other 
and preserving the original order of elements.

URL: "https://www.codewars.com/kata/54e6533c92449cc251001667"
*/

const uniqueInOrder = function(iterable) {
  const results = [];
  let arr = [];
  for (let i = 0; i < iterable.length; i++) arr.push(iterable[i]);
  function find(arr) {
    if (arr.length === 0) return;
    if (results[results.length - 1] === arr[0]) {
      arr.shift();
      find(arr);
    } else {
      results.push(arr.shift());
      find(arr);
    }
  }
  find(arr);
  return results;
};

// Test
console.log(uniqueInOrder("AABBCCaaA"));
