/* 수 복원하기

양의 정수 N이 주어졌을 때, 이 수를 소인수분해 한 결과를 출력하는 프로그램을
작성하시오.

[입력]
첫째 줄에 테스트 케이스의 수가 주어진다. 각 테스트 케이스마다 양의 정수 N (2 ≤ N
≤ 100,000)이 주어진다.

[출력]
각 테스트 케이스마다 각 인수와 그 인수가 곱해진 횟수를 한 줄씩 출력한다. 출력
순서는 인수가 증가하는 순으로 한다.
*/

#include <iostream>
using namespace std;

int k, n, d, cnt;

void decomp(int n) {
  d = 2;
  cnt = 0;
  while (n > 1) {
    if (n % d == 0) {
      n /= d;
      cnt += 1;
    } else {
      if (cnt > 0) cout << d << " " << cnt << endl;
      d += 1;
      cnt = 0;
    }
  }
  cout << d << " " << cnt << endl;
}

int main(void) {
  cin >> k;
  while (k--) {
    cin >> n;
    decomp(n);
  }

  return 0;
}