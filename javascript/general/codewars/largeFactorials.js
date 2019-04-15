/* Large Factorials

URL: https://www.codewars.com/kata/557f6437bf8dcdd135000010/train/javascript

In mathematics, the factorial of integer n is written as n!. 
It is equal to the product of n and every integer preceding it. 
For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. 
For any values outside the non-negative range, return null, nil or None. 
For non-negative numbers a full length number is expected for example, 
return 25! = "15511210043330985984000000" as a string.
*/

function factorial(n) {
  let ret = "1";
  let i = 1;
  while (i <= n) {
    ret = multiplyBigInt(ret, String(i));
    i += 1;
  }
  return ret;
}

function multiplyBigInt(a, b) {
  // a.length >= b.length
  let ret = [];
  for (let i = b.length - 1; i >= 0; i--) {
    let liftUp = 0;
    let cumMul = "";
    for (let j = a.length - 1; j >= 0; j--) {
      let partialMul = parseInt(a[j]) * parseInt(b[i]) + liftUp;
      liftUp = 0;
      if (partialMul >= 10) {
        liftUp = Math.floor(partialMul / 10);
        partialMul -= liftUp * 10;
      }
      cumMul = String(partialMul) + cumMul;
    }
    if (liftUp > 0) cumMul = String(liftUp) + cumMul;
    console.log(cumMul);
    ret.push(cumMul);
  }
  for (let i = 0; i < ret.length; i++) {
    ret[i] += "0".repeat(i);
  }
  if (ret.length > 1) return ret.reduce((a, x) => sumBigInt(a, x));
  return ret[0];
}

function sumBigInt(a, b) {
  let ret = "";
  let liftUp = 0;
  while (a.length < b.length) a = "0" + a;
  while (a.length > b.length) b = "0" + b;
  for (let i = a.length - 1; i >= 0; i--) {
    let partialSum = parseInt(a[i]) + parseInt(b[i]) + liftUp;
    liftUp = 0;
    if (partialSum >= 10) {
      partialSum -= 10;
      liftUp += 1;
    }
    ret = String(partialSum) + ret;
  }
  if (liftUp > 0) ret = String(liftUp) + ret;
  return ret;
}

// console.log(multiplyBigInt("1", "2"));
// console.log(factorial(15));
// console.log(sumBigInt("99", "1"));

/* Best Answer
function factorial(n) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}

*/
