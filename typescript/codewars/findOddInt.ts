/* Find the odd int

from Codewars
URL: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

const findOdd = (xs: number[]): number => {
  xs.sort((a: number, b: number): number => a - b);
  let count: number = 1;
  let target: number = xs[0];
  for (let i: number = 0; i < xs.length - 1; i++) {
    if (xs[i] === xs[i + 1]) {
      count += 1;
    } else {
      if (count % 2 === 1) return target;
      else {
        count = 1;
        target = xs[i + 1];
      }
    }
  }
  return target;
};

/*
export const findOdd = (xs: number[]): number => {
  // happy coding!
  return xs.reduce( (a,b)=> a^b);
};
*/
