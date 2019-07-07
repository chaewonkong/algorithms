// A+B - 8

/*
[입력]
5
1 1
2 3
3 4
9 8
5 2

[출력]
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
 */

#include <iostream>
using namespace std;

int n, i, a, b;

int main(void) {
  cin >> n;
  i = 1;
  while (n--) {
    cin >> a >> b;
    cout << "Case #" << i << ": " << a << " + " << b << " = " << a + b << endl;
    i += 1;
  }

  return 0;
}