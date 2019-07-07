// A+B - 6

#include <iostream>
using namespace std;

int n, a, b;
char c;

int main(void) {
  cin >> n;
  while (n--) {
    scanf("%d%c%d", &a, &c, &b);
    cout << a + b << endl;
  }
  return 0;
}
