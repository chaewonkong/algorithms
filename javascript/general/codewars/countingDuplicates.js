/* Counting Duplicates

from Codewars
URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string. 
The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
  if (text.length === 0) return 0;
  text = text.toLowerCase();
  let count = 0;
  let found = [];
  for (l of text) {
    if (found.indexOf(l) === -1 && text.indexOf(l) !== text.lastIndexOf(l)) {
      found.push(l);
      count += 1;
    }
  }
  return count;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
