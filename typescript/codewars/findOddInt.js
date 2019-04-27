"use strict";
/* Find the odd int

from Codewars
URL: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
var findOdd = function (xs) {
    xs.sort(function (a, b) { return a - b; });
    var count = 1;
    var target = xs[0];
    for (var i = 0; i < xs.length - 1; i++) {
        console.log(target, count);
        if (xs[i] === xs[i + 1]) {
            count += 1;
        }
        else {
            if (count % 2 === 1)
                return target;
            else {
                count = 0;
                target = xs[i + 1];
            }
        }
    }
    return target;
};
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
