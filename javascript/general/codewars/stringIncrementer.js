// String Incrementer

// Your job is to write a function which increments a string,
// to create a new string. If the string already ends with a number,
// the number should be incremented by 1.
// If the string does not end with a number,
// number 1 should be appended to the new string.

// Examples:
// foo => foo1
// foobar23 => foobar24
// foo0042 => foo0043
// foo9 => foo10
// foo099 => foo100

function incrementString(string) {
  const isNumeric = s => (Number.isInteger(Number(s)) ? true : false);
  let suffix = "";
  let prefix = "";
  let idx;
  for (let i = string.length - 1; i >= 0; i--) {
    if (isNumeric(string[i])) {
      suffix = string[i] + suffix;
    } else {
      idx = i;
      break;
    }
  }
  prefix = string.slice(0, idx + 1);
  const prevLength = suffix.length;
  let zeros = "";
  suffix = String(Number(suffix) + 1);
  if (suffix.length < prevLength) {
    for (let j = 0; j < prevLength - suffix.length; j++) zeros += "0";
  }
  return prefix + zeros + suffix;
}
console.log(incrementString("foobar000"));
console.log(incrementString("foobar99"));
console.log(incrementString("foo0042"));
console.log(incrementString("foo099"));
console.log(incrementString("foo"));
console.log(incrementString("1"));
