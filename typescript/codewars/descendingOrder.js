"use strict";
/*Descending Order

from Codewars
URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.descendingOrder = function (n) {
        var numbers = String(n).split("").map(function (s) { return parseInt(s); });
        function mergeSort(arr, reverse) {
            if (reverse === void 0) { reverse = false; }
            if (arr.length <= 1)
                return arr;
            function divide(lo, hi) {
                if (lo === hi)
                    return;
                var mid = ~~((lo + hi) / 2);
                divide(lo, mid);
                divide(mid + 1, hi);
                merge(lo, mid, hi);
            }
            function merge(lo, mid, hi) {
                var left = lo;
                var right = mid + 1;
                var tmp = [];
                while (left <= mid || right <= hi) {
                    if (reverse) {
                        if (left <= mid && (arr[left] > arr[right] || right > hi)) {
                            tmp.push(arr[left]);
                            left += 1;
                        }
                        else {
                            tmp.push(arr[right]);
                            right += 1;
                        }
                    }
                    else {
                        if (left <= mid && (arr[left] < arr[right] || right > hi)) {
                            tmp.push(arr[left]);
                            left += 1;
                        }
                        else {
                            tmp.push(arr[right]);
                            right += 1;
                        }
                    }
                }
                arr.splice.apply(arr, [lo, hi - lo + 1].concat(tmp));
            }
            divide(0, arr.length - 1);
            return arr;
        }
        return parseInt(mergeSort(numbers, true).join(""));
    };
    return Kata;
}());
exports.Kata = Kata;
