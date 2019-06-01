/* 이항 계수 1

[입력]
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 0 ≤ K ≤ N)

[출력]
이항계수를 출력한다.
*/
#include <iostream>
using namespace std;

int n, k;

int binom(int n, int k)
{
    if (k == 0 || n == k)
        return 1;
    if (k == 1)
        return n;
    return binom(n - 1, k) + binom(n - 1, k - 1);
}

int main(void)
{
    cin >> n >> k;
    cout << binom(n, k) << endl;

    return 0;
}