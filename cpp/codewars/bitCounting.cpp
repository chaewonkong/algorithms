/* Bit Counting

Write a function that takes an integer as input, and returns the number of bits
that are equal to one in the binary representation of that number. You can
guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function
should return 5 in this case
 */
#include <iostream>
using namespace std;

unsigned long long n;

unsigned int countBits(unsigned long long n) {
  int cnt = 0;
  while (n) {
    if (n % 2 == 1) cnt += 1;
    n /= 2;
  }
  return cnt;
}

int main(void) {
  cin >> n;
  cout << countBits(n) << endl;
  return 0;
}