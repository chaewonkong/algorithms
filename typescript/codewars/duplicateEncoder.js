"use strict";
/* Duplicate Encoder

The goal of this exercise is to convert a string to a new string where
each character in the new string is "("
if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/
function duplicateEncode(word) {
    var wordArr = word.toLowerCase().split("");
    var sorted = wordArr.slice().sort();
    var repeated = [];
    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1])
            repeated.push(sorted[i]);
    }
    for (var j = 0; j < wordArr.length; j++) {
        if (repeated.indexOf(wordArr[j]) === -1)
            wordArr[j] = "(";
        else
            wordArr[j] = ")";
    }
    return wordArr.join("");
}
console.log(duplicateEncode("I am King"));
