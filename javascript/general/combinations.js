/*
Combinations

Return all possible combinations of N number of item,
for given array. 
*/

const arr = [1, 2, 2, 2, 3];
const N = 3;

function getAllCombinations(arr, N) {
  const combinations = [];
  const picked = [];
  const used = [];
  for (item of arr) used.push(0);

  function find(picked) {
    if (picked.length === N) {
      const rst = [];
      for (let i of picked) {
        rst.push(arr[i]);
      }
      combinations.push(rst);
      return;
    } else {
      let start = picked.length ? picked[picked.length - 1] + 1 : 0;
      for (let i = start; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1] || used[i - 1]) {
          picked.push(i);
          used[i] = 1;
          find(picked);
          picked.pop();
          used[i] = 0;
        }
      }
    }
  }
  find(picked);
  return combinations;
}

console.log(getAllCombinations(arr, N));
