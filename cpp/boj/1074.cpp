/* Z

URL: https://www.acmicpc.net/problem/1074

한수는 2차원 배열 (항상 2^N * 2^N 크기이다)을 Z모양으로 탐색하려고 한다.
만약, 2차원 배열의 크기가 2^N * 2^N라서 왼쪽 위에 있는 칸이 하나가 아니라면,
배열을 4등분 한 후에 (크기가 같은 2^(N-1)로) 재귀적으로 순서대로 방문한다.

N이 주어졌을 때, (r, c)를 몇 번째로 방문하는지 출력하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N r c가 주어진다.
N은 15보다 작거나 같은 자연수이고, r과 c는 0보다 크거나 같고,
2^N-1보다 작거나 같은 정수이다

[출력]
첫째 줄에 문제의 정답을 출력한다.
*/

// #include <algorithm>
#include <cmath>
#include <iostream>
using namespace std;

int n, r, c;
int result = 0;

void getOrder(int x, int y, int l) {
  if (x == r && y == c) {
    cout << result << endl;
    exit(0);
  }
  if (l == 1) {
    result++;
    return;
  };
  // 해당 범위 내에 없을 경우
  if (!(x <= r && r < x + l && y <= c && c < y + l)) {
    result += l * l;
    return;
  }
  getOrder(x, y, l / 2);
  getOrder(x, y + l / 2, l / 2);
  getOrder(x + l / 2, y, l / 2);
  getOrder(x + l / 2, y + l / 2, l / 2);
}

int main(void) {
  cin >> n >> r >> c;
  getOrder(0, 0, pow(2, n));

  return 0;
}