/* 팩토리얼

[입력]
0 <= N <= 12인 정수 N이 주어진다

[출력]
N!를 출력한다
*/
#include <iostream>
using namespace std;

int n, ret;

int main(void)
{
    ret = 1;
    cin >> n;

    while (n)
    {
        ret *= n;
        n--;
    }
    cout << ret << endl;
    return 0;
}