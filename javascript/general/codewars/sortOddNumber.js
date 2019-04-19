/* Sort the Odd

from Codewars
URL: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

You have an array of numbers.
Your task is to sort ascending odd numbers 
but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. 
If you have an empty array, you need to return it.

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  const odds = array.filter(e => e % 2 === 1).sort((e1, e2) => e1 - e2);
  return array.map(e => (e % 2 ? odds.shift() : e));
}
