/* Vowel Count
 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

(ex)
getCount("abracadabra") => 5
*/

/*
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "i", "o", "u", "e"];
  for (l of str) {
    if (vowels.filter(v => v === l).length) vowelsCount += 1;
  }
  return vowelsCount;
}
*/

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
