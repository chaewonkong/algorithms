function isPrime(num) {
  if (num < 2) return false;
  else if (num === 2) return true;
  sqrtNum = num ** 0.5;
  for (let i = 2; i < sqrtNum + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
