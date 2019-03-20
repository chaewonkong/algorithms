/*Descending Order

from Codewars
URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
*/

export class Kata {
    static descendingOrder(n: number) {
        const numbers: number[] = String(n).split("").map(s => parseInt(s))

        function mergeSort(arr:number[], reverse: boolean = false): number[] {
            if (arr.length <= 1) return arr;
          
            function divide(lo: number, hi: number): void {
              if (lo === hi) return;
              let mid = ~~((lo + hi) / 2);
              divide(lo, mid);
              divide(mid + 1, hi);
              merge(lo, mid, hi);
            }

            function merge(lo: number, mid: number, hi: number): void {
              let left: number = lo;
              let right: number = mid + 1;
              const tmp: number[] = [];
              while (left <= mid || right <= hi) {
                if (reverse) {
                    if (left <= mid && (arr[left] > arr[right] || right > hi)) {
                        tmp.push(arr[left]);
                        left += 1;
                      } else {
                        tmp.push(arr[right]);
                        right += 1;
                      }
                } else {
                    if (left <= mid && (arr[left] < arr[right] || right > hi)) {
                        tmp.push(arr[left]);
                        left += 1;
                      } else {
                        tmp.push(arr[right]);
                        right += 1;
                      }
                }
              }
              arr.splice(lo, hi - lo + 1, ...tmp);
            }

            divide(0, arr.length - 1);
            return arr;
          }

        return parseInt(mergeSort(numbers, true).join(""))
    }
  }