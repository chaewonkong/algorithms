/* 토너먼트

No.1057
URL: https://www.acmicpc.net/problem/1057

[입력]
첫째 줄에 참가자의 수 N과 1 라운드에서 김지민의 번호와 
임한수의 번호가 순서대로 주어진다. 
N은 100,000보다 작거나 같은 자연수이고, 
김지민의 번호와 임한수의 번호는 N보다 작거나 같은 자연수이고, 
서로 다르다.

[출력]
첫째 줄에 김지민과 임한수가 대결하는 라운드 번호를 출력한다. 
만약 서로 대결하지 않을 때는 -1을 출력한다.
*/
#include <iostream>
using namespace std;

int n, kim, lim;
int rounds = 1;

int main(void)
{
    cin >> n >> kim >> lim;
    while ((kim + 1) / 2 != (lim + 1) / 2)
    {
        kim = (kim + 1) / 2;
        lim = (lim + 1) / 2;
        rounds += 1;
    }
    cout << rounds << endl;
    return 0;
}