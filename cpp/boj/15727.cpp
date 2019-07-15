/* 조별과제를 하려는데 조장이 사라졌다


https://www.acmicpc.net/problem/15727


[입력]
첫째 줄에 성우의 현재 위치와 민건이의 집까지의 거리 L(1 ≤ L ≤ 1,000,000)가
주어진다.

[출력]
성우가 최소 t분만에 민건이를 찾을 수 있을 때, t 이상의 가장 작은 정수를
출력한다.
 */

#include <iostream>
using namespace std;

int n;

int main(void) {
  cin >> n;
  if (n % 5)
    cout << n / 5 + 1 << endl;
  else
    cout << n / 5 << endl;

  return 0;
}