/* 최소공배수

[입력]
한 줄에 두 정수 A와 B가 공백으로 분리되어 주어진다.

50%의 입력 중 A와 B는 1000(103)보다 작다. 
다른 50%의 입력은 1000보다 크고 100000000(108)보다 작다.

추가: 큰 수 입력에 대하여 변수를 64비트 정수로 선언하시오. 
C/C++에서는 long long int를 사용하고, Java에서는 long을 사용하시오.

[출력]
A와 B의 최소공배수를 한 줄에 출력한다.
*/

#include <iostream>
using namespace std;

long long int a, b;

int gcd(long long int a, long long int b)
{
    if (a % b == 0)
        return b;
    return gcd(b, a % b);
}

int main(void)
{
    cin >> a >> b;
    cout << (a * b) / gcd(a, b) << endl;
    return 0;
}