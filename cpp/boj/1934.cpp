/*최소공배수

[입력]
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000)

[출력]
첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다.
*/
#include <iostream>
using namespace std;

int t, a, b;

int gcd(int a, int b)
{
    if (a % b == 0)
        return b;
    return gcd(b, a % b);
}

int main(void)
{
    cin >> t;
    while (t--)
    {
        cin >> a >> b;
        cout << (a * b) / gcd(a, b) << endl;
    }
    return 0;
}