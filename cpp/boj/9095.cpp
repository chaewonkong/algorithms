/*1, 2, 3 더하기

https://www.acmicpc.net/problem/9095

[입력]
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져
있고, 정수 n이 주어진다. n은 양수이며 11보다 작다.

[출력]
각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.
 */

#include <iostream>
using namespace std;

int t, n;
int dp[1000];

int f(int n) {
  if (dp[n])
    return dp[n];
  else {
    if (n == 0)
      return dp[0] = 0;
    else if (n == 1)
      return dp[1] = 1;
    else if (n == 2)
      return dp[2] = 2;
    else if (n == 3)
      return dp[3] = 4;

    else {
      return dp[n] = f(n - 1) + f(n - 2) + f(n - 3);
    }
  }
}

int main(void) {
  cin >> t;
  while (t--) {
    cin >> n;
    cout << f(n) << endl;
  }
  return 0;
}
