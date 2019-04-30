/* Product of consecutive Fib numbers

URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

Given a number, say prod (for product), 
we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:
[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod

you will return
[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(m) being the smallest one such as F(m) * F(m+1) > prod.

EXAMPLES
productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false],
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
*/

// function productFib(prod) {
//   let a, b;
//   a = b = 1;
//   while (a * b < prod) {
//     tmp = { a, b };
//     a = tmp.b;
//     b = tmp.a + tmp.b;
//   }
//   return a * b === prod ? [a, b, true] : [a, b, false];
// }

function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
